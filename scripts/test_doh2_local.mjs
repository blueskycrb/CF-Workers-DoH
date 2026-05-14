import worker from '../_worker.js';

const env = { DOH2_PATH: 'secret-dns', DOH2_UPSTREAM: 'cloudflare', DOH2_ADBLOCK: 'on' };
let fetchCalls = 0;

let lastFetchUrl = '';
globalThis.fetch = async (url, init = {}) => {
  fetchCalls += 1;
  lastFetchUrl = url.toString();
  const u = new URL(url);
  if (u.searchParams.get('name') === 'www.google.com') {
    return new Response(JSON.stringify({
      Status: 0,
      TC: false,
      RD: true,
      RA: true,
      AD: false,
      CD: false,
      Question: [{ name: 'www.google.com', type: 1 }],
      Answer: [{ name: 'www.google.com', type: 1, TTL: 60, data: '142.250.72.196' }]
    }), { headers: { 'content-type': 'application/dns-json' } });
  }
  if (u.searchParams.get('name') === 'ipv6-only.example') {
    const type = u.searchParams.get('type');
    if (type === 'AAAA') {
      return new Response(JSON.stringify({
        Status: 0,
        Question: [{ name: 'ipv6-only.example', type: 28 }],
        Answer: [{ name: 'ipv6-only.example', type: 28, TTL: 60, data: '2001:db8::1' }]
      }), { headers: { 'content-type': 'application/dns-json' } });
    }
    return new Response(JSON.stringify({
      Status: 0,
      Question: [{ name: 'ipv6-only.example', type: 1 }],
      Answer: []
    }), { headers: { 'content-type': 'application/dns-json' } });
  }
  if (init.method === 'POST' || u.searchParams.has('dns')) {
    return new Response(new Uint8Array([0x12, 0x34, 0x81, 0x80, 0, 1, 0, 0, 0, 0, 0, 0]), { headers: { 'content-type': 'application/dns-message' } });
  }
  return new Response(JSON.stringify({ Status: 3, Answer: [] }), { headers: { 'content-type': 'application/dns-json' } });
};

async function assertOk(name, fn) {
  try {
    await fn();
    console.log('ok - ' + name);
  } catch (err) {
    console.error('not ok - ' + name);
    console.error(err);
    process.exitCode = 1;
  }
}

await assertOk('DoH2 HTML page', async () => {
  const res = await worker.fetch(new Request('https://example.com/doh2'), env);
  const text = await res.text();
  if (res.status !== 200 || !text.includes('DoH 2.0') || !text.includes('/secret-dns')) throw new Error('bad html');
});

await assertOk('DoH2 JSON normal query', async () => {
  fetchCalls = 0;
  const res = await worker.fetch(new Request('https://example.com/json?name=www.google.com&type=A'), env);
  const data = await res.json();
  if (res.status !== 200 || data.Answer?.[0]?.data !== '142.250.72.196' || fetchCalls !== 1) throw new Error('bad json query');
});




await assertOk('DoH2 split API explains selected DNS', async () => {
  const res = await worker.fetch(new Request('https://example.com/split?name=example.123pan.com&resolver=auto'), env);
  const data = await res.json();
  if (data.split !== 'domestic' || data.upstream !== 'AliDNS' || data.ruleType !== 'DOMAIN-SUFFIX' || data.rule !== '123pan.com') throw new Error('bad split info');
});

await assertOk('DoH2 auto split sends domestic domain to AliDNS', async () => {
  fetchCalls = 0;
  lastFetchUrl = '';
  const res = await worker.fetch(new Request('https://example.com/json?name=www.qq.com&type=A&resolver=auto'), env);
  const data = await res.json();
  if (!lastFetchUrl.startsWith('https://dns.alidns.com/resolve') || data.split !== 'domestic') throw new Error('domestic split failed: ' + lastFetchUrl);
});

await assertOk('DoH2 auto split uses imported china.list suffixes', async () => {
  fetchCalls = 0;
  lastFetchUrl = '';
  const res = await worker.fetch(new Request('https://example.com/json?name=example.123pan.com&type=A&resolver=auto'), env);
  const data = await res.json();
  if (!lastFetchUrl.startsWith('https://dns.alidns.com/resolve') || data.split !== 'domestic') throw new Error('china.list suffix split failed: ' + lastFetchUrl);
});

await assertOk('DoH2 auto split sends foreign domain to Cloudflare', async () => {
  fetchCalls = 0;
  lastFetchUrl = '';
  const res = await worker.fetch(new Request('https://example.com/json?name=www.google.com&type=A&resolver=auto'), env);
  const data = await res.json();
  if (!lastFetchUrl.startsWith('https://cloudflare-dns.com/dns-query') || data.split !== 'foreign') throw new Error('foreign split failed: ' + lastFetchUrl);
});

await assertOk('DoH2 JSON IPv4 falls back to IPv6 automatically', async () => {
  fetchCalls = 0;
  const res = await worker.fetch(new Request('https://example.com/json?name=ipv6-only.example&type=A'), env);
  const data = await res.json();
  if (data.Answer?.[0]?.data !== '2001:db8::1' || data.autoFallback !== 'AAAA' || data.query?.type !== 'AAAA' || fetchCalls !== 2) throw new Error('bad ipv6 fallback');
});

await assertOk('DoH2 JSON IPv6 fallback can be disabled', async () => {
  fetchCalls = 0;
  const res = await worker.fetch(new Request('https://example.com/json?name=ipv6-only.example&type=A&fallback=off'), env);
  const data = await res.json();
  if (data.Answer?.length !== 0 || data.autoFallback || data.query?.type !== 'A' || fetchCalls !== 1) throw new Error('fallback should be off');
});

await assertOk('DoH2 adblock does not call upstream', async () => {
  fetchCalls = 0;
  const res = await worker.fetch(new Request('https://example.com/json?name=mobads.baidu.com&type=A'), env);
  const data = await res.json();
  if (!data.blocked || data.Answer?.[0]?.data !== '0.0.0.0' || fetchCalls !== 0) throw new Error('bad adblock');
});

await assertOk('DoH2 private wire endpoint', async () => {
  const res = await worker.fetch(new Request('https://example.com/secret-dns?dns=AA'), env);
  if (res.status !== 200 || !res.headers.get('content-type')?.includes('dns-message')) throw new Error('bad wire endpoint');
});
