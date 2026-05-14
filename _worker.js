let DoH = "cloudflare-dns.com";
const jsonDoH = `https://${DoH}/resolve`;
const dnsDoH = `https://${DoH}/dns-query`;
let DoH路径 = 'dns-query';
// Generated from https://kelee.one/Tool/Loon/Lpx/BlockAdvertisers.lpx
// Only DNS-applicable REJECT rules are included: DOMAIN, DOMAIN-SUFFIX, DOMAIN-KEYWORD.
// Source fetched with Loon-compatible User-Agent.

const AD_BLOCK_EXACT = [
  "acjs.aliyun.com",
  "acs4baichuan.m.taobao.com",
  "ad-evods.tianya.tv",
  "ad.aggrxinc.com",
  "ad.shunchangzhixing.com",
  "adapi.izuiyou.com",
  "adash.man.aliyuncs.com",
  "ads.cup.com.cn",
  "ads.privacy.qq.com",
  "adsmind.gdtimg.com",
  "adsmind.ugdtimg.com",
  "adtrack.e.kuaishou.com",
  "afd.baidu.com",
  "al-log.d.meituan.net",
  "als.baidu.com",
  "api.sm.cn",
  "api.touch-moblie.com",
  "app-analytics-services.com",
  "applog.uc.cn",
  "arms-retcode.aliyuncs.com",
  "atoken.m.taobao.com",
  "babel-statistics-android.d.meituan.net",
  "baichuan-sdk.alicdn.com",
  "beacon-api.aliyuncs.com",
  "bgg.baidu.com",
  "c.sm.cn",
  "click-bes.baidu.com",
  "content-understand-strategy.sm.cn",
  "cpc-service-square.aiclk.com",
  "cpro.baidustatic.com",
  "df.tanx.com",
  "dig.bdurl.net",
  "dsp-x.jd.com",
  "eclick.baidu.com",
  "ems.youku.com",
  "et.tanx.com",
  "extlog.snssdk.com",
  "feed-image.baidu.com",
  "firebaseinappmessaging.googleapis.com",
  "firebaselogging-pa.googleapis.com",
  "fundingchoicesmessages.google.com",
  "gdfp.gifshow.com",
  "gorgon.youdao.com",
  "guide2.bianxianmao.com",
  "h.trace.qq.com",
  "hc-ssp.sm.cn",
  "huatuocode.huatuo.qq.com",
  "hudong.alicdn.com",
  "huichuan-mc.sm.cn",
  "huichuan.sm.cn",
  "iad.g.163.com",
  "im-x.jd.com",
  "info4.video.qq.com",
  "info6.video.qq.com",
  "ios.bugly.qq.com",
  "ios.video.mpush.qq.com",
  "janapi.jd.com",
  "lf-ad-ies.bytecdn.cn",
  "logrcv.aiclk.com",
  "maplocatesdksnapshot.d.meituan.net",
  "mcs.snssdk.com",
  "mercury-gateway.ixiaochuan.cn",
  "metrics-picture.d.meituan.net",
  "miniapp-ad.cdn.bcebos.com",
  "mobads-logs.baidu.com",
  "mobads-pre-config.cdn.bcebos.com",
  "mobads.baidu.com",
  "nadvideo2.baidu.com",
  "nex.163.com",
  "odm.app-ads-services.com",
  "opehs.tanx.com",
  "open.e.kuaishou.cn",
  "open.e.kuaishou.com",
  "ossgw.alicdn.com",
  "oth.str.mdt.qq.com",
  "otheve.beacon.qq.com",
  "partner.uc.cn",
  "pgdt.gtimg.cn",
  "pgdt.ugdtimg.com",
  "pro.bugly.qq.com",
  "qzs.gdtimg.com",
  "qzs.qq.com",
  "redirect.shunchangzhixing.com",
  "retcode.alicdn.com",
  "rmonitor.qq.com",
  "route-stats.d.meituan.net",
  "sdk-log.partner.sm.cn",
  "sdk.e.qq.com",
  "sdk.zhangyuyidong.cn",
  "sdkconfig.video.qq.com",
  "sdklog.zhangyuyidong.cn",
  "stat.y.qq.com",
  "stat6.y.qq.com",
  "statis.miwuad.com",
  "tangram.e.qq.com",
  "tmead.y.qq.com",
  "tmeadbak.y.qq.com",
  "tmeadcomm.y.qq.com",
  "tpns.qq.com",
  "tpstelemetry.tencent.com",
  "wn.pos.baidu.com",
  "wup.imtt.qq.com",
  "xlog.jd.com"
];

const AD_BLOCK_SUFFIX = [
  "17admob.com",
  "1rtb.com",
  "1rtb.net",
  "66mobi.com",
  "ad-scope.com.cn",
  "ad.xelements.cn",
  "ad.xiaomi.com",
  "adfunlink.com",
  "adhub.com.cn",
  "adintl.cn",
  "adjust.com",
  "adjust.net.in",
  "adkwai.com",
  "admobile.mobi",
  "admobile.net.cn",
  "admobile.top",
  "admobile.vip",
  "adn-plus.com.cn",
  "adnplus.com.cn",
  "ads.vungle.com",
  "adsappier.com",
  "adscope.cn",
  "adscope.com.cn",
  "adscope.xyz",
  "adshenshi.com",
  "adsmoloco.com",
  "adsrvr.cn",
  "adsrvr.org",
  "adtaipo.com",
  "adtianmai.com",
  "adukwai.com",
  "advlion.com",
  "adwangmai.com",
  "adx.yixin.im",
  "amazon-adsystem.com",
  "anyrtb.com",
  "anythinktech.com",
  "api.touch-moblie.com",
  "applovin.com",
  "applvn.com",
  "appsad.cn",
  "appsflyersdk.com",
  "artcto.com",
  "bayescom.com",
  "bds.snssdk.com",
  "beanxin.com",
  "beizi.biz",
  "beizi.info",
  "beizi.online",
  "birdgesdk.com",
  "bridgeoos.com",
  "bxsnews.com",
  "byteadverts.com",
  "combocn.com",
  "ctobsnssdk.com",
  "deepinstall.com",
  "domob.cn",
  "doubleclick-cn.net",
  "doubleclick.net",
  "dratio.com",
  "dutils.com",
  "eshiqi.com",
  "etoolads.cn",
  "fancyapi.com",
  "fancydsp.com",
  "fanglinad.com",
  "fireluck.cn",
  "fwosapp.com",
  "gdt.qq.com",
  "getui.com",
  "getui.net",
  "googlesyndication-cn.com",
  "halomobi.com",
  "hubcloud.com.cn",
  "iaddata.com",
  "iads.unity3d.com",
  "igexin.com",
  "imtmp.net",
  "inmobi.cn",
  "inmobi.com",
  "inmobicdn.net",
  "installtongji.online",
  "installtongji.top",
  "jiguang.cn",
  "jpush.cn",
  "jpush.io",
  "kuaichuanad.com",
  "kuaiyiad.com",
  "l.qq.com",
  "letway.cn",
  "lnk0.com",
  "lydaas.cn",
  "lydaas.com",
  "lydaas.com.cn",
  "lydaas.net",
  "lydass.cn",
  "lydass.com.cn",
  "lydass.net",
  "maplehaze.cn",
  "medproad.com",
  "mentamob.com",
  "miaozhen.com",
  "mob.com",
  "mobmore.com",
  "mobrtb.com",
  "moloco.com",
  "motowoo.com",
  "newitai.com",
  "opadlink.com",
  "openinstall.com",
  "openinstall.io",
  "openinstall.online",
  "openinstall.top",
  "openlink.cc",
  "oplinking.com",
  "opstatistics.cn",
  "opstatistics.com",
  "pangle.io",
  "partner.gifshow.com",
  "popadshop.com",
  "puata.info",
  "qchannel01.cn",
  "qidianad.com",
  "ranfenghd.com",
  "rayjump.com",
  "readgps.com",
  "rhinokeen.com",
  "richmob.cn",
  "rixengine.com",
  "setway.cn",
  "shanghailingye.cn",
  "shenshiads.com",
  "sigmob.cn",
  "slyxmobi.com",
  "smadex.com",
  "staevent.work",
  "staevent.xyz",
  "statchannel.store",
  "statchannel.top",
  "statschannel.xyz",
  "statsinstall.xyz",
  "supersonicads.com",
  "tapad.com",
  "tapjoy.com",
  "tianmu.mobi",
  "toponadss.com",
  "tradplusad.com",
  "tuia.cn",
  "ubixioe.com",
  "ugdtimg.com",
  "um0.cn",
  "um1.cn",
  "umeng.com",
  "umengcloud.com",
  "umsns.com",
  "umtrack.com",
  "umtrack0.com",
  "umtrack1.com",
  "umtrack2.com",
  "umv0.com",
  "umv5.com",
  "union.baidu.cn",
  "union.baidu.com",
  "unityads.unitychina.cn",
  "uyunad.com",
  "wayio.cn",
  "whalecloud.com",
  "wrating.com",
  "xcultur.com",
  "xdplt.com",
  "xinduoad.com",
  "xixikf.com",
  "yksdks.com"
];

const AD_BLOCK_KEYWORD = [
  "-ad-sign.byteimg.com",
  "-ad.byteoversea.com",
  "ad.hunyuan.tencent.com",
  "adstrategy",
  "asiad.byteactivity",
  "bjimp.voiceads.cn",
  "iflyad.bj.openstorage.cn",
  "pangolin",
  "panplayable-toutiao",
  "pglstatp",
  "trace.qq.com",
  "trace.video.qq.com"
];


function normalizeAdBlockDomain(domain) {
  return (domain || '').toString().trim().toLowerCase().replace(/^\.+|\.+$/g, '');
}

function isAdBlockedDomain(domain) {
  const name = normalizeAdBlockDomain(domain);
  if (!name) return false;

  if (AD_BLOCK_EXACT.includes(name)) return true;

  if (AD_BLOCK_SUFFIX.some(suffix => name === suffix || name.endsWith('.' + suffix))) return true;

  return AD_BLOCK_KEYWORD.some(keyword => name.includes(keyword));
}

function dnsTypeCode(type) {
  const normalized = (type || 'A').toString().toUpperCase();
  if (normalized === 'AAAA' || normalized === '28') return 28;
  if (normalized === 'NS' || normalized === '2') return 2;
  return 1;
}

function blockedDnsJsonResponse(domain, type) {
  const normalizedType = (type || 'A').toString().toUpperCase();
  const question = [];
  const answer = [];
  const addRecord = (recordType, data) => {
    question.push({ name: domain, type: recordType });
    answer.push({ name: domain, type: recordType, TTL: 60, data });
  };

  if (normalizedType === 'ALL') {
    addRecord(1, '0.0.0.0');
    addRecord(28, '::');
  } else if (dnsTypeCode(normalizedType) === 28) {
    addRecord(28, '::');
  } else if (dnsTypeCode(normalizedType) === 1) {
    addRecord(1, '0.0.0.0');
  } else {
    question.push({ name: domain, type: dnsTypeCode(normalizedType) });
  }

  return new Response(JSON.stringify({
    Status: 0,
    TC: false,
    RD: true,
    RA: true,
    AD: false,
    CD: false,
    Question: question,
    Answer: answer,
    ipv4: { records: answer.filter(record => record.type === 1) },
    ipv6: { records: answer.filter(record => record.type === 28) },
    ns: { records: [] },
    blocked: true,
    blockedBy: 'adblock'
  }, null, 2), {
    headers: {
      "content-type": "application/json; charset=UTF-8",
      'Access-Control-Allow-Origin': '*'
    }
  });
}


const DOH2_UPSTREAMS = {
  auto: { label: 'Auto split', json: 'auto', wire: 'auto' },
  cloudflare: { label: 'Cloudflare', json: 'https://cloudflare-dns.com/dns-query', wire: 'https://cloudflare-dns.com/dns-query' },
  'cloudflare-security': { label: 'Cloudflare Security', json: 'https://security.cloudflare-dns.com/dns-query', wire: 'https://security.cloudflare-dns.com/dns-query' },
  'cloudflare-family': { label: 'Cloudflare Family', json: 'https://family.cloudflare-dns.com/dns-query', wire: 'https://family.cloudflare-dns.com/dns-query' },
  google: { label: 'Google', json: 'https://dns.google/resolve', wire: 'https://dns.google/dns-query' },
  quad9: { label: 'Quad9', json: 'https://dns.quad9.net/dns-query', wire: 'https://dns.quad9.net/dns-query' },
  adguard: { label: 'AdGuard', json: 'https://dns.adguard-dns.com/resolve', wire: 'https://dns.adguard-dns.com/dns-query' },
  alidns: { label: 'AliDNS', json: 'https://dns.alidns.com/resolve', wire: 'https://dns.alidns.com/dns-query' },
  '360': { label: '360 DNS', json: 'https://doh.360.cn/resolve', wire: 'https://doh.360.cn/dns-query' },
  dnspod: { label: 'DNSPod', json: 'https://doh.pub/dns-query', wire: 'https://doh.pub/dns-query' },
  'sm2-dnspod': { label: 'DNSPod SM2', json: 'https://sm2.doh.pub/dns-query', wire: 'https://sm2.doh.pub/dns-query' }
};

// BEGIN GENERATED CHINA RULES
// Generated from https://raw.githubusercontent.com/blueskycrb/ios_surge/main/china.list
// Includes DOMAIN, DOMAIN-SUFFIX, and DOMAIN-KEYWORD rules.
const CHINA_RULE_EXACT = [
  "1panel.cn",
  "aliys.cn",
  "app-analytics-services.com",
  "app-measurement.com",
  "b23.tv",
  "cdn-go.cn",
  "cip.cc",
  "cndocsys.cn",
  "comres.cndocsys.cn",
  "csdnimg.cn",
  "doh.pub",
  "dumpapp.com",
  "easytomessage.com",
  "ecer-app-api.wsb003.cn",
  "ecer-bhv.wsb003.cn",
  "edge.activity.windows.com",
  "edge.microsoft.com",
  "feixue666.com",
  "flowus.cn",
  "gantanhao.vip",
  "gbox.run",
  "gitee.com",
  "hbyswx.com",
  "hhzyapi.com",
  "id6.me",
  "iecvlist.microsoft.com",
  "iosign.tk",
  "ip125.com",
  "itvbox.cc",
  "jdyyc.cn",
  "jszyapi.com",
  "kelee.one",
  "learnywhere.cn",
  "lenglengyu.com",
  "license.wsb003.cn",
  "like996.icu",
  "lucky666.cn",
  "miot-spec.org",
  "mipay.com",
  "msedge.api.cdp.microsoft.com",
  "nyxz166.cn",
  "recaptcha.net",
  "rumt-zh.com",
  "simhaoka.com",
  "sourl.cn",
  "tb3.cn",
  "u3v.cn",
  "uri6.com",
  "visa.cn",
  "volctrack.com",
  "vsmarketplacebadge.apphb.com",
  "wxaurl.cn",
  "xhslink.com",
  "xn--uzw362b.shop",
  "xueqiu.com",
  "yaohuo.me",
  "ztvip1.cn"
];

const CHINA_RULE_SUFFIX = [
  "0kkkkkt.com",
  "10010.cn",
  "10010.com",
  "10010hb.net",
  "10086.cn",
  "10099.com.cn",
  "10155.com",
  "11222.cn",
  "115.com",
  "122.gov.cn",
  "12306.cn",
  "123pan.cn",
  "123pan.com",
  "12530.com",
  "126.net",
  "127.net",
  "139.com",
  "163.com",
  "163yun.com",
  "17173cdn.com",
  "17u.cn",
  "17usoft.com",
  "17wo.cn",
  "189.cn",
  "189sd.cn",
  "1drv.com",
  "1drv.ms",
  "1rtb.com",
  "1rtb.net",
  "21cn.com",
  "21vbc.com",
  "21vbluecloud.com",
  "21vbluecloud.net",
  "2345.com",
  "25mao.com",
  "3.cn",
  "300hu.com",
  "315jiage.cn",
  "321fenx.com",
  "360.cn",
  "360buyimg.com",
  "360kan.com",
  "365dmp.com",
  "365yg.com",
  "3o7bcr40xo.cn",
  "40017.cn",
  "4u4.cn",
  "4wgj.com",
  "50bangzh.com",
  "51.la",
  "51pt.top",
  "51y5.net",
  "52132.asia",
  "5213211.xyz",
  "52pojie.cn",
  "576tv.com",
  "58.com",
  "6173iru57g.cn",
  "71edge.com",
  "91haoka.cn",
  "95007.com",
  "95516.com",
  "95598.cn",
  "9qrs.cn",
  "a-msedge.net",
  "a-touchin.com",
  "a1158.g.akamai.net",
  "a122.dscg3.akamai.net",
  "a767.dscg3.akamai.net",
  "aa1.cn",
  "aadrm.cn",
  "aadrm.com",
  "abox.plus",
  "account-paypal.info",
  "account-paypal.net",
  "account-paypal.org",
  "accountpaypal.com",
  "accountpaypal.net",
  "accountpaypal.org",
  "acewill.net",
  "acompli.com",
  "acompli.net",
  "adaptivecards.io",
  "adbkwai.com",
  "adintl.cn",
  "adkwai.com",
  "adoutu.com",
  "adtrafficquality.google",
  "adukwai.com",
  "aggresmart.com",
  "aicscience.com",
  "aifenxiang.net.cn",
  "aigei.com",
  "aiguoerp.com",
  "aihoge.com",
  "ailuqiao.cn",
  "aimaiot.cn",
  "aimatech.com",
  "ajkimg.com",
  "aka.ms",
  "akadns.net",
  "aliapp.org",
  "alibaba",
  "alibaba-inc.com",
  "alibaba.com",
  "alibabachengdun.com",
  "alibabachengdun.net",
  "alibabacloud.com",
  "alibabausercontent.com",
  "alicdn.com",
  "alicloudccp.com",
  "alidns.com",
  "aliexpress.com",
  "alipan.com",
  "alipay",
  "alipay-eco.com",
  "alipay.cn",
  "alipay.com",
  "alipay.com.cn",
  "alipayobjects.com",
  "alittle-group.cn",
  "alittle-tea.com",
  "aliyun-inc.com",
  "aliyun.com",
  "aliyuncs.com",
  "aliyundrive.cloud",
  "aliyundrive.com",
  "aliyundrive.net",
  "allinpay.com",
  "alookweb.com",
  "alysm.cn",
  "amap.com",
  "amemv.com",
  "ampproject.org",
  "analysysdata.com",
  "andeer.top",
  "andfx.cn",
  "anfutong.cn",
  "anfutong.com",
  "anfutong.com.cn",
  "anjuke.com",
  "anjukestatic.com",
  "ankarazirvesi2018.com",
  "anticheatexpert.com",
  "antpcdn.com",
  "anythinktech.com",
  "api-extractor.com",
  "apihub-internal.cn",
  "apisof.net",
  "apitd.net",
  "appcenter.ms",
  "apple.cn",
  "apple.com",
  "appleku.com",
  "applicationinsights.io",
  "applicationinsights.net",
  "appserviceenvironment.cn",
  "aria.ms",
  "ashuiai.com",
  "asp.net",
  "aspnetcdn.com",
  "assets-yammer.com",
  "atianqi.com",
  "autman.cn",
  "autohome.com.cn",
  "autonavi.com",
  "axinfu.com",
  "azcrmc-test.cn",
  "azcrmc.cn",
  "azk8s.cn",
  "aznbcontent.cn",
  "aztask.cn",
  "azure",
  "azure-api.cn",
  "azure-apihub.cn",
  "azure-apim.net",
  "azure-automation.cn",
  "azure-connectedvehicles-stage.cn",
  "azure-connectedvehicles.cn",
  "azure-devices-int.net",
  "azure-devices-provisioning.cn",
  "azure-devices.cn",
  "azure-devices.net",
  "azure-dns.cn",
  "azure-dns.com",
  "azure-dns.info",
  "azure-dns.net",
  "azure-dns.org",
  "azure-mobile.net",
  "azure-sphere.com",
  "azure-test.net",
  "azure.cn",
  "azure.com",
  "azure.net",
  "azurecomcdn.net",
  "azurecomm.net",
  "azurecontainer.io",
  "azurecosmos.net",
  "azurecosmosdb.com",
  "azurecosmosdb.info",
  "azurecosmosdb.net",
  "azurecr-test.cn",
  "azurecr.cn",
  "azuredatabricks.net",
  "azuredevopslaunch.com",
  "azuredigitaltwin.com",
  "azuredigitaltwins.com",
  "azuredigitaltwins.net",
  "azuredns-prd.info",
  "azuredns-prd.org",
  "azureedge-test.net",
  "azureedge.net",
  "azurefd.net",
  "azurefd.us",
  "azurehdinsight.cn",
  "azureiotcentral.com",
  "azureiotsolutions.com",
  "azureiotsuite.cn",
  "azureiotsuite.com",
  "azuremresolver.cn",
  "azureplanetscale.info",
  "azureplanetscale.net",
  "azureprivatedns.cn",
  "azurerms.cn",
  "azurerms.com",
  "azuresandbox.cn",
  "azureserviceprofiler.com",
  "azuresmartspaces.net",
  "azurestackvalidation.com",
  "azurewebsites.net",
  "b.akamaiedge.net",
  "b2clogin.cn",
  "b3itech.cn",
  "baibaipei.com",
  "baidassets.cn",
  "baidu",
  "baidu.com",
  "baidubce.com",
  "baidupcs.com",
  "baike.com",
  "bankcomm.com",
  "baomitu.com",
  "bbing.com",
  "bcebos.com",
  "bcelive.com",
  "bdimg.com",
  "bdstatic.com",
  "bdurl.net",
  "bdxiguaimg.com",
  "bdxiguastatic.com",
  "bdycdn.cn",
  "beianbes.com.cn",
  "beibao.cn",
  "beibao.com",
  "beibao.com.cn",
  "beingfine.cn",
  "beizi.biz",
  "bestadprof.com",
  "bestpay.cn",
  "beth.games",
  "bethesda.net",
  "bethesdagamestudios.com",
  "bethsoft.com",
  "bibg.com",
  "bidtoolads.com",
  "biing.com",
  "biliapi.com",
  "biliapi.net",
  "bilibili.cn",
  "bilibili.com",
  "bilicomic.com",
  "bilicomics.com",
  "biligame.com",
  "biliimg.com",
  "bilivideo.com",
  "bill-safe.com",
  "billmelater.com",
  "billmelater.info",
  "billmelater.net",
  "binads.com",
  "binb.com",
  "binf.com",
  "bing",
  "bing.com",
  "bing.com.cn",
  "bing.net",
  "bing123.com",
  "bing135.com",
  "bing4.com",
  "bingads.com",
  "bingagencyawards.com",
  "bingapis.com",
  "bingapistatistics.com",
  "binginternal.com",
  "bingit.net",
  "bingiton.com",
  "bingj.com",
  "bingpix.com",
  "bingpk.com",
  "bings.com",
  "bingsandbox.com",
  "bingtoolbar.com",
  "bingtranslator.com",
  "bingvisualsearch.com",
  "bingworld.com",
  "birdbls.cn",
  "biying.cn",
  "biying.com",
  "biying.com.cn",
  "bjzghd.com",
  "bk-cdn.com",
  "blazor.net",
  "blueaggrestore.com",
  "bluecloudprod.com",
  "bluehatil.com",
  "bluehatnights.com",
  "bmac.com.cn",
  "bml.info",
  "boc.cn",
  "bonree.com",
  "book118.com",
  "bootcdn.net",
  "bootcss.com",
  "boswp.com",
  "botframework.com",
  "braintreegateway.com",
  "braintreegateway.tv",
  "braintreepayments.com",
  "braintreepayments.info",
  "braintreepayments.org",
  "braintreepayments.tv",
  "braintreepaymentsolutions.com",
  "braintreeps.com",
  "brazilpartneruniversity.com",
  "breakdown.me",
  "brg0.com",
  "briantreepayments.net",
  "briantreepayments.tv",
  "bsgslb.cn",
  "bspapp.com",
  "btstu.cn",
  "buyfast-paysmart.net",
  "bxcszlmm.cn",
  "bxsnews.com",
  "bysutu.cn",
  "byteacctimg.com",
  "bytecdn.cn",
  "bytecdn.com",
  "bytecdntp.com",
  "byted-static.com",
  "bytedance.com",
  "bytednsdoc.com",
  "byteeffecttos.com",
  "bytefae.com",
  "bytegecko.com",
  "bytegoofy.com",
  "byteimg.com",
  "bytemaimg.com",
  "bytemastatic.com",
  "bytescm.com",
  "bytetcc.com",
  "bytetos.com",
  "c-ctrip.com",
  "c-msedge.net",
  "cainiao.com",
  "callersbane.com",
  "callget.cn",
  "card.io",
  "cardinfolink.net",
  "cash2.com",
  "cashify.com",
  "cashify.net",
  "ccb.com",
  "ccb.com.cn",
  "ccbft.com",
  "ccbhome.cn",
  "cdn-apple.com",
  "cdn-go.cn",
  "cdnchatgpt.com",
  "cdnhwc2.com",
  "cdntips.net",
  "cegid-cloud.cn",
  "centralvalidation.com",
  "cfca.com.cn",
  "ch9.ms",
  "changhong.com",
  "changmengyun.com",
  "charticulator.com",
  "chei.com.cn",
  "cheryfs.cn",
  "chinacloud-mobile.cn",
  "chinacloudapi.cn",
  "chinacloudapp.cn",
  "chinacloudsites.cn",
  "chinamobile.com",
  "chinanetcenter.com",
  "chinatax.gov.cn",
  "chinaunicom.cn",
  "chsi.com.cn",
  "chuangjing.com",
  "chudian365.com",
  "chunlaiedu.com",
  "cibntv.net",
  "citic",
  "clewm.net",
  "cli.im",
  "clientservices.googleapis.com",
  "cloudapp.net",
  "cloudappsecurity.com",
  "cmcc-cs.cn",
  "cmecloud.cn",
  "cmic.site",
  "cmicapm.com",
  "cmiotcd.com",
  "cmpassport.com",
  "cmread.com",
  "cn",
  "cnblogs.com",
  "cnnb.com.cn",
  "cnzz.com",
  "coalcloud.net",
  "code-abc.com",
  "codethemicrobit.com",
  "colorful.cn",
  "com.cn",
  "coolapk.com",
  "coolkit.cc",
  "coolkit.cn",
  "cortana.ai",
  "cortanaanalytics.com",
  "cortanaskills.com",
  "cosmosdb.info",
  "cosmosdb.net",
  "cotticoffee.com",
  "cpatrk.net",
  "crashlytics.com",
  "crashlyticsreports-pa.googleapis.com",
  "crlocsp.cn",
  "crmdynint-gcc.com",
  "crmdynint.com",
  "crossborderexpansion.com",
  "cs11.wpc.v0cdn.net",
  "cs9.wac.phicdn.net",
  "csdn.net",
  "csdnimg.cn",
  "ctobsnssdk.com",
  "ctrip.com",
  "ctripcorp.com",
  "ctyun.cn",
  "cunjk.com",
  "cup.com.cn",
  "cytxl.com.cn",
  "dailygn.com",
  "dataoke.com",
  "dayibin.cn",
  "dcloud.io",
  "dcocsp.cn",
  "ddnspod.com",
  "ddnsto.com",
  "ddsrem.com",
  "demogic.com",
  "devopsassessment.net",
  "devopsms.com",
  "devtools-paypal.com",
  "dewu.com",
  "di88.net",
  "dianping.com",
  "dianpusoft.cn",
  "dictate.ms",
  "didi.cn",
  "didialift.com",
  "didistatic.com",
  "diditaxi.com.cn",
  "diffit.cn",
  "digicert.cn",
  "digitalyili.com",
  "dingtalk.cn",
  "dingtalk.com",
  "dingxiang-inc.com",
  "discoverbing.com",
  "djbdou.cn",
  "dlife.cn",
  "dnspod.cn",
  "docer.com",
  "docs.com",
  "dominos.com.cn",
  "doom.com",
  "dot.net",
  "douban.com",
  "doubanio.com",
  "doubleclick-cn.net",
  "doubleclick.net",
  "doupay.com",
  "douyin.com",
  "douyincdn.com",
  "douyinliving.com",
  "douyinmusicpromotion.com",
  "douyinpic.com",
  "douyinstatic.com",
  "douyinvod.com",
  "dpfile.com",
  "draftstatic.com",
  "dui88.com",
  "duiba.cn",
  "duiba.com.cn",
  "dutils.com",
  "dwh5.com",
  "dxy.cn",
  "dxy.net",
  "dxycdn.com",
  "dynamics.cn",
  "dynamics.com",
  "e-msedge.net",
  "e-sscard.com",
  "e21.cn",
  "eb.com",
  "ecitic.com",
  "ecombdapi.com",
  "ecombdimg.com",
  "ecombdpage.com",
  "ecombdstatic.com",
  "ecombdvod.com",
  "edge-byted.com",
  "edgesuite.net",
  "effirst.com",
  "efproject.net",
  "eguagua.cn",
  "elderscrolls.com",
  "ele.me",
  "elemecdn.com",
  "elong.com",
  "elongstatic.com",
  "ems.com.cn",
  "emspost.com.cn",
  "engeling.cn",
  "engkoo.com",
  "eol.cn",
  "ergeduoduo.com",
  "eueui.com",
  "everisker.com",
  "evoke-windowsservices-tas.msedge",
  "exijiu.cn",
  "exijiu.com",
  "exp-tas.com",
  "experiencebillmelater.com",
  "explorebing.com",
  "ezrpro.com",
  "f-0.cc",
  "fabric.io",
  "faceu.mobi",
  "fangte.com",
  "fanruan.com",
  "fasttrackreadysupport.com",
  "faw.cn",
  "fcbox.com",
  "feelgood.cn",
  "feimawaiqin.com",
  "feishu.cn",
  "feishucdn.com",
  "feixue666.com",
  "femalefounderscomp.com",
  "feng.com",
  "fengimg.com",
  "fengkongcloud.cn",
  "fengkongcloud.com",
  "ffquan.cn",
  "fibodata.com",
  "filipino-music.net",
  "flipwithsurface.com",
  "flowus.cn",
  "fluidpreview.com",
  "fnnas.cn",
  "fnnas.com",
  "fodexin.com",
  "fonts.googleapis.com",
  "footprintdns.com",
  "forzamotorsport.net",
  "forzaracingchampionship.com",
  "forzarc.com",
  "fraudmetrix.cn",
  "ftqq.com",
  "fummjf.cn",
  "fundpaypal.com",
  "fw4.me",
  "g-town.com.cn",
  "g.akamaiedge.net",
  "gamepass.com",
  "gamesstack.com",
  "gameuxmasterguide.com",
  "gaokao.cn",
  "gbox.run",
  "gdems.com",
  "gdshcm.com",
  "gdtimg.com",
  "gears5.com",
  "gearspop.com",
  "gearstactics.com",
  "geetest.com",
  "geilicdn.com",
  "gepush.com",
  "getbraintree.com",
  "getmicrosoftkey.com",
  "getui.com",
  "getui.net",
  "gfx.ms",
  "ghsmpwalmart.com",
  "gifshow.com",
  "gigjam.com",
  "gitcode.com",
  "glinkmedia.com",
  "globalsign.com",
  "gmoney.org",
  "goofish.com",
  "google-analytics.com",
  "googleadservices.com",
  "googleadsserving.cn",
  "googlesyndication-cn.com",
  "googlesyndication.com",
  "googletagmanager.com",
  "googletagservices.com",
  "gotcosmos.com",
  "gov.cn",
  "graphengine.io",
  "groupme.com",
  "gstatic.cn",
  "gtimg.cn",
  "gtimg.com",
  "gtmc.com.cn",
  "guang.com",
  "guangyuanol.cn",
  "gumingnc.com",
  "gvt1.com",
  "gylm2020.com",
  "gzmiyuan.com",
  "gzppxia.com",
  "gzxijiu.com",
  "haday.cn",
  "haidilao.com",
  "haineiedu.com",
  "halomobi.com",
  "haokale.com",
  "hb12333.com",
  "hb96568.com",
  "hbea.edu.cn",
  "hbesxy.edu.cn",
  "hbesxy.net",
  "hbmdyy.com.cn",
  "hbmu.edu.cn",
  "hbty002.cn",
  "hbwsrc.cn",
  "hdinsightservices.cn",
  "hdlcdns.com",
  "hdslb.com",
  "healthjd.com",
  "helensbar.com",
  "helpshift.com",
  "here.com",
  "here.net",
  "heremaps.cn",
  "heytea.com",
  "hhwenjian.com",
  "hiecheimaetu.com",
  "hitokoto.cn",
  "hitv.com",
  "hlzjppgl.cn",
  "hndachao.cn",
  "hnlshm.com",
  "hockeyapp.net",
  "hoge.cn",
  "hololens.com",
  "hongyibo.com.cn",
  "hotmail",
  "hotmail.co",
  "hotmail.com",
  "hotmail.eu",
  "hotmail.net",
  "hotmail.org",
  "hpplay.cn",
  "httpdns.pro",
  "htv123.com",
  "huaban.com",
  "hualala.com",
  "hubzs.com.cn",
  "huchihuchi.com",
  "huluxia.com",
  "hummingbird.ms",
  "huolala.cn",
  "huoshanimg.com",
  "huya.com",
  "hzchengdun.com",
  "hzysmyy.cn",
  "i-o-u.info",
  "i4.cn",
  "ibytedapm.com",
  "icbc",
  "icbc.com.cn",
  "icc.link",
  "iciba.com",
  "icoke.cn",
  "idaddy.cn",
  "idcfengye.com",
  "idouyinvod.com",
  "idqqimg.com",
  "ie10.com",
  "ie11.com",
  "ie8.co",
  "ie9.com",
  "iesdouyin.com",
  "ietheivaicai.com",
  "ifaster.com.cn",
  "ifengimg.com",
  "ifenglian.com",
  "igexin.com",
  "iguming.net",
  "iiliil.cn",
  "iioszhumi.com",
  "ilianyue.com",
  "imaginecup.pl",
  "imasdk.googleapis.com",
  "imedao.com",
  "img-prod-cms-rt-microsoft-com.akamaized.net",
  "img-s-msn-com.akamaized.net",
  "imgdb.cn",
  "immomo.com",
  "in-neo.cn",
  "ingads.com",
  "inkuai.com",
  "insiderdevtour.com",
  "internetexplorer.co",
  "internetexplorer.com",
  "intunewiki.com",
  "iosrxwy.com",
  "iotinactionevents.com",
  "ioutu.cn",
  "ipip.net",
  "iqiyi.com",
  "iqiyipic.com",
  "irs03.com",
  "issks.com",
  "isvjcloud.com",
  "itc.cn",
  "iturrit.com",
  "ixigua.com",
  "ixiliu.cn",
  "iyunxh.com",
  "jcloudcs.com",
  "jd.com",
  "jdcloud-oss.com",
  "jdcloud.com",
  "jdmk.xyz",
  "jdpay.com",
  "ji-cn.com",
  "jianshu.com",
  "jiaojiangnews.com",
  "jiaxingren.com",
  "jiguang.cn",
  "jikezhida.com",
  "jindd.shop",
  "jingjiu.com",
  "jingpai.com",
  "jingxi.com",
  "jinhua.com.cn",
  "jinlinghotels.com",
  "jinrishici.com",
  "jinritemai.com",
  "jinshanju.com",
  "jisuts.com",
  "joinms.com",
  "joinms.com.cn",
  "joinmva.com",
  "jomodns.com",
  "jomoxd.com",
  "jpush.cn",
  "jpush.io",
  "jsxww.cn",
  "juliangcili.com",
  "juliangip.com",
  "jweiy.cn",
  "jwt.ms",
  "jxcxin.cn",
  "kakamobi.cn",
  "kakamobi.com",
  "kami.vip",
  "kdocs.cn",
  "ke.com",
  "kgimg.com",
  "kidgrid.tv",
  "kiwa-tech.com",
  "kkyd.cn",
  "koala100.cn",
  "komect.com",
  "koolcenter.com",
  "kooldns.cn",
  "koowo.com",
  "koubei.com",
  "krakenjs.com",
  "ks-live.com",
  "ksapisrv.com",
  "ksord.com",
  "ksosoft.com",
  "ksyun.com",
  "ksyungslb.com",
  "kuaifaka.com",
  "kuaifaka.net",
  "kuaishou.cn",
  "kuaishou.com",
  "kuaishoupay.com",
  "kuaishouzt.com",
  "kugou.com",
  "kuiniuca.com",
  "kukago.cn",
  "kukahome.com",
  "kumo.com",
  "kuwo.cn",
  "kwailocallife.com",
  "kwaixiaodian.com",
  "kwaizt.com",
  "kwimgs.com",
  "kwwblcj.com",
  "kydev.net",
  "landiannews.com",
  "lanjie100.com",
  "latampartneruniversity.com",
  "lbbb.cc",
  "lccyy.com",
  "lcsw.cn",
  "ldopay.com",
  "lenovo.cn",
  "lenovo.com",
  "lenovo.com.cn",
  "lianjia.com",
  "linkease.com",
  "linongmall.com",
  "litianwm.cn",
  "litianwm.com",
  "live.cn",
  "live.com",
  "live.com.au",
  "live.eu",
  "live.net",
  "livefilestore.com",
  "livetileedge.dsx.mp.microsoft.com.edgekey.net",
  "livingyourambition.com",
  "ljcdn.com",
  "lkcoffee.com",
  "llyclub.cn",
  "loanbuilder.com",
  "localytics.com",
  "login-paypal.com",
  "login-paypal.info",
  "longguanjia.so",
  "lovestu.com",
  "luckincoffeecdn.com",
  "lvcchong.com",
  "lxnews.cn",
  "ly.com",
  "lync.cn",
  "lync.com",
  "lzsxcl.cc",
  "m12.vc",
  "magicacid.cn",
  "makecode.org",
  "managedmeetingrooms.com",
  "management-azure-devices-int.net",
  "management-azure-devices-provisioning.cn",
  "management-azure-devices.cn",
  "management-azure-devices.net",
  "manmanbuy.com",
  "maoyan.com",
  "mapblast.com",
  "mappoint.com",
  "marmot-cloud.com",
  "masalladeloslimites.com",
  "mazh.top",
  "mc-cdn.cn",
  "mcchcdn.com",
  "mcd.cn",
  "mcdonalds.com.cn",
  "medlive.cn",
  "medproad.com",
  "meetfasttrack.com",
  "meetyourdevices.com",
  "meionetech.com",
  "meishesdk.com",
  "meituan.com",
  "meituan.net",
  "mengniu.cn",
  "mepn.com",
  "mescroll.com",
  "mesh.com",
  "mgmt-azure-api.cn",
  "mgtv.com",
  "mhaixing.cn",
  "mhaixing.com",
  "mhimg.cn",
  "mi-img.com",
  "mi.com",
  "miancp.com",
  "miaozhen.com",
  "microbit.org",
  "microsoft",
  "microsoft-falcon.io",
  "microsoft-give.com",
  "microsoft-int.com",
  "microsoft-online.cn",
  "microsoft-online.com.cn",
  "microsoft-ppe.com",
  "microsoft-sap-events.com",
  "microsoft-sbs-domains.com",
  "microsoft-smb.cn",
  "microsoft-tst.com",
  "microsoft.az",
  "microsoft.be",
  "microsoft.by",
  "microsoft.ca",
  "microsoft.cat",
  "microsoft.ch",
  "microsoft.cl",
  "microsoft.com",
  "microsoft.com.nsatc.net",
  "microsoft.cz",
  "microsoft.de",
  "microsoft.dk",
  "microsoft.ee",
  "microsoft.es",
  "microsoft.eu",
  "microsoft.fi",
  "microsoft.ge",
  "microsoft.hu",
  "microsoft.io",
  "microsoft.is",
  "microsoft.it",
  "microsoft.jp",
  "microsoft.lt",
  "microsoft.lu",
  "microsoft.lv",
  "microsoft.md",
  "microsoft.net",
  "microsoft.pl",
  "microsoft.pt",
  "microsoft.red",
  "microsoft.ro",
  "microsoft.rs",
  "microsoft.ru",
  "microsoft.se",
  "microsoft.si",
  "microsoft.tv",
  "microsoft.ua",
  "microsoft.uz",
  "microsoft.vn",
  "microsoft365.com",
  "microsoftaccountguard.com",
  "microsoftadc.com",
  "microsoftads.com",
  "microsoftadvertising.com",
  "microsoftadvertisingregionalawards.com",
  "microsoftaffiliates.com",
  "microsoftapp.net",
  "microsoftazuread-sso.com",
  "microsoftazuresponsorships.com",
  "microsoftazurestatus.cn",
  "microsoftcloud.com",
  "microsoftcloudsummit.com",
  "microsoftcloudworkshop.com",
  "microsoftcommunitytraining.com",
  "microsoftdiplomados.com",
  "microsofteca.com",
  "microsoftedge.com",
  "microsoftedgeinsider.com",
  "microsoftemail.com",
  "microsoftestore.com.hk",
  "microsoftgamestack.com",
  "microsofthouse.com",
  "microsofthouse.net",
  "microsoftinternetsafety.net",
  "microsoftiotcentral.com",
  "microsoftiotinsiderlabs.com",
  "microsoftlatamaitour.com",
  "microsoftlatamholiday.com",
  "microsoftlinc.com",
  "microsoftmetrics.cn",
  "microsoftmxfilantropia.com",
  "microsoftnews.cc",
  "microsoftnews.cn",
  "microsoftnews.com",
  "microsoftnews.net",
  "microsoftnews.org",
  "microsoftnewsforkids.com",
  "microsoftnewsforkids.net",
  "microsoftnewsforkids.org",
  "microsoftnewskids.com",
  "microsoftnewskids.net",
  "microsoftnewskids.org",
  "microsoftol.com",
  "microsoftol.com.cn",
  "microsoftonline-i.cn",
  "microsoftonline-m-i.cn",
  "microsoftonline-m.cn",
  "microsoftonline-p-i.cn",
  "microsoftonline-p-i.net.cn",
  "microsoftonline-p.cn",
  "microsoftonline-p.com",
  "microsoftonline-p.net",
  "microsoftonline-p.net.cn",
  "microsoftonline.cn",
  "microsoftonline.com",
  "microsoftpartnercommunity.com",
  "microsoftpartnersolutions.com",
  "microsoftpersonalcontent.com",
  "microsoftreactor.cn",
  "microsoftreactor.com.cn",
  "microsoftreactor.info",
  "microsoftreactor.net",
  "microsoftreactor.org",
  "microsoftready.com",
  "microsoftsilverlight.com",
  "microsoftsilverlight.net",
  "microsoftsilverlight.org",
  "microsoftsiteselection.com",
  "microsoftsqlserver.com",
  "microsoftstart.com",
  "microsoftstore.com",
  "microsoftstore.com.cn",
  "microsoftstore.com.hk",
  "microsoftstream.com",
  "microsoftteams.com",
  "microsofttradein.com",
  "microsofttranslator-int.cn",
  "microsofttranslator.com",
  "microsoftusercontent.com",
  "microsoftuwp.com",
  "midea.com",
  "mifile.cn",
  "migu.cn",
  "miguvideo.com",
  "miinsurtech.com",
  "miit.gov.cn",
  "mijia.tech",
  "minecraft.net",
  "minecraftshop.com",
  "mioffice.cn",
  "miui.com",
  "miwifi.com",
  "miyapay.com",
  "miyatech.com",
  "mmais.com.cn",
  "mmarket.com",
  "mmdnn.com",
  "mmstat.com",
  "mncmsidlab1.cn",
  "mob.com",
  "moe.edu.cn",
  "mojang.com",
  "moji.com",
  "mokexapp.io",
  "momentumms.com",
  "mono-project.com",
  "moonshot.cn",
  "morphcharts.com",
  "moxigame.cn",
  "mpnevolution.com",
  "ms",
  "ms-studiosmedia.com",
  "ms365surfaceoffer.com",
  "msa.akadns6.net",
  "msads.net",
  "msappproxy.cn",
  "msappproxy.net",
  "msauth.cn",
  "msauth.net",
  "msauthimages.cn",
  "msauthimages.net",
  "mschallenge2018.com",
  "mschcdn.com",
  "msdn.com",
  "msecnd.net",
  "msedge.net",
  "msft.info",
  "msft.net",
  "msftauth.cn",
  "msftauth.net",
  "msftauthimages.cn",
  "msftauthimages.net",
  "msftcenterone.cn",
  "msftcloudes.cn",
  "msftconnecttest.com",
  "msfteducation.ca",
  "msftidentity.com",
  "msftnet.org",
  "msgamesresearch.com",
  "msgamestudios.com",
  "msidentity.cn",
  "msidentity.com",
  "msidlabpbmc.cn",
  "msignitechina.com",
  "msinnovationchallenge.com",
  "msminico.cn",
  "msminico.com.cn",
  "msn.cn",
  "msn.com",
  "msn.com.cn",
  "msn.com.nsatc.net",
  "msn.com.tw",
  "msn.net",
  "msnewskids.com",
  "msnewskids.net",
  "msnewskids.org",
  "msnkids.com",
  "msnmaps.com",
  "msocdn.com",
  "msocsp.com",
  "msopentech.cn",
  "mspairlift.com",
  "mspil.cn",
  "msra.cn",
  "msropendata.com",
  "msstatic.com",
  "mstea.ms",
  "msturing.org",
  "msudalosti.com",
  "msunlimitedcloudsummit.com",
  "msvevent.com",
  "msxiaobing.com",
  "msxiaoice.com",
  "msxiaona.cn",
  "mucang.cn",
  "mvwchina.com",
  "mwf-service.akamaized.net",
  "mxbc.net",
  "myapp.com",
  "myhomemsn.com",
  "myhuaweicloud.com",
  "mymicrosoft.com",
  "mymlsoft.com",
  "mypikpak.com",
  "myqcloud.com",
  "myquark.cn",
  "mywaytopay.info",
  "mywaytopay.net",
  "mzstatic.com",
  "nblinks.cn",
  "nbms.org.cn",
  "nbwbw.com",
  "nbxjb.com",
  "ndcimgs.com",
  "ndcpp.com",
  "neea.cn",
  "neea.edu.cn",
  "neixin.cn",
  "net.cn",
  "netease.com",
  "netease.im",
  "nextechafrica.net",
  "nexusedgeio.com",
  "nhsa.gov.cn",
  "nhsoft.cn",
  "niceios.com",
  "nmec.org.cn",
  "npmmirror.com",
  "nuget.org",
  "nugettest.org",
  "nuomi.com",
  "nuosike.com",
  "nvzhanshen.com",
  "nxta.org",
  "nxyqs.net",
  "o365cn.com",
  "o365files.cn",
  "o365weve-dev.com",
  "o365weve-ppe.com",
  "o365weve.com",
  "oaspapps.com",
  "office",
  "office.com",
  "office.net",
  "office365-net.cn",
  "office365.cn",
  "office365.com",
  "office365love.com",
  "office365tw.com",
  "officecdn-microsoft-com.akamaized.net",
  "officedev.cn",
  "officeplus.cn",
  "officeppe.net",
  "officewebapps.cn",
  "ofpay365.com",
  "omniroot.com",
  "onecollector.cloudapp.aria",
  "onedrive.co",
  "onedrive.co.uk",
  "onedrive.com",
  "onedrive.eu",
  "onedrive.net",
  "onedrive.org",
  "onenote.com",
  "onenote.net",
  "onesapp.cn",
  "onestore.ms",
  "onethingcloud.com",
  "onethingpcs.com",
  "online-cmcc.cn",
  "onmicrosoft.com",
  "onmschina.cn",
  "ooklaserver.net",
  "open-douyin.com",
  "openai99.top",
  "openinstall.com",
  "openinstall.io",
  "opentranslatorstothings.org",
  "opticsforthecloud.net",
  "optimix.cn",
  "optimizely.com",
  "orithegame.com",
  "osdinfra.net",
  "ourdvsssvip.com",
  "outingsapp.com",
  "outlook.cn",
  "outlook.com",
  "outlookgroups.ms",
  "outlookmobile.com",
  "ovi.com.cn",
  "pa9pal.com",
  "paaypal.com",
  "pailifan.com",
  "paily.net",
  "paily.org",
  "paipal.com",
  "pangolin-dsp-toutiao.com",
  "pangolin-sdk-toutiao-b.com",
  "pangolin-sdk-toutiao.com",
  "pangolin-sdk-toutiao1.com",
  "paperol.cn",
  "passport.net",
  "pavpal.com",
  "paycmic.cn",
  "paydiant.com",
  "paykwai.com",
  "paylike.com",
  "paypa1.com",
  "paypa1.org",
  "paypaal.com",
  "paypal-activate.com",
  "paypal-activate.info",
  "paypal-activate.org",
  "paypal-apac.com",
  "paypal-apps.com",
  "paypal-biz.com",
  "paypal-brandcentral.com",
  "paypal-business.com",
  "paypal-business.net",
  "paypal-business.org",
  "paypal-cardcash.com",
  "paypal-cash.com",
  "paypal-center.com",
  "paypal-center.info",
  "paypal-center.net",
  "paypal-center.org",
  "paypal-communication.com",
  "paypal-communications.com",
  "paypal-communications.net",
  "paypal-community.com",
  "paypal-community.net",
  "paypal-comunidad.com",
  "paypal-corp.com",
  "paypal-database.com",
  "paypal-database.us",
  "paypal-donations.com",
  "paypal-dynamic.com",
  "paypal-engineering.com",
  "paypal-europe.com",
  "paypal-excelinvoicing.com",
  "paypal-exchanges.com",
  "paypal-forward.com",
  "paypal-galactic.com",
  "paypal-gift.com",
  "paypal-gifts.com",
  "paypal-gpplus.com",
  "paypal-here.com",
  "paypal-hrsystem.com",
  "paypal-innovationlab.com",
  "paypal-integration.com",
  "paypal-japan.com",
  "paypal-knowledge.com",
  "paypal-labs.com",
  "paypal-latam.com",
  "paypal-learning.com",
  "paypal-login.com",
  "paypal-login.info",
  "paypal-login.org",
  "paypal-login.us",
  "paypal-luxury.com",
  "paypal-mainstreet.net",
  "paypal-marketing.com",
  "paypal-media.com",
  "paypal-merchantloyalty.com",
  "paypal-mktg.com",
  "paypal-mobilemoney.com",
  "paypal-network.org",
  "paypal-notice.com",
  "paypal-notify.com",
  "paypal-online.info",
  "paypal-online.net",
  "paypal-online.org",
  "paypal-optimizer.com",
  "paypal-pages.com",
  "paypal-photocard.com",
  "paypal-plaza.com",
  "paypal-portal.com",
  "paypal-prepagata.com",
  "paypal-prepagata.net",
  "paypal-prepaid.com",
  "paypal-profile.com",
  "paypal-proserv.com",
  "paypal-qrshopping.org",
  "paypal-recargacelular.com",
  "paypal-redeem.com",
  "paypal-referral.com",
  "paypal-retail.com",
  "paypal-scoop.com",
  "paypal-search.com",
  "paypal-secure.net",
  "paypal-secure.org",
  "paypal-security.net",
  "paypal-security.org",
  "paypal-service.org",
  "paypal-signin.com",
  "paypal-signin.us",
  "paypal-special.com",
  "paypal-specialoffers.com",
  "paypal-sptam.com",
  "paypal-status.com",
  "paypal-support.com",
  "paypal-survey.com",
  "paypal-survey.org",
  "paypal-team.com",
  "paypal-viewpoints.net",
  "paypal.ca",
  "paypal.com",
  "paypal.com.cn",
  "paypal.com.hk",
  "paypal.com.sg",
  "paypal.hk",
  "paypal.info",
  "paypal.jp",
  "paypal.me",
  "paypal.net.cn",
  "paypal.org.cn",
  "paypal.so",
  "paypal.us",
  "paypalbeacon.com",
  "paypalbenefits.com",
  "paypalbrasil.com",
  "paypalcommunity.cn",
  "paypalcommunity.com",
  "paypalcommunity.net",
  "paypalcommunity.org",
  "paypalcorp.com",
  "paypalcredit.com",
  "paypalcreditcard.com",
  "paypalgivingfund.org",
  "paypalhere.cn",
  "paypalhere.com",
  "paypalhere.com.cn",
  "paypalhere.info",
  "paypalhere.net",
  "paypalhere.org",
  "paypalhere.tv",
  "paypali.net",
  "paypalinc.com",
  "paypalindia.com",
  "paypalinsuranceservices.org",
  "paypall.com",
  "paypallabs.com",
  "paypalme.com",
  "paypalnet.net",
  "paypalnet.org",
  "paypalnetwork.info",
  "paypalnetwork.net",
  "paypalnetwork.org",
  "paypalobjects.com",
  "paypalonline.net",
  "paypalonline.org",
  "paypalprepagata.com",
  "paypalprepagata.net",
  "paypalservice.com",
  "paypalshopping.com",
  "paypalshopping.net",
  "paypalsurvey.com",
  "paypalx.com",
  "paypaly.com",
  "payppal.com",
  "payypal.com",
  "pbiwebcontent.cn",
  "pconline.com.cn",
  "pddpic.com",
  "pddugc.com",
  "pdncommunity.com",
  "pearktrue.cn",
  "pglstatp-toutiao.com",
  "pgyer.com",
  "phonefactor.net",
  "phpwc.cn",
  "phpwc.info",
  "picclife.cn",
  "pinduoduo.com",
  "pinduoduo.net",
  "pipi.cn",
  "pixapp.net",
  "pki.goog",
  "playfabapi.cn",
  "playfabcn.com",
  "plian.net",
  "portal101.cn",
  "poshtestgallery.com",
  "poslite.cn",
  "postar.cn",
  "powerapps.cn",
  "powerappscdn.net",
  "powerappsportals.cn",
  "powerautomate.cn",
  "powerautomate.com",
  "powerbi.cn",
  "powerbi.com",
  "powershellgallery.com",
  "pp-soc.com",
  "ppaypal.com",
  "pppds.com",
  "ppsimg.com",
  "prod-video-cms-rt-microsoft-com.akamaized.net",
  "projectmurphy.net",
  "projectsangam.com",
  "psbc.com",
  "pstatp.com",
  "puata.info",
  "public-trust.com",
  "pupuapi.com",
  "pupumall.com",
  "pwabuilder.com",
  "pxt.io",
  "pypl.com",
  "pypl.info",
  "pypl.net",
  "pypl.tv",
  "qchannel01.cn",
  "qchannel03.cn",
  "qcloud.com",
  "qhimg.com",
  "qhimgs4.com",
  "qhmsg.com",
  "qhres2.com",
  "qianxun.com",
  "qiekj.com",
  "qiezibenpao.com",
  "qingdaonews.com",
  "qingting.fm",
  "qiniu.com",
  "qiniup.com",
  "qishui.com",
  "qiyukf.com",
  "qlogo.cn",
  "qmai.cn",
  "qmimg.cn",
  "qnqcdn.net",
  "qpic.cn",
  "qq.com",
  "qq.com.cn",
  "qqmail.com",
  "qqtlr.com",
  "qsmutual.com",
  "qtfm.cn",
  "quark.cn",
  "quickapp.cn",
  "quncrm.com",
  "qwps.cn",
  "qy.net",
  "r00nf8iqh2r.cn",
  "reactorms.com.cn",
  "realtech-inc.com",
  "recaptcha.net",
  "rellux.com.cn",
  "renlifang.com",
  "renovacionoffice.com",
  "renovacionxboxlive.com",
  "rockysports.cn",
  "ronghub.com",
  "rongyi.com",
  "rrfenwo.com",
  "rtbasia.com",
  "runjiapp.com",
  "s-microsoft.com",
  "s-msedge.net",
  "s-msft.com",
  "s-msn.com",
  "s-xoom.com",
  "safebrowsing.googleapis.com",
  "saiqun.top",
  "salesmartly.com",
  "sankie.net",
  "sankuai.com",
  "sclive.net",
  "sdscv.eu.org",
  "sealaly.net",
  "searchpstatp.com",
  "secure-paypal.info",
  "securepaypal.info",
  "serverlesslibrary.net",
  "servicewechat.com",
  "sf-express.com",
  "sf-pay.com",
  "sfbassets.com",
  "sfbassets.net",
  "sfx.ms",
  "sharepoint.cn",
  "sharepoint.com",
  "sharepointonline.com",
  "shimo.im",
  "shimowd.cn",
  "shiquanyi.cn",
  "shoujiduoduo.com",
  "shouqianba.com",
  "showmoney.cn",
  "showstart.com",
  "shuiqoo.cn",
  "shujupie.com",
  "shukwai.com",
  "shunhuishou.com",
  "shuqireader.com",
  "shuzilm.cn",
  "sigmob.cn",
  "signalr.net",
  "simility.com",
  "sina.cn",
  "sinaimg.cn",
  "sinajs.cn",
  "sinodoc.cn",
  "sinojy.cn",
  "siomxity.cn",
  "sjxydc.com",
  "skycolorful.com",
  "skype",
  "skype.com",
  "skype.net",
  "skypeassets.com",
  "skypeassets.net",
  "skypeforbusiness.com",
  "sm.cn",
  "smartapps.cn",
  "smgv.cn",
  "smogfly.cloud",
  "smogfly.club",
  "smtcdns.com",
  "snailovet.com",
  "snssdk.com",
  "sogou.com",
  "sogoucdn.com",
  "sohu",
  "sohu.com",
  "sohucs.com",
  "songguo7.com",
  "soogif.com",
  "soso.com",
  "souajki.cn",
  "souajki.com",
  "souajki.net",
  "speedtest.cn",
  "spoprod-a.akamaihd.net",
  "sprinklesapp.com",
  "sqlserveronlinux.com",
  "sslpaypal.org",
  "ssyhb.cn",
  "staffhub.ms",
  "start.com",
  "statics-marketingsites-eas-ms-com.akamaized.net",
  "statics-marketingsites-eus-ms-com.akamaized.net",
  "statics-marketingsites-neu-ms-com.akamaized.net",
  "statics-marketingsites-wcus-ms-com.akamaized.net",
  "staybrowser.com",
  "successwithteams.com",
  "suning.cn",
  "suntory.com.cn",
  "superbed.cn",
  "supermicro.org.cn",
  "surface.com",
  "svc.ms",
  "sway-cdn.com",
  "sway-extensions.com",
  "sway.com",
  "swiftbank.info",
  "swiftbank.us",
  "swiftcapital.com",
  "swiftfinancial.com",
  "swiftfinancial.info",
  "swiftfinancial.net",
  "swing1993.cn",
  "swirecocacola.com",
  "syhy123.com",
  "syncshop.cn",
  "sysinternals.com",
  "syytidesf.com.cn",
  "szfx.com",
  "szzbmy.com",
  "tailwindtraders.com",
  "taizhou.com.cn",
  "tanx.com",
  "taobao",
  "taobao.com",
  "tastientech.com",
  "tb.cn",
  "tbcdn.cn",
  "tcdnos.com",
  "tcsl.com.cn",
  "teacat.com",
  "tec73.com",
  "techhub.ms",
  "telecome.cn",
  "telefen.com",
  "tellmewhygame.com",
  "tencent-cloud.cn",
  "tencent-cloud.com",
  "tencent-cloud.net",
  "tencent.com",
  "tencentcs.com",
  "tencentmusic.com",
  "tencentsuite.com",
  "tencenttds.com",
  "tengmed.com",
  "tenmh.com",
  "tenor.com",
  "tenpay.com",
  "testipv6.cn",
  "testplus.cn",
  "tfogc.com",
  "tfsallin.net",
  "thepaypalshop.com",
  "theshoppingexpresslane.net",
  "timelinestoryteller.com",
  "tinyapps.cn",
  "tmall",
  "tmall.com",
  "tmuyun.com",
  "tocmcc.cn",
  "tongdun.net",
  "toolhelper.cn",
  "toponad.com",
  "topwidgets.com",
  "toutiao.com",
  "toutiaocloud.com",
  "toutiaocloud.net",
  "toutiaostatic.com",
  "trafficmanager.cn",
  "trafficmanager.net",
  "transferwise.com",
  "translatetheweb.com",
  "tripcdn.cn",
  "tripcdn.com",
  "trust-provider.cn",
  "trustcenter.cn",
  "trustdecision.com",
  "tryfunctions.com",
  "ttwifi.net",
  "tuia.cn",
  "tusdk.com",
  "tuyacn.com",
  "ubixioe.com",
  "uc.cn",
  "ucweb.com",
  "uczzd.cn",
  "udache.com",
  "ugcimg.cn",
  "ugdtimg.com",
  "ugsdk.cn",
  "ule.com",
  "ulecdn.com",
  "ulikecam.com",
  "umeng.com",
  "umengcloud.com",
  "umsns.com",
  "umva-china.com",
  "unicom",
  "unicompayment.com",
  "uniqlo.cn",
  "unity3dcloud.cn",
  "unlocklimitlesslearning.com",
  "upaiyun.com",
  "update.googleapis.com",
  "upqzfile.com",
  "url.cn",
  "userpxt.io",
  "uservoice.com",
  "uwpcommunitytoolkit.com",
  "uzero.cn",
  "vchangyi.com",
  "vegslb.com",
  "venmo-touch.com",
  "venmo.com",
  "venmo.info",
  "venmo.net",
  "venmo.org",
  "venmo.s3.amazonaws.com",
  "vfsforgit.com",
  "vfsforgit.org",
  "vgunxpkt.com",
  "videobreakdown.com",
  "videoindexer.ai",
  "vip5.afdorigin-prod-am02.afdogw.com",
  "viqmd.org.cn",
  "virtualearth.net",
  "visualstudio-staging.com",
  "visualstudio.co",
  "visualstudio.co.uk",
  "visualstudio.com",
  "visualstudio.eu",
  "visualstudio.net",
  "vlabvod.com",
  "vod-qcloud.com",
  "volccdn.com",
  "volceapplog.com",
  "volces.com",
  "volcimagex.net",
  "volcsirius.com",
  "volcsiriusbd.com",
  "volcvod.com",
  "vsallin.net",
  "vsassets.io",
  "vscode-cdn.net",
  "vscode-unpkg.net",
  "vscode-webview.net",
  "vscode.dev",
  "vvhan.com",
  "w277.com",
  "wandawic.com",
  "wang",
  "wasu.tv",
  "wawo.cc",
  "wbd.ms",
  "wcfaka.com",
  "webmoneyinfo.com",
  "wechat.com",
  "wechatpay.cn",
  "weibo.cn",
  "weibo.com",
  "weibocdn.com",
  "weibu.vip",
  "weidian.com",
  "weilayun.com",
  "weimob.com",
  "weimobdc.com",
  "weimobwmc.com",
  "weixin.com",
  "weixinbridge.com",
  "weiyun.com",
  "welcrm.com",
  "wfclive.cn",
  "what-fan.net",
  "whmzxy.edu.cn",
  "whwl.edu.cn",
  "whyour.cn",
  "windows",
  "windows-int.net",
  "windows-ppe.net",
  "windows.com",
  "windows.net",
  "windows.nl",
  "windows8.hk",
  "windowsazure.cn",
  "windowsazure.com",
  "windowsazurestatus.cn",
  "windowscommunity.net",
  "windowslive.cn",
  "windowsmarketplace.com",
  "windowsphone-int.com",
  "windowsphone.com",
  "windowssearch.com",
  "windowsupdate.com",
  "winhec.com",
  "winhec.net",
  "winmp.cn",
  "winwin7.com",
  "wiremoneytoirelandwithxoomeasierandcheaper.com",
  "wise.com",
  "wjx.cn",
  "wjx.com",
  "wkanx.com",
  "wlxrs.com",
  "wo.cn",
  "wo116114.com",
  "woread.com.cn",
  "working-bing-int.com",
  "worthtech.net",
  "wosai.cn",
  "wosaimg.com",
  "wosms.cn",
  "wostore.cn",
  "wpgjpay.com",
  "wps.cn",
  "wpscdn.cn",
  "wpscdn.com",
  "wsgw-rewrite.com",
  "wsukwai.com",
  "wubafc.com",
  "wuhanpe.com",
  "wumingyingshi.cn",
  "wunderlist.com",
  "wuuxiang.com",
  "www-paypal.info",
  "www-paypal.us",
  "wwwxoom.com",
  "wwy-x.com",
  "wxcloudrun.com",
  "wxgateway.com",
  "wxlivecdn.com",
  "wzxmt.fun",
  "xamarin.com",
  "xbox.co",
  "xbox.com",
  "xbox.eu",
  "xbox.org",
  "xbox360.co",
  "xbox360.com",
  "xbox360.eu",
  "xbox360.org",
  "xboxab.com",
  "xboxgamepass.com",
  "xboxgamestudios.com",
  "xboxlive.cn",
  "xboxlive.com",
  "xboxone.co",
  "xboxone.com",
  "xboxone.eu",
  "xboxplayanywhere.com",
  "xboxservices.com",
  "xboxstudios.com",
  "xbx.lv",
  "xcg888.cn",
  "xdrtc.com",
  "xhscdn.com",
  "xhscdn.net",
  "xiabb.chat",
  "xiaoantech.com",
  "xiaocantech.com",
  "xiaodingkeji.com",
  "xiaoguya.com",
  "xiaohongshu.com",
  "xiaoiron.com",
  "xiaojukeji.com",
  "xiaomi.com",
  "xiaomi.net",
  "xiaomiyoupin.com",
  "xiaoyisz.com",
  "xiaoyoujuchang.com",
  "ximalaya.com",
  "xingzhige.com",
  "xinyifm.cn",
  "xmcdn.com",
  "xmwlzx.net",
  "xn--1qqw23a",
  "xn--3bst00m",
  "xn--3ds443g",
  "xn--55qw42g",
  "xn--55qx5d",
  "xn--5tzm5g",
  "xn--6frz82g",
  "xn--6qq986b3xl",
  "xn--8y0a063a",
  "xn--9et52u",
  "xn--bnq297cix3a.cn",
  "xn--czr694b",
  "xn--czrs0t",
  "xn--czru2d",
  "xn--fiq228c5hs",
  "xn--fiq64b",
  "xn--fiqs8s",
  "xn--fiqz9s",
  "xn--fjq720a",
  "xn--g2xx48c",
  "xn--hxt814e",
  "xn--imr513n",
  "xn--io0a7i",
  "xn--kput3i",
  "xn--nyqy26a",
  "xn--otu796d",
  "xn--rhqv96g",
  "xn--ses554g",
  "xn--unup4y",
  "xn--vhquv",
  "xn--vuq861b",
  "xn--xhq521b",
  "xn--zfr164b",
  "xoom-experience.com",
  "xoom.com",
  "xoom.io",
  "xoom.net.cn",
  "xoom.us",
  "xoomcom.com",
  "xp-printer.cn",
  "xpfarm.cn",
  "xueqiu.com",
  "xxpkg.com",
  "xycdn.com",
  "xynetweb.com",
  "y5kfpt.com",
  "yadea.com.cn",
  "yammer.com",
  "yammerusercontent.com",
  "yangkeduo.com",
  "yansong.biz",
  "yczxyy.com",
  "yhgfb-cn-static.com",
  "yichang.gov.cn",
  "yiigle.com",
  "yikaobang.com.cn",
  "yili.com",
  "yjyz.com",
  "yjzf.com",
  "ykimg.com",
  "yksdks.com",
  "yooucai.store",
  "youku.com",
  "youzan.com",
  "youzanyun.com",
  "ysdqjs.cn",
  "yuchengyouxi.com",
  "yummy.tech",
  "yunpay.cc",
  "yunzhan365.com",
  "yunzhanxinxi.com",
  "yuque.com",
  "yximgs.com",
  "yzcdn.cn",
  "zcool.cn",
  "zhangyuyidong.cn",
  "zhenbi.com",
  "zhihu.com",
  "zhimg.com",
  "zhuanstatic.com",
  "zhugeculture.com",
  "zijieapi.com",
  "zjbtv.com",
  "zjiecode.com",
  "zjrb.cn",
  "zjzw.cn",
  "zstatic.net",
  "ztvip8.cn",
  "zulong.com",
  "zvo.cn",
  "zxyzxy.cn",
  "zzsyh.vip",
  "zztfly.com",
  "zzyi4cf7z8.cn"
];

const CHINA_RULE_KEYWORD = [
  "1drv",
  "alicdn",
  "alipay",
  "aliyun",
  "baidu",
  "beplay",
  "bilibili",
  "hnagroup",
  "microsoft",
  "officecdn",
  "onedrive",
  "paypal",
  "qiyi",
  "skydrive",
  "stripe",
  "taobao",
  "tmall.com",
  "weibo",
  "wise"
];
// END GENERATED CHINA RULES
const DOH2_DOMESTIC_SUFFIXES = CHINA_RULE_SUFFIX;

function doh2CorsHeaders(extra = {}) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    ...extra
  };
}

function doh2Json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: doh2CorsHeaders({ 'content-type': 'application/json; charset=UTF-8', 'cache-control': 'no-store' })
  });
}

function doh2NormalizePath(value) {
  return (value || 'dns-query').toString().trim().replace(/^\/+|\/+$/g, '') || 'dns-query';
}

function doh2Config(env = {}) {
  const privatePath = doh2NormalizePath(env.DOH2_PATH || env.PATH || env.TOKEN || DoH路径);
  const preferred = (env.DOH2_UPSTREAM || env.UPSTREAM || 'auto').toString().toLowerCase();
  const upstreamKey = DOH2_UPSTREAMS[preferred] ? preferred : 'auto';
  const domesticUpstream = DOH2_UPSTREAMS[(env.DOH2_DOMESTIC_UPSTREAM || 'alidns').toString().toLowerCase()] ? (env.DOH2_DOMESTIC_UPSTREAM || 'alidns').toString().toLowerCase() : 'alidns';
  const foreignUpstream = DOH2_UPSTREAMS[(env.DOH2_FOREIGN_UPSTREAM || 'cloudflare').toString().toLowerCase()] ? (env.DOH2_FOREIGN_UPSTREAM || 'cloudflare').toString().toLowerCase() : 'cloudflare';
  const adblock = (env.DOH2_ADBLOCK || 'on').toString().toLowerCase() !== 'off';
  return { privatePath, upstreamKey, domesticUpstream, foreignUpstream, adblock };
}

function doh2Upstream(name, fallback) {
  const key = (name || fallback || 'cloudflare').toString().toLowerCase();
  const safeKey = key === 'auto' ? (fallback === 'auto' ? 'cloudflare' : fallback) : key;
  return DOH2_UPSTREAMS[safeKey] || DOH2_UPSTREAMS.cloudflare;
}

function doh2NormalizeDomain(name) {
  return (name || '').toString().trim().toLowerCase().replace(/^\.+|\.+$/g, '');
}

function doh2IsDomesticDomain(name) {
  const domain = doh2NormalizeDomain(name);
  if (!domain) return false;
  if (CHINA_RULE_EXACT.includes(domain)) return true;
  if (CHINA_RULE_SUFFIX.some(suffix => domain === suffix || domain.endsWith('.' + suffix))) return true;
  return CHINA_RULE_KEYWORD.some(keyword => keyword && domain.includes(keyword));
}

function doh2MatchDomesticRule(name) {
  const domain = doh2NormalizeDomain(name);
  if (!domain) return { split: 'foreign', matched: false, ruleType: null, rule: null };
  if (CHINA_RULE_EXACT.includes(domain)) return { split: 'domestic', matched: true, ruleType: 'DOMAIN', rule: domain };
  const suffix = CHINA_RULE_SUFFIX.find(item => domain === item || domain.endsWith('.' + item));
  if (suffix) return { split: 'domestic', matched: true, ruleType: 'DOMAIN-SUFFIX', rule: suffix };
  const keyword = CHINA_RULE_KEYWORD.find(item => item && domain.includes(item));
  if (keyword) return { split: 'domestic', matched: true, ruleType: 'DOMAIN-KEYWORD', rule: keyword };
  return { split: 'foreign', matched: false, ruleType: null, rule: null };
}

function doh2SplitInfo(name, resolver, config) {
  const requested = (resolver || config.upstreamKey || 'auto').toString().toLowerCase();
  const auto = !requested || requested === 'auto';
  const match = doh2MatchDomesticRule(name);
  const upstream = auto ? doh2SelectUpstream(name, 'auto', config) : doh2Upstream(requested, config.foreignUpstream);
  return {
    domain: doh2NormalizeDomain(name),
    mode: auto ? 'auto' : 'manual',
    resolver: auto ? 'auto' : requested,
    split: auto ? match.split : 'manual',
    matched: auto ? match.matched : null,
    ruleType: auto ? match.ruleType : null,
    rule: auto ? match.rule : null,
    upstream: upstream.label,
    domesticUpstream: DOH2_UPSTREAMS[config.domesticUpstream]?.label || config.domesticUpstream,
    foreignUpstream: DOH2_UPSTREAMS[config.foreignUpstream]?.label || config.foreignUpstream,
  };
}

function doh2SelectUpstream(name, resolver, config) {
  const requested = (resolver || config.upstreamKey || 'auto').toString().toLowerCase();
  if (requested && requested !== 'auto') return doh2Upstream(requested, config.foreignUpstream);
  const key = doh2IsDomesticDomain(name) ? config.domesticUpstream : config.foreignUpstream;
  return doh2Upstream(key, config.foreignUpstream);
}

function doh2Base64UrlToBytes(value) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(normalized);
  return Uint8Array.from(binary, ch => ch.charCodeAt(0));
}

function doh2ReadQuestionName(bytes) {
  if (!bytes || bytes.length < 13) return '';
  let offset = 12;
  const labels = [];
  for (let i = 0; i < 128 && offset < bytes.length; i++) {
    const len = bytes[offset++];
    if (len === 0) break;
    if ((len & 0xc0) === 0xc0) return labels.join('.');
    if (offset + len > bytes.length) return '';
    labels.push(String.fromCharCode(...bytes.slice(offset, offset + len)));
    offset += len;
  }
  return labels.join('.');
}

function doh2HasAnswer(result) {
  return Array.isArray(result?.Answer) && result.Answer.length > 0;
}

async function doh2QueryWithIpv6Fallback(upstream, name, type, autoFallback) {
  const result = await queryDns(upstream.json, name, type);
  if (autoFallback && type === 'A' && !doh2HasAnswer(result)) {
    const ipv6Result = await queryDns(upstream.json, name, 'AAAA');
    if (doh2HasAnswer(ipv6Result)) {
      ipv6Result.resolver = upstream.label;
      ipv6Result.query = { name, type: 'AAAA' };
      ipv6Result.requestedType = 'A';
      ipv6Result.autoFallback = 'AAAA';
      ipv6Result.message = 'No A record was returned; showing AAAA records automatically.';
      return ipv6Result;
    }
  }
  result.resolver = upstream.label;
  result.query = { name, type };
  return result;
}

function doh2Html(config, host) {
  const base = `https://${host}`;
  const endpoint = `${base}/${config.privatePath}`;
  const jsonUrl = `${base}/json?name=www.google.com&type=A&resolver=auto`;
  const upstreamOptions = Object.entries(DOH2_UPSTREAMS).map(([key, item]) => `<option value="${key}" ${key === config.upstreamKey ? 'selected' : ''}>${item.label}</option>`).join('');
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DoH 2.0</title><style>
body{margin:0;background:#0b1020;color:#e5e7eb;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.wrap{max-width:880px;margin:0 auto;padding:28px 18px}.card{background:#111827;border:1px solid #263244;border-radius:18px;padding:18px;margin:14px 0;box-shadow:0 12px 30px #0004}h1{margin:0 0 8px;font-size:30px}.muted{color:#9ca3af}.grid{display:grid;grid-template-columns:1fr 130px 150px;gap:10px}@media(max-width:680px){.grid{grid-template-columns:1fr}}input,select,button{border-radius:12px;border:1px solid #374151;background:#0b1220;color:#e5e7eb;padding:12px;font-size:15px}button{background:#2563eb;border-color:#3b82f6;font-weight:700}code,pre{white-space:pre-wrap;word-break:break-all;background:#050814;border:1px solid #1f2937;border-radius:12px;padding:12px;display:block}.ok{color:#86efac}.warn{color:#fbbf24}</style></head><body><div class="wrap"><h1>DoH 2.0</h1><p class="muted">私密路径 + 多上游 + JSON 调试 + 广告域名拦截；国内外域名自动分流；IPv4 无结果时自动展示 IPv6。不记录查询日志。</p><div class="card"><div class="muted">标准 DoH 地址</div><code>${endpoint}</code><p class="muted">JSON 调试接口</p><code>${jsonUrl}</code><p class="${config.adblock ? 'ok' : 'warn'}">AdBlock: ${config.adblock ? 'ON' : 'OFF'}</p></div><div class="card"><div class="grid"><input id="name" value="www.google.com" placeholder="domain"><select id="type"><option>A</option><option>AAAA</option><option>NS</option><option>TXT</option><option value="all">all</option></select><select id="resolver">${upstreamOptions}</select></div><p><button onclick="q()">查询</button> <button onclick="s()">查看走哪个 DNS</button></p><pre id="out">等待查询…</pre></div><div class="card"><p class="muted">客户端示例</p><code>Loon/Surge/Clash DoH: ${endpoint}</code><p class="muted">建议不要公开分享私密路径；如需更换，在 Cloudflare Worker 变量里设置 DOH2_PATH。</p></div></div><script>async function q(){const n=document.getElementById('name').value||'www.google.com';const t=document.getElementById('type').value;const r=document.getElementById('resolver').value;const res=await fetch('/json?name='+encodeURIComponent(n)+'&type='+encodeURIComponent(t)+'&resolver='+encodeURIComponent(r));document.getElementById('out').textContent=JSON.stringify(await res.json(),null,2)}async function s(){const n=document.getElementById('name').value||'www.google.com';const r=document.getElementById('resolver').value;const res=await fetch('/split?name='+encodeURIComponent(n)+'&resolver='+encodeURIComponent(r));const data=await res.json();document.getElementById('out').textContent=JSON.stringify(data,null,2)}q()</script></body></html>`;
}

async function doh2HandleJson(request, env) {
  const url = new URL(request.url);
  const config = doh2Config(env);
  const name = url.searchParams.get('name') || url.searchParams.get('domain') || 'www.google.com';
  const type = (url.searchParams.get('type') || 'A').toUpperCase();
  const resolver = url.searchParams.get('resolver') || config.upstreamKey;
  if (config.adblock && isAdBlockedDomain(name)) return blockedDnsJsonResponse(name, type);
  if (type === 'ALL') {
    const upstream = doh2SelectUpstream(name, resolver, config);
    const a = await queryDns(upstream.json, name, 'A');
    const aaaa = await queryDns(upstream.json, name, 'AAAA');
    const ns = await queryDns(upstream.json, name, 'NS');
    return doh2Json({ resolver: upstream.label, name, type: 'all', Answer: [...(a.Answer || []), ...(aaaa.Answer || []), ...(ns.Answer || [])], ipv4: { records: a.Answer || [] }, ipv6: { records: aaaa.Answer || [] }, ns: { records: ns.Answer || ns.Authority || [] }, raw: { A: a, AAAA: aaaa, NS: ns } });
  }
  const upstream = doh2SelectUpstream(name, resolver, config);
  const autoFallback = !url.searchParams.has('fallback') || url.searchParams.get('fallback') !== 'off';
  const result = await doh2QueryWithIpv6Fallback(upstream, name, type, autoFallback);
  result.split = resolver === 'auto' ? (doh2IsDomesticDomain(name) ? 'domestic' : 'foreign') : 'manual';
  return doh2Json(result);
}

async function doh2HandleWire(request, env) {
  const config = doh2Config(env);
  const url = new URL(request.url);
  let questionName = url.searchParams.get('name') || '';
  let bodyBytes = null;
  if (!questionName && request.method === 'GET' && url.searchParams.has('dns')) {
    try { questionName = doh2ReadQuestionName(doh2Base64UrlToBytes(url.searchParams.get('dns'))); } catch (_) { questionName = ''; }
  }
  if (request.method === 'POST') {
    bodyBytes = await request.arrayBuffer();
    try { questionName = doh2ReadQuestionName(new Uint8Array(bodyBytes)); } catch (_) { questionName = ''; }
  }
  const resolver = url.searchParams.get('resolver') || config.upstreamKey;
  const upstream = doh2SelectUpstream(questionName, resolver, config);
  const headers = new Headers();
  headers.set('Accept', request.method === 'GET' && url.searchParams.has('name') ? 'application/dns-json' : 'application/dns-message');
  const target = new URL(upstream.wire);
  if (request.method === 'GET') target.search = url.search;
  const init = request.method === 'POST' ? { method: 'POST', headers: { 'Accept': 'application/dns-message', 'Content-Type': 'application/dns-message' }, body: bodyBytes } : { headers };
  const response = await fetch(target.toString(), init);
  const responseHeaders = new Headers(response.headers);
  Object.entries(doh2CorsHeaders()).forEach(([k, v]) => responseHeaders.set(k, v));
  responseHeaders.set('X-DoH2-Upstream', upstream.label);
  if (questionName) responseHeaders.set('X-DoH2-Split', doh2IsDomesticDomain(questionName) ? 'domestic' : 'foreign');
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: responseHeaders });
}

export default {
  async fetch(request, env) {
    if (env.DOH) {
      DoH = env.DOH;
      const match = DoH.match(/:\/\/([^\/]+)/);
      if (match) {
        DoH = match[1];
      }
    }
    DoH路径 = env.PATH || env.TOKEN || DoH路径;//DoH路径也单独设置 变量PATH
    if (DoH路径.includes("/")) DoH路径 = DoH路径.split("/")[1];
    const url = new URL(request.url);
    const path = url.pathname;
    const hostname = url.hostname;
    const doh2 = doh2Config(env);

    if (path === '/doh2' || path === '/v2') {
      return new Response(doh2Html(doh2, url.host), {
        headers: doh2CorsHeaders({ 'Content-Type': 'text/html; charset=UTF-8', 'cache-control': 'no-store' })
      });
    }

    if (path === '/split' || path === '/api/split') {
      const name = url.searchParams.get('name') || url.searchParams.get('domain') || '';
      const resolver = url.searchParams.get('resolver') || doh2.upstreamKey;
      return doh2Json(doh2SplitInfo(name, resolver, doh2));
    }

    if (path === '/json' || path === '/api/dns') {
      return await doh2HandleJson(request, env);
    }

    if (path === `/${doh2.privatePath}`) {
      return await doh2HandleWire(request, env);
    }

    // 处理 OPTIONS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': '86400'
        }
      });
    }

    // 如果请求路径，则作为 DoH 服务器处理
    if (path === `/${DoH路径}`) {
      return await DOHRequest(request);
    }

    // 添加IP地理位置信息查询代理
    if (path === '/ip-info') {
      if (env.TOKEN) {
        const token = url.searchParams.get('token');
        if (token != env.TOKEN) {
          return new Response(JSON.stringify({ 
            status: "error",
            message: "Token不正确",
            code: "AUTH_FAILED",
            timestamp: new Date().toISOString()
          }, null, 4), {
            status: 403,
            headers: {
              "content-type": "application/json; charset=UTF-8",
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
      }

      const ip = url.searchParams.get('ip') || request.headers.get('CF-Connecting-IP');
      if (!ip) {
        return new Response(JSON.stringify({ 
          status: "error",
          message: "IP参数未提供",
          code: "MISSING_PARAMETER",
          timestamp: new Date().toISOString()
        }, null, 4), {
          status: 400,
          headers: {
            "content-type": "application/json; charset=UTF-8",
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      try {
        // 使用Worker代理请求HTTP的IP API
        const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        
        // 添加时间戳到成功的响应数据中
        data.timestamp = new Date().toISOString();

        // 返回数据给客户端，并添加CORS头
        return new Response(JSON.stringify(data, null, 4), {
          headers: {
            "content-type": "application/json; charset=UTF-8",
            'Access-Control-Allow-Origin': '*'
          }
        });

      } catch (error) {
        console.error("IP查询失败:", error);
        return new Response(JSON.stringify({
          status: "error",
          message: `IP查询失败: ${error.message}`,
          code: "API_REQUEST_FAILED",
          query: ip,
          timestamp: new Date().toISOString(),
          details: {
            errorType: error.name,
            stack: error.stack ? error.stack.split('\n')[0] : null
          }
        }, null, 4), {
          status: 500,
          headers: {
            "content-type": "application/json; charset=UTF-8",
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    // 如果请求参数中包含 domain 和 doh，则执行 DNS 解析
    if (url.searchParams.has("doh")) {
      const domain = url.searchParams.get("domain") || url.searchParams.get("name") || "www.google.com";
      const doh = url.searchParams.get("doh") || dnsDoH;
      const type = url.searchParams.get("type") || "all"; // 默认同时查询 A 和 AAAA

      // 广告域名拦截，仅处理页面和 JSON 查询入口，不影响标准 DoH wire-format 请求
      if (isAdBlockedDomain(domain)) {
        return blockedDnsJsonResponse(domain, type);
      }

      // 如果使用的是当前站点，则使用 DoH 服务
      if (doh.includes(url.host)) {
        return await handleLocalDohRequest(domain, type, hostname);
      }

      try {
        // 根据请求类型进行不同的处理
        if (type === "all") {
          // 同时请求 A、AAAA 和 NS 记录，使用新的查询函数
          const ipv4Result = await queryDns(doh, domain, "A");
          const ipv6Result = await queryDns(doh, domain, "AAAA");
          const nsResult = await queryDns(doh, domain, "NS");

          // 合并结果 - 修改Question字段处理方式以兼容不同格式
          const combinedResult = {
            Status: ipv4Result.Status || ipv6Result.Status || nsResult.Status,
            TC: ipv4Result.TC || ipv6Result.TC || nsResult.TC,
            RD: ipv4Result.RD || ipv6Result.RD || nsResult.RD,
            RA: ipv4Result.RA || ipv6Result.RA || nsResult.RA,
            AD: ipv4Result.AD || ipv6Result.AD || nsResult.AD,
            CD: ipv4Result.CD || ipv6Result.CD || nsResult.CD,

            // 修改处理Question字段的方式，兼容对象格式和数组格式
            Question: [],

            Answer: [...(ipv4Result.Answer || []), ...(ipv6Result.Answer || [])],
            ipv4: {
              records: ipv4Result.Answer || []
            },
            ipv6: {
              records: ipv6Result.Answer || []
            },
            ns: {
              records: []
            }
          };

          // 正确处理Question字段，无论是对象还是数组
          if (ipv4Result.Question) {
            if (Array.isArray(ipv4Result.Question)) {
              combinedResult.Question.push(...ipv4Result.Question);
            } else {
              combinedResult.Question.push(ipv4Result.Question);
            }
          }

          if (ipv6Result.Question) {
            if (Array.isArray(ipv6Result.Question)) {
              combinedResult.Question.push(...ipv6Result.Question);
            } else {
              combinedResult.Question.push(ipv6Result.Question);
            }
          }

          if (nsResult.Question) {
            if (Array.isArray(nsResult.Question)) {
              combinedResult.Question.push(...nsResult.Question);
            } else {
              combinedResult.Question.push(nsResult.Question);
            }
          }

          // 处理NS记录 - 可能在Answer或Authority部分
          const nsRecords = [];

          // 从Answer部分收集NS记录
          if (nsResult.Answer && nsResult.Answer.length > 0) {
            nsResult.Answer.forEach(record => {
              if (record.type === 2) { // NS记录类型是2
                nsRecords.push(record);
              }
            });
          }

          // 从Authority部分收集NS和SOA记录
          if (nsResult.Authority && nsResult.Authority.length > 0) {
            nsResult.Authority.forEach(record => {
              if (record.type === 2 || record.type === 6) { // NS=2, SOA=6
                nsRecords.push(record);
                // 也添加到总Answer数组
                combinedResult.Answer.push(record);
              }
            });
          }

          // 设置NS记录集合
          combinedResult.ns.records = nsRecords;

          return new Response(JSON.stringify(combinedResult, null, 2), {
            headers: { "content-type": "application/json; charset=UTF-8" }
          });
        } else {
          // 普通的单类型查询，使用新的查询函数
          const result = await queryDns(doh, domain, type);
          return new Response(JSON.stringify(result, null, 2), {
            headers: { "content-type": "application/json; charset=UTF-8" }
          });
        }
      } catch (err) {
        console.error("DNS 查询失败:", err);
        return new Response(JSON.stringify({
          error: `DNS 查询失败: ${err.message}`,
          doh: doh,
          domain: domain,
          stack: err.stack
        }, null, 2), {
          headers: { "content-type": "application/json; charset=UTF-8" },
          status: 500
        });
      }
    }

    if (env.URL302) return Response.redirect(env.URL302, 302);
    else if (env.URL) {
      if (env.URL.toString().toLowerCase() == 'nginx') {
        return new Response(await nginx(), {
          headers: {
            'Content-Type': 'text/html; charset=UTF-8',
          },
        });
      } else return await 代理URL(env.URL, url);
    } else return await HTML();
  }
}

// 查询DNS的通用函数
async function queryDns(dohServer, domain, type) {
  // 构造 DoH 请求 URL
  const dohUrl = new URL(dohServer);
  dohUrl.searchParams.set("name", domain);
  dohUrl.searchParams.set("type", type);

  // 尝试多种请求头格式
  const fetchOptions = [
    // 标准 application/dns-json
    {
      headers: { 'Accept': 'application/dns-json' }
    },
    // 部分服务使用没有指定 Accept 头的请求
    {
      headers: {}
    },
    // 另一个尝试 application/json
    {
      headers: { 'Accept': 'application/json' }
    },
    // 稳妥起见，有些服务可能需要明确的用户代理
    {
      headers: {
        'Accept': 'application/dns-json',
        'User-Agent': 'Mozilla/5.0 DNS Client'
      }
    }
  ];

  let lastError = null;

  // 依次尝试不同的请求头组合
  for (const options of fetchOptions) {
    try {
      const response = await fetch(dohUrl.toString(), options);

      // 如果请求成功，解析JSON
      if (response.ok) {
        const contentType = response.headers.get('content-type') || '';
        // 检查内容类型是否兼容
        if (contentType.includes('json') || contentType.includes('dns-json')) {
          return await response.json();
        } else {
          // 对于非标准的响应，仍尝试进行解析
          const textResponse = await response.text();
          try {
            return JSON.parse(textResponse);
          } catch (jsonError) {
            throw new Error(`无法解析响应为JSON: ${jsonError.message}, 响应内容: ${textResponse.substring(0, 100)}`);
          }
        }
      }

      // 错误情况记录，继续尝试下一个选项
      const errorText = await response.text();
      lastError = new Error(`DoH 服务器返回错误 (${response.status}): ${errorText.substring(0, 200)}`);

    } catch (err) {
      // 记录错误，继续尝试下一个选项
      lastError = err;
    }
  }

  // 所有尝试都失败，抛出最后一个错误
  throw lastError || new Error("无法完成 DNS 查询");
}

// 处理本地 DoH 请求的函数 - 直接调用 DoH，而不是自身服务
async function handleLocalDohRequest(domain, type, hostname) {
  try {
    if (type === "all") {
      // 同时请求 A、AAAA 和 NS 记录
      const ipv4Promise = queryDns(dnsDoH, domain, "A");
      const ipv6Promise = queryDns(dnsDoH, domain, "AAAA");
      const nsPromise = queryDns(dnsDoH, domain, "NS");

      // 等待所有请求完成
      const [ipv4Result, ipv6Result, nsResult] = await Promise.all([ipv4Promise, ipv6Promise, nsPromise]);

      // 准备NS记录数组
      const nsRecords = [];

      // 从Answer和Authority部分收集NS记录
      if (nsResult.Answer && nsResult.Answer.length > 0) {
        nsRecords.push(...nsResult.Answer.filter(record => record.type === 2));
      }

      if (nsResult.Authority && nsResult.Authority.length > 0) {
        nsRecords.push(...nsResult.Authority.filter(record => record.type === 2 || record.type === 6));
      }

      // 合并结果
      const combinedResult = {
        Status: ipv4Result.Status || ipv6Result.Status || nsResult.Status,
        TC: ipv4Result.TC || ipv6Result.TC || nsResult.TC,
        RD: ipv4Result.RD || ipv6Result.RD || nsResult.RD,
        RA: ipv4Result.RA || ipv6Result.RA || nsResult.RA,
        AD: ipv4Result.AD || ipv6Result.AD || nsResult.AD,
        CD: ipv4Result.CD || ipv6Result.CD || nsResult.CD,
        Question: [...(ipv4Result.Question || []), ...(ipv6Result.Question || []), ...(nsResult.Question || [])],
        Answer: [
          ...(ipv4Result.Answer || []),
          ...(ipv6Result.Answer || []),
          ...nsRecords
        ],
        ipv4: {
          records: ipv4Result.Answer || []
        },
        ipv6: {
          records: ipv6Result.Answer || []
        },
        ns: {
          records: nsRecords
        }
      };

      return new Response(JSON.stringify(combinedResult, null, 2), {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          'Access-Control-Allow-Origin': '*'
        }
      });
    } else {
      // 普通的单类型查询
      const result = await queryDns(dnsDoH, domain, type);
      return new Response(JSON.stringify(result, null, 2), {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  } catch (err) {
    console.error("DoH 查询失败:", err);
    return new Response(JSON.stringify({
      error: `DoH 查询失败: ${err.message}`,
      stack: err.stack
    }, null, 2), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        'Access-Control-Allow-Origin': '*'
      },
      status: 500
    });
  }
}

// DoH 请求处理函数
async function DOHRequest(request) {
  const { method, headers, body } = request;
  const UA = headers.get('User-Agent') || 'DoH Client';
  const url = new URL(request.url);
  const { searchParams } = url;

  try {
    // 直接访问端点的处理
    if (method === 'GET' && !url.search) {
      // 如果是直接访问或浏览器访问，返回友好信息
      return new Response('Bad Request', {
        status: 400,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // 根据请求方法和参数构建转发请求
    let response;

    if (method === 'GET' && searchParams.has('name')) {
      const searchDoH = searchParams.has('type') ? url.search : url.search + '&type=A';
      // 处理 JSON 格式的 DoH 请求
      response = await fetch(dnsDoH + searchDoH, {
        headers: {
          'Accept': 'application/dns-json',
          'User-Agent': UA
        }
      });
      // 如果 DoHUrl 请求非成功（状态码 200），则再请求 jsonDoH
      if (!response.ok) response = await fetch(jsonDoH + searchDoH, {
        headers: {
          'Accept': 'application/dns-json',
          'User-Agent': UA
        }
      });
    } else if (method === 'GET') {
      // 处理 base64url 格式的 GET 请求
      response = await fetch(dnsDoH + url.search, {
        headers: {
          'Accept': 'application/dns-message',
          'User-Agent': UA
        }
      });
    } else if (method === 'POST') {
      // 处理 POST 请求
      response = await fetch(dnsDoH, {
        method: 'POST',
        headers: {
          'Accept': 'application/dns-message',
          'Content-Type': 'application/dns-message',
          'User-Agent': UA
        },
        body: body
      });

    } else {
      // 其他不支持的请求方式
      return new Response('不支持的请求格式: DoH请求需要包含name或dns参数，或使用POST方法', {
        status: 400,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`DoH 返回错误 (${response.status}): ${errorText.substring(0, 200)}`);
    }

    // 创建一个新的响应头对象
    const responseHeaders = new Headers(response.headers);
    // 设置跨域资源共享 (CORS) 的头部信息
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', '*');
    
    // 检查是否为JSON格式的DoH请求，确保设置正确的Content-Type
    if (method === 'GET' && searchParams.has('name')) {
      // 对于JSON格式的DoH请求，明确设置Content-Type为application/json
      responseHeaders.set('Content-Type', 'application/json');
    }

    // 返回响应
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders
    });
  } catch (error) {
    console.error("DoH 请求处理错误:", error);
    return new Response(JSON.stringify({
      error: `DoH 请求处理错误: ${error.message}`,
      stack: error.stack
    }, null, 4), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

async function HTML() {
  // 否则返回 HTML 页面
  const html = `<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DNS-over-HTTPS Resolver</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="icon"
    href="https://cf-assets.www.cloudflare.com/dzlvafdwdttg/6TaQ8Q7BDmdAFRoHpDCb82/8d9bc52a2ac5af100de3a9adcf99ffaa/security-shield-protection-2.svg"
    type="image/x-icon">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
      padding: 0;
      margin: 0;
      line-height: 1.6;
      background: url('https://cf-assets.www.cloudflare.com/dzlvafdwdttg/5B5shLB8bSKIyB9NJ6R1jz/87e7617be2c61603d46003cb3f1bd382/Hero-globe-bg-takeover-xxl.png'),
        linear-gradient(135deg, rgba(253, 101, 60, 0.85) 0%, rgba(251,152,30, 0.85) 100%);
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      padding: 30px 20px;
      box-sizing: border-box;
    }

    .page-wrapper {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }

    .container {
      width: 100%;
      max-width: 800px;
      margin: 20px auto;
      background-color: rgba(255, 255, 255, 0.65);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      padding: 30px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.4);
    }

    h1 {
      /* 创建文字渐变效果 */
      background-image: linear-gradient(to right, rgb(249, 171, 76), rgb(252, 103, 60));
      /* 回退颜色，用于不支持渐变文本的浏览器 */
      color: rgb(252, 103, 60);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      
      font-weight: 600;
      /* 注意：渐变文本和阴影效果同时使用可能不兼容，暂时移除阴影 */
      text-shadow: none;
    }

    .card {
      margin-bottom: 20px;
      border: none;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    .card-header {
      background-color: rgba(255, 242, 235, 0.9);
      font-weight: 600;
      padding: 12px 20px;
      border-bottom: none;
    }

    .form-label {
      font-weight: 500;
      margin-bottom: 8px;
      color: rgb(70, 50, 40);
    }

    .form-select,
    .form-control {
      border-radius: 6px;
      padding: 10px;
      border: 1px solid rgba(253, 101, 60, 0.3);
      background-color: rgba(255, 255, 255, 0.9);
    }

    .btn-primary {
      background-color: rgb(253, 101, 60);
      border: none;
      border-radius: 6px;
      padding: 10px 20px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .btn-primary:hover {
      background-color: rgb(230, 90, 50);
      transform: translateY(-1px);
    }

    pre {
      background-color: rgba(255, 245, 240, 0.9);
      padding: 15px;
      border-radius: 6px;
      border: 1px solid rgba(253, 101, 60, 0.2);
      white-space: pre-wrap;
      word-break: break-all;
      font-family: Consolas, Monaco, 'Andale Mono', monospace;
      font-size: 14px;
      max-height: 400px;
      overflow: auto;
    }

    .loading {
      display: none;
      text-align: center;
      padding: 20px 0;
    }

    .loading-spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left: 4px solid rgb(253, 101, 60);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: spin 1s linear infinite;
      margin: 0 auto 10px;
    }

    .badge {
      margin-left: 5px;
      font-size: 11px;
      vertical-align: middle;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    .footer {
      margin-top: 30px;
      text-align: center;
      color: rgba(255, 255, 255, 0.9);
      font-size: 14px;
    }

    .beian-info {
      text-align: center;
      font-size: 13px;
    }

    .beian-info a {
      color: var(--primary-color);
      text-decoration: none;
      border-bottom: 1px dashed var(--primary-color);
      padding-bottom: 2px;
    }

    .beian-info a:hover {
      border-bottom-style: solid;
    }

    @media (max-width: 576px) {
      .container {
        padding: 20px;
      }

      .github-corner:hover .octo-arm {
        animation: none;
      }

      .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
      }
    }

    .error-message {
      color: #e63e00;
      margin-top: 10px;
    }

    .success-message {
      color: #e67e22;
    }

    .nav-tabs .nav-link {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      padding: 8px 16px;
      font-weight: 500;
      color: rgb(150, 80, 50);
    }

    .nav-tabs .nav-link.active {
      background-color: rgba(255, 245, 240, 0.8);
      border-bottom-color: rgba(255, 245, 240, 0.8);
      color: rgb(253, 101, 60);
    }

    .tab-content {
      background-color: rgba(255, 245, 240, 0.8);
      border-radius: 0 0 6px 6px;
      padding: 15px;
      border: 1px solid rgba(253, 101, 60, 0.2);
      border-top: none;
    }

    .ip-record {
      padding: 5px 10px;
      margin-bottom: 5px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(253, 101, 60, 0.15);
    }

    .ip-record:hover {
      background-color: rgba(255, 235, 225, 0.9);
    }

    .ip-address {
      font-family: monospace;
      font-weight: 600;
      min-width: 130px;
      color: rgb(80, 60, 50);
      cursor: pointer;
      position: relative;
      transition: color 0.2s ease;
      display: inline-block;
    }

    .ip-address:hover {
      color: rgb(253, 101, 60);
    }

    .ip-address:after {
      content: '';
      position: absolute;
      left: 100%;  /* 从IP地址的右侧开始定位 */
      top: 0;
      opacity: 0;
      white-space: nowrap;
      font-size: 12px;
      color: rgb(253, 101, 60);
      transition: opacity 0.3s ease;
      font-family: 'Segoe UI', sans-serif;
      font-weight: normal;
    }

    .ip-address.copied:after {
      content: '✓ 已复制';
      opacity: 1;
    }

    .result-summary {
      margin-bottom: 15px;
      padding: 10px;
      background-color: rgba(255, 235, 225, 0.8);
      border-radius: 6px;
    }

    .result-tabs {
      margin-bottom: 20px;
    }

    .geo-info {
      margin: 0 10px;
      font-size: 0.85em;
      flex-grow: 1;
      text-align: center;
    }

    .geo-country {
      color: rgb(230, 90, 50);
      font-weight: 500;
      padding: 2px 6px;
      background-color: rgba(255, 245, 240, 0.8);
      border-radius: 4px;
      display: inline-block;
    }

    .geo-as {
      color: rgb(253, 101, 60);
      padding: 2px 6px;
      background-color: rgba(255, 245, 240, 0.8);
      border-radius: 4px;
      margin-left: 5px;
      display: inline-block;
    }

    .geo-blocked {
      color: #ffffff;
      background-color: #dc3545;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 600;
      display: inline-block;
      animation: pulse-red 2s infinite;
    }

    @keyframes pulse-red {
      0% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(220, 53, 69, 0); }
      100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0); }
    }

    .geo-loading {
      color: rgb(150, 100, 80);
      font-style: italic;
    }

    .ttl-info {
      min-width: 80px;
      text-align: right;
      color: rgb(180, 90, 60);
    }

    .copy-link {
      color: rgb(253, 101, 60);
      text-decoration: none;
      border-bottom: 1px dashed rgb(253, 101, 60);
      padding-bottom: 2px;
      cursor: pointer;
      position: relative;
    }

    .copy-link:hover {
      border-bottom-style: solid;
    }

    .copy-link:after {
      content: '';
      position: absolute;
      top: 0;
      right: -65px;
      opacity: 0;
      white-space: nowrap;
      color: rgb(253, 101, 60);
      font-size: 12px;
      transition: opacity 0.3s ease;
    }

    .copy-link.copied:after {
      content: '✓ 已复制';
      opacity: 1;
    }

    .github-corner svg {
      fill: rgb(255, 255, 255);
      color: rgb(251,152,30);
      position: absolute;
      top: 0;
      right: 0;
      border: 0;
      width: 80px;
      height: 80px;
    }

    .github-corner:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }

    /* 添加章鱼猫挥手动画关键帧 */
    @keyframes octocat-wave {
      0%, 100% { transform: rotate(0); }
      20%, 60% { transform: rotate(-25deg); }
      40%, 80% { transform: rotate(10deg); }
    }

    @media (max-width: 576px) {
      .container {
        padding: 20px;
      }

      .github-corner:hover .octo-arm {
        animation: none;
      }

      .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
      }
    }
  </style>
</head>

<body>
  <a href="https://github.com/cmliu/CF-Workers-DoH" target="_blank" class="github-corner" aria-label="View source on Github">
    <svg viewBox="0 0 250 250" aria-hidden="true">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path
        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill="currentColor" class="octo-body"></path>
    </svg>
  </a>
  <div class="container">
    <h1 class="text-center mb-4">DNS-over-HTTPS Resolver</h1>
    <div class="card">
      <div class="card-header">DNS 查询设置</div>
      <div class="card-body">
        <form id="resolveForm">
          <div class="mb-3">
            <label for="dohSelect" class="form-label">选择 DoH 地址:</label>
            <select id="dohSelect" class="form-select">
              <option value="current" selected id="currentDohOption">自动 (当前站点)</option>
              <option value="https://dns.alidns.com/resolve">https://dns.alidns.com/resolve (阿里)</option>
              <option value="https://sm2.doh.pub/dns-query">https://sm2.doh.pub/dns-query (腾讯)</option>
              <option value="https://doh.360.cn/resolve">https://doh.360.cn/resolve (360)</option>
              <option value="https://cloudflare-dns.com/dns-query">https://cloudflare-dns.com/dns-query (Cloudflare)</option>
              <option value="https://dns.google/resolve">https://dns.google/resolve (谷歌)</option>
              <option value="https://dns.adguard-dns.com/resolve">https://dns.adguard-dns.com/resolve (AdGuard)</option>
              <option value="https://dns.sb/dns-query">https://dns.sb/dns-query (DNS.SB)</option>
              <option value="https://zero.dns0.eu/">https://zero.dns0.eu (dns0.eu)</option>
              <option value="https://dns.nextdns.io">	https://dns.nextdns.io (NextDNS)</option>
              <option value="https://dns.rabbitdns.org/dns-query">https://dns.rabbitdns.org/dns-query (Rabbit DNS)</option>
              <option value="https://basic.rethinkdns.com/">https://basic.rethinkdns.com (RethinkDNS)</option>
              <option value="https://v.recipes/dns-query">https://v.recipes/dns-query (v.recipes DNS)</option>
              <option value="custom">自定义...</option>
            </select>
          </div>
          <div id="customDohContainer" class="mb-3" style="display:none;">
            <label for="customDoh" class="form-label">输入自定义 DoH 地址:</label>
            <input type="text" id="customDoh" class="form-control" placeholder="https://example.com/dns-query">
          </div>
          <div class="mb-3">
            <label for="domain" class="form-label">待解析域名:</label>
            <div class="input-group">
              <input type="text" id="domain" class="form-control" value="www.google.com"
                placeholder="输入域名，如 example.com">
              <button type="button" class="btn btn-outline-secondary" id="clearBtn">清除</button>
            </div>
          </div>
          <div class="d-flex gap-2 flex-wrap">
            <button type="submit" class="btn btn-primary flex-grow-1">解析</button>
            <button type="button" class="btn btn-outline-primary" id="checkDnsBtn">查看走哪个 DNS</button>
            <button type="button" class="btn btn-outline-primary" id="getJsonBtn">Get Json</button>
          </div>
          <div id="splitInfo" class="alert alert-light border mt-3" style="display:none;"></div>
        </form>
      </div>
    </div>

    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>解析结果</span>
        <button class="btn btn-sm btn-outline-secondary" id="copyBtn" style="display: none;">复制结果</button>
      </div>
      <div class="card-body">
        <div id="loading" class="loading">
          <div class="loading-spinner"></div>
          <p>正在查询中，请稍候...</p>
        </div>

        <!-- 结果展示区，包含选项卡 -->
        <div id="resultContainer" style="display: none;">
          <ul class="nav nav-tabs result-tabs" id="resultTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="ipv4-tab" data-bs-toggle="tab" data-bs-target="#ipv4" type="button"
                role="tab">IPv4 地址</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="ipv6-tab" data-bs-toggle="tab" data-bs-target="#ipv6" type="button"
                role="tab">IPv6 地址</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="ns-tab" data-bs-toggle="tab" data-bs-target="#ns" type="button" role="tab">NS
                记录</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="raw-tab" data-bs-toggle="tab" data-bs-target="#raw" type="button"
                role="tab">原始数据</button>
            </li>
          </ul>
          <div class="tab-content" id="resultTabContent">
            <div class="tab-pane fade show active" id="ipv4" role="tabpanel" aria-labelledby="ipv4-tab">
              <div class="result-summary" id="ipv4Summary"></div>
              <div id="ipv4Records"></div>
            </div>
            <div class="tab-pane fade" id="ipv6" role="tabpanel" aria-labelledby="ipv6-tab">
              <div class="result-summary" id="ipv6Summary"></div>
              <div id="ipv6Records"></div>
            </div>
            <div class="tab-pane fade" id="ns" role="tabpanel" aria-labelledby="ns-tab">
              <div class="result-summary" id="nsSummary"></div>
              <div id="nsRecords"></div>
            </div>
            <div class="tab-pane fade" id="raw" role="tabpanel" aria-labelledby="raw-tab">
              <pre id="result">等待查询...</pre>
            </div>
          </div>
        </div>

        <!-- 错误信息区域 -->
        <div id="errorContainer" style="display: none;">
          <pre id="errorMessage" class="error-message"></pre>
        </div>
      </div>
    </div>

    <div class="beian-info">
      <p><strong>DNS-over-HTTPS：<span id="dohUrlDisplay" class="copy-link" title="点击复制">https://<span
              id="currentDomain">...</span>/${DoH路径}</span></strong><br>基于 Cloudflare Workers 上游 ${DoH} 的 DoH (DNS over HTTPS)
        解析服务</p>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // 获取当前页面的 URL 和主机名
    const currentUrl = window.location.href;
    const currentHost = window.location.host;
    const currentProtocol = window.location.protocol;
    const currentDohPath = '${DoH路径}';
    const currentDohUrl = currentProtocol + '//' + currentHost + '/' + currentDohPath;

    // 记录当前使用的 DoH 地址
    let activeDohUrl = currentDohUrl;

    // 阻断IP列表
    const 阻断IPv4 = [
      '104.21.16.1',
      '104.21.32.1',
      '104.21.48.1',
      '104.21.64.1',
      '104.21.80.1',
      '104.21.96.1',
      '104.21.112.1'
    ];

    const 阻断IPv6 = [
      '2606:4700:3030::6815:1001',
      '2606:4700:3030::6815:3001',
      '2606:4700:3030::6815:7001',
      '2606:4700:3030::6815:5001'
    ];

    // 检查IP是否在阻断列表中
    function isBlockedIP(ip) {
      return 阻断IPv4.includes(ip) || 阻断IPv6.includes(ip);
    }

    // 显示当前正在使用的 DoH 服务
    function updateActiveDohDisplay() {
      const dohSelect = document.getElementById('dohSelect');
      if (dohSelect.value === 'current') {
        activeDohUrl = currentDohUrl;
      }
    }

    // 初始更新
    updateActiveDohDisplay();

    // 当选择自定义时显示输入框
    document.getElementById('dohSelect').addEventListener('change', function () {
      const customContainer = document.getElementById('customDohContainer');
      customContainer.style.display = (this.value === 'custom') ? 'block' : 'none';

      if (this.value === 'current') {
        activeDohUrl = currentDohUrl;
      } else if (this.value !== 'custom') {
        activeDohUrl = this.value;
      }
    });

    // 清除按钮功能
    document.getElementById('clearBtn').addEventListener('click', function () {
      document.getElementById('domain').value = '';
      document.getElementById('domain').focus();
    });

    // 复制结果功能
    document.getElementById('copyBtn').addEventListener('click', function () {
      const resultText = document.getElementById('result').textContent;
      navigator.clipboard.writeText(resultText).then(function () {
        const originalText = this.textContent;
        this.textContent = '已复制';
        setTimeout(() => {
          this.textContent = originalText;
        }, 2000);
      }.bind(this)).catch(function (err) {
        console.error('无法复制文本: ', err);
      });
    });

    // 格式化 TTL
    function formatTTL(seconds) {
      if (seconds < 60) return seconds + '秒';
      if (seconds < 3600) return Math.floor(seconds / 60) + '分钟';
      if (seconds < 86400) return Math.floor(seconds / 3600) + '小时';
      return Math.floor(seconds / 86400) + '天';
    }

    // 查询 IP 地理位置信息 - 使用我们自己的代理API而非直接访问HTTP地址
    async function queryIpGeoInfo(ip) {
      try {
        // 改为使用我们自己的代理接口
        const response = await fetch(\`./ip-info?ip=\${ip}&token=${DoH路径}\`);
            if (!response.ok) {
              throw new Error(\`HTTP 错误: \${response.status}\`);
            }
            return await response.json();
          } catch (error) {
            console.error('IP 地理位置查询失败:', error);
            return null;
          }
        }
        
        // 处理点击复制功能
        function handleCopyClick(element, textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(function() {
            // 添加复制成功的反馈
            element.classList.add('copied');
            
            // 2秒后移除复制成功效果
            setTimeout(() => {
              element.classList.remove('copied');
            }, 2000);
          }).catch(function(err) {
            console.error('复制失败:', err);
          });
        }
        
        // 显示记录
        function displayRecords(data) {
          document.getElementById('resultContainer').style.display = 'block';
          document.getElementById('errorContainer').style.display = 'none';
          document.getElementById('result').textContent = JSON.stringify(data, null, 2);
          
          // IPv4 记录
          const ipv4Records = data.ipv4?.records || [];
          const ipv4Container = document.getElementById('ipv4Records');
          ipv4Container.innerHTML = '';
          
          if (ipv4Records.length === 0) {
            document.getElementById('ipv4Summary').innerHTML = \`<strong>未找到 IPv4 记录</strong>\`;
          } else {
            document.getElementById('ipv4Summary').innerHTML = \`<strong>找到 \${ipv4Records.length} 条 IPv4 记录</strong>\`;
            
            ipv4Records.forEach(record => {
              const recordDiv = document.createElement('div');
              recordDiv.className = 'ip-record';
              
              if (record.type === 5) { // CNAME 记录
                recordDiv.innerHTML = \`
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="ip-address" data-copy="\${record.data}">\${record.data}</span>
                    <span class="badge bg-success">CNAME</span>
                    <span class="text-muted ttl-info">TTL: \${formatTTL(record.TTL)}</span>
                  </div>
                \`;
                ipv4Container.appendChild(recordDiv);
                
                // 添加点击事件
                const copyElem = recordDiv.querySelector('.ip-address');
                copyElem.addEventListener('click', function() {
                  handleCopyClick(this, this.getAttribute('data-copy'));
                });
                
              } else if (record.type === 1) {  // A记录
                recordDiv.innerHTML = \`
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="ip-address" data-copy="\${record.data}">\${record.data}</span>
                    <span class="geo-info geo-loading">正在获取位置信息...</span>
                    <span class="text-muted ttl-info">TTL: \${formatTTL(record.TTL)}</span>
                  </div>
                \`;
                ipv4Container.appendChild(recordDiv);
                
                // 添加点击事件
                const copyElem = recordDiv.querySelector('.ip-address');
                copyElem.addEventListener('click', function() {
                  handleCopyClick(this, this.getAttribute('data-copy'));
                });
                
                // 添加地理位置信息
                const geoInfoSpan = recordDiv.querySelector('.geo-info');
                
                // 检查是否为阻断IP
                if (isBlockedIP(record.data)) {
                  // 异步查询 IP 地理位置信息获取AS信息
                  queryIpGeoInfo(record.data).then(geoData => {
                    geoInfoSpan.innerHTML = '';
                    geoInfoSpan.classList.remove('geo-loading');
                    
                    // 显示阻断IP标识（替代国家信息）
                    const blockedSpan = document.createElement('span');
                    blockedSpan.className = 'geo-blocked';
                    blockedSpan.textContent = '阻断IP';
                    geoInfoSpan.appendChild(blockedSpan);
                    
                    // 如果有AS信息，正常显示
                    if (geoData && geoData.status === 'success' && geoData.as) {
                      const asSpan = document.createElement('span');
                      asSpan.className = 'geo-as';
                      asSpan.textContent = geoData.as;
                      geoInfoSpan.appendChild(asSpan);
                    }
                  }).catch(() => {
                    // 查询失败时仍显示阻断IP标识
                    geoInfoSpan.innerHTML = '';
                    geoInfoSpan.classList.remove('geo-loading');
                    
                    const blockedSpan = document.createElement('span');
                    blockedSpan.className = 'geo-blocked';
                    blockedSpan.textContent = '阻断IP';
                    geoInfoSpan.appendChild(blockedSpan);
                  });
                } else {
                  // 异步查询 IP 地理位置信息
                  queryIpGeoInfo(record.data).then(geoData => {
                    if (geoData && geoData.status === 'success') {
                      // 更新为实际的地理位置信息
                      geoInfoSpan.innerHTML = '';
                      geoInfoSpan.classList.remove('geo-loading');
                      
                      // 添加国家信息
                      const countrySpan = document.createElement('span');
                      countrySpan.className = 'geo-country';
                      countrySpan.textContent = geoData.country || '未知国家';
                      geoInfoSpan.appendChild(countrySpan);
                      
                      // 添加 AS 信息
                      const asSpan = document.createElement('span');
                      asSpan.className = 'geo-as';
                      asSpan.textContent = geoData.as || '未知 AS';
                      geoInfoSpan.appendChild(asSpan);
                    } else {
                      // 查询失败或无结果
                      geoInfoSpan.textContent = '位置信息获取失败';
                    }
                  });
                }
              }
            });
          }
          
          // IPv6 记录
          const ipv6Records = data.ipv6?.records || [];
          const ipv6Container = document.getElementById('ipv6Records');
          ipv6Container.innerHTML = '';
          
          if (ipv6Records.length === 0) {
            document.getElementById('ipv6Summary').innerHTML = \`<strong>未找到 IPv6 记录</strong>\`;
          } else {
            document.getElementById('ipv6Summary').innerHTML = \`<strong>找到 \${ipv6Records.length} 条 IPv6 记录</strong>\`;
            
            ipv6Records.forEach(record => {
              const recordDiv = document.createElement('div');
              recordDiv.className = 'ip-record';
              
              if (record.type === 5) { // CNAME 记录
                recordDiv.innerHTML = \`
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="ip-address" data-copy="\${record.data}">\${record.data}</span>
                    <span class="badge bg-success">CNAME</span>
                    <span class="text-muted ttl-info">TTL: \${formatTTL(record.TTL)}</span>
                  </div>
                \`;
                ipv6Container.appendChild(recordDiv);
                
                // 添加点击事件
                const copyElem = recordDiv.querySelector('.ip-address');
                copyElem.addEventListener('click', function() {
                  handleCopyClick(this, this.getAttribute('data-copy'));
                });
                
              } else if (record.type === 28) {  // AAAA记录
                recordDiv.innerHTML = \`
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="ip-address" data-copy="\${record.data}">\${record.data}</span>
                    <span class="geo-info geo-loading">正在获取位置信息...</span>
                    <span class="text-muted ttl-info">TTL: \${formatTTL(record.TTL)}</span>
                  </div>
                \`;
                ipv6Container.appendChild(recordDiv);
                
                // 添加点击事件
                const copyElem = recordDiv.querySelector('.ip-address');
                copyElem.addEventListener('click', function() {
                  handleCopyClick(this, this.getAttribute('data-copy'));
                });
                
                // 添加地理位置信息
                const geoInfoSpan = recordDiv.querySelector('.geo-info');
                
                // 检查是否为阻断IP
                if (isBlockedIP(record.data)) {
                  // 异步查询 IP 地理位置信息获取AS信息
                  queryIpGeoInfo(record.data).then(geoData => {
                    geoInfoSpan.innerHTML = '';
                    geoInfoSpan.classList.remove('geo-loading');
                    
                    // 显示阻断IP标识（替代国家信息）
                    const blockedSpan = document.createElement('span');
                    blockedSpan.className = 'geo-blocked';
                    blockedSpan.textContent = '阻断IP';
                    geoInfoSpan.appendChild(blockedSpan);
                    
                    // 如果有AS信息，正常显示
                    if (geoData && geoData.status === 'success' && geoData.as) {
                      const asSpan = document.createElement('span');
                      asSpan.className = 'geo-as';
                      asSpan.textContent = geoData.as;
                      geoInfoSpan.appendChild(asSpan);
                    }
                  }).catch(() => {
                    // 查询失败时仍显示阻断IP标识
                    geoInfoSpan.innerHTML = '';
                    geoInfoSpan.classList.remove('geo-loading');
                    
                    const blockedSpan = document.createElement('span');
                    blockedSpan.className = 'geo-blocked';
                    blockedSpan.textContent = '阻断IP';
                    geoInfoSpan.appendChild(blockedSpan);
                  });
                } else {
                  // 异步查询 IP 地理位置信息
                  queryIpGeoInfo(record.data).then(geoData => {
                    if (geoData && geoData.status === 'success') {
                      // 更新为实际的地理位置信息
                      geoInfoSpan.innerHTML = '';
                      geoInfoSpan.classList.remove('geo-loading');
                      
                      // 添加国家信息
                      const countrySpan = document.createElement('span');
                      countrySpan.className = 'geo-country';
                      countrySpan.textContent = geoData.country || '未知国家';
                      geoInfoSpan.appendChild(countrySpan);
                      
                      // 添加 AS 信息
                      const asSpan = document.createElement('span');
                      asSpan.className = 'geo-as';
                      asSpan.textContent = geoData.as || '未知 AS';
                      geoInfoSpan.appendChild(asSpan);
                    } else {
                      // 查询失败或无结果
                      geoInfoSpan.textContent = '位置信息获取失败';
                    }
                  });
                }
              }
            });
          }
          
          // NS 记录
          const nsRecords = data.ns?.records || [];
          const nsContainer = document.getElementById('nsRecords');
          nsContainer.innerHTML = '';
          
          if (nsRecords.length === 0) {
            document.getElementById('nsSummary').innerHTML = \`<strong>未找到 NS 记录</strong>\`;
          } else {
            document.getElementById('nsSummary').innerHTML = \`<strong>找到 \${nsRecords.length} 条名称服务器记录</strong>\`;
            
            nsRecords.forEach(record => {
              const recordDiv = document.createElement('div');
              recordDiv.className = 'ip-record';
              
              // 不同类型的记录使用不同的显示方式
              if (record.type === 2) {  // NS 记录
                recordDiv.innerHTML = \`
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="ip-address" data-copy="\${record.data}">\${record.data}</span>
                    <span class="badge bg-info">NS</span>
                    <span class="text-muted ttl-info">TTL: \${formatTTL(record.TTL)}</span>
                  </div>
                \`;
                
                // 添加点击事件
                const copyElem = recordDiv.querySelector('.ip-address');
                copyElem.addEventListener('click', function() {
                  handleCopyClick(this, this.getAttribute('data-copy'));
                });
                
              } else if (record.type === 6) {  // SOA 记录
                // SOA 记录格式: primary_ns admin_email serial refresh retry expire minimum
                const soaParts = record.data.split(' ');
                let adminEmail = soaParts[1].replace('.', '@');
                if (adminEmail.endsWith('.')) adminEmail = adminEmail.slice(0, -1);
                recordDiv.innerHTML = \`
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="ip-address" data-copy="\${record.name}">\${record.name}</span>
                    <span class="badge bg-warning">SOA</span>
                    <span class="text-muted ttl-info">TTL: \${formatTTL(record.TTL)}</span>
                  </div>
                  <div class="ps-3 small">
                    <div><strong>主 NS:</strong> <span class="ip-address" data-copy="\${soaParts[0]}">\${soaParts[0]}</span></div>
                    <div><strong>管理邮箱:</strong> <span class="ip-address" data-copy="\${adminEmail}">\${adminEmail}</span></div>
                    <div><strong>序列号:</strong> \${soaParts[2]}</div>
                    <div><strong>刷新间隔:</strong> \${formatTTL(soaParts[3])}</div>
                    <div><strong>重试间隔:</strong> \${formatTTL(soaParts[4])}</div>
                    <div><strong>过期时间:</strong> \${formatTTL(soaParts[5])}</div>
                    <div><strong>最小 TTL:</strong> \${formatTTL(soaParts[6])}</div>
                  </div>
                \`;
                
                // 添加点击事件，为SOA记录中的所有可点击元素添加事件
                const copyElems = recordDiv.querySelectorAll('.ip-address');
                copyElems.forEach(elem => {
                  elem.addEventListener('click', function() {
                    handleCopyClick(this, this.getAttribute('data-copy'));
                  });
                });
                
              } else {
                // 其他类型的记录
                recordDiv.innerHTML = \`
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="ip-address" data-copy="\${record.data}">\${record.data}</span>
                    <span class="badge bg-secondary">类型: \${record.type}</span>
                    <span class="text-muted ttl-info">TTL: \${formatTTL(record.TTL)}</span>
                  </div>
                \`;
                
                // 添加点击事件
                const copyElem = recordDiv.querySelector('.ip-address');
                copyElem.addEventListener('click', function() {
                  handleCopyClick(this, this.getAttribute('data-copy'));
                });
              }
              
              nsContainer.appendChild(recordDiv);
            });
          }
          
          // 当用户切换到IPv4或IPv6选项卡时，确保显示已加载的地理位置信息
          document.getElementById('ipv4-tab').addEventListener('click', function() {
            // 如果还有加载中的地理位置信息，可以在这里处理
          });
          
          document.getElementById('ipv6-tab').addEventListener('click', function() {
            // 如果还有加载中的地理位置信息，可以在这里处理
          });
          
          // 显示复制按钮
          document.getElementById('copyBtn').style.display = 'block';
        }
        
        // 显示错误
        function displayError(message) {
          document.getElementById('resultContainer').style.display = 'none';
          document.getElementById('errorContainer').style.display = 'block';
          document.getElementById('errorMessage').textContent = message;
          document.getElementById('copyBtn').style.display = 'none';
        }
        
        // 表单提交后发起 DNS 查询请求
        document.getElementById('resolveForm').addEventListener('submit', async function(e) {
          e.preventDefault();
          const dohSelect = document.getElementById('dohSelect').value;
          let doh;
          
          if(dohSelect === 'current') {
            doh = currentDohUrl;
          } else if(dohSelect === 'custom') {
            doh = document.getElementById('customDoh').value;
            if (!doh) {
              alert('请输入自定义 DoH 地址');
              return;
            }
          } else {
            doh = dohSelect;
          }
          
          const domain = document.getElementById('domain').value;
          if (!domain) {
            alert('请输入需要解析的域名');
            return;
          }
          
          // 显示加载状态
          document.getElementById('loading').style.display = 'block';
          document.getElementById('resultContainer').style.display = 'none';
          document.getElementById('errorContainer').style.display = 'none';
          document.getElementById('copyBtn').style.display = 'none';
          
          try {
            // 发起查询，参数采用 GET 请求方式，type=all 表示同时查询 A 和 AAAA
            const response = await fetch(\`?doh=\${encodeURIComponent(doh)}&domain=\${encodeURIComponent(domain)}&type=all\`);
            
            if (!response.ok) {
              throw new Error(\`HTTP 错误: \${response.status}\`);
            }
            
            const json = await response.json();
            
            // 检查响应是否包含错误
            if (json.error) {
              displayError(json.error);
            } else {
              displayRecords(json);
            }
          } catch (error) {
            displayError('查询失败: ' + error.message);
          } finally {
            // 隐藏加载状态
            document.getElementById('loading').style.display = 'none';
          }
        });
        
        // 页面加载完成后执行
        document.addEventListener('DOMContentLoaded', function() {
          // 使用本地存储记住最后使用的域名
          const lastDomain = localStorage.getItem('lastDomain');
          if (lastDomain) {
            document.getElementById('domain').value = lastDomain;
          }
          
          // 监听域名输入变化并保存
          document.getElementById('domain').addEventListener('input', function() {
            localStorage.setItem('lastDomain', this.value);
          });

          // 更新显示当前域名
          document.getElementById('currentDomain').textContent = currentHost;
          
          // 更新DoH下拉选择框的自动选项，显示完整URL
          const currentDohOption = document.getElementById('currentDohOption');
          if (currentDohOption) {
            currentDohOption.textContent = currentDohUrl + ' (当前站点)';
          }
          
          // 设置DoH链接复制功能
          const dohUrlDisplay = document.getElementById('dohUrlDisplay');
          if (dohUrlDisplay) {
            dohUrlDisplay.addEventListener('click', function() {
              const textToCopy = currentProtocol + '//' + currentHost + '/' + currentDohPath;
              navigator.clipboard.writeText(textToCopy).then(function() {
                dohUrlDisplay.classList.add('copied');
                setTimeout(() => {
                  dohUrlDisplay.classList.remove('copied');
                }, 2000);
              }).catch(function(err) {
                console.error('复制失败:', err);
              });
            });
          }

          // 添加分流检查按钮的点击事件
          document.getElementById('checkDnsBtn').addEventListener('click', async function() {
            const domain = document.getElementById('domain').value;
            const info = document.getElementById('splitInfo');
            if (!domain) {
              alert('请输入需要解析的域名');
              return;
            }
            info.style.display = 'block';
            info.textContent = '正在判断分流...';
            try {
              const response = await fetch('/split?name=' + encodeURIComponent(domain) + '&resolver=auto');
              if (!response.ok) throw new Error('HTTP 错误: ' + response.status);
              const data = await response.json();
              const splitText = data.split === 'domestic' ? '国内' : (data.split === 'foreign' ? '国外' : data.split);
              const ruleText = data.matched ? (data.ruleType + ': ' + data.rule) : '未命中国内规则';
              info.innerHTML = '<strong>' + (data.domain || domain) + '</strong><br>分流：<strong>' + splitText + '</strong><br>使用 DNS：<strong>' + data.upstream + '</strong><br>匹配规则：' + ruleText;
            } catch (error) {
              info.textContent = '分流检查失败: ' + error.message;
            }
          });

          // 添加Get Json按钮的点击事件
          document.getElementById('getJsonBtn').addEventListener('click', function() {
            const dohSelect = document.getElementById('dohSelect').value;
            let dohUrl;
            
            // 获取当前选择的DoH服务器URL
            if(dohSelect === 'current') {
              dohUrl = currentDohUrl;
            } else if(dohSelect === 'custom') {
              dohUrl = document.getElementById('customDoh').value;
              if (!dohUrl) {
                alert('请输入自定义 DoH 地址');
                return;
              }
            } else {
              dohUrl = dohSelect;
            }
            
            // 获取域名
            const domain = document.getElementById('domain').value;
            if (!domain) {
              alert('请输入需要解析的域名');
              return;
            }
            
            // 构建完整的查询URL
            let jsonUrl = new URL(dohUrl);
            // 使用name参数(标准DNS-JSON格式)
            jsonUrl.searchParams.set('name', domain);
            
            // 在新标签页打开
            window.open(jsonUrl.toString(), '_blank');
          });
        });
  </script>
</body>

</html>`;

  return new Response(html, {
    headers: { "content-type": "text/html;charset=UTF-8" }
  });
}

async function 代理URL(代理网址, 目标网址) {
  const 网址列表 = await 整理(代理网址);
  const 完整网址 = 网址列表[Math.floor(Math.random() * 网址列表.length)];

  // 解析目标 URL
  const 解析后的网址 = new URL(完整网址);
  console.log(解析后的网址);
  // 提取并可能修改 URL 组件
  const 协议 = 解析后的网址.protocol.slice(0, -1) || 'https';
  const 主机名 = 解析后的网址.hostname;
  let 路径名 = 解析后的网址.pathname;
  const 查询参数 = 解析后的网址.search;

  // 处理路径名
  if (路径名.charAt(路径名.length - 1) == '/') {
    路径名 = 路径名.slice(0, -1);
  }
  路径名 += 目标网址.pathname;

  // 构建新的 URL
  const 新网址 = `${协议}://${主机名}${路径名}${查询参数}`;

  // 反向代理请求
  const 响应 = await fetch(新网址);

  // 创建新的响应
  let 新响应 = new Response(响应.body, {
    status: 响应.status,
    statusText: 响应.statusText,
    headers: 响应.headers
  });

  // 添加自定义头部，包含 URL 信息
  //新响应.headers.set('X-Proxied-By', 'Cloudflare Worker');
  //新响应.headers.set('X-Original-URL', 完整网址);
  新响应.headers.set('X-New-URL', 新网址);

  return 新响应;
}

async function 整理(内容) {
  // 将制表符、双引号、单引号和换行符都替换为逗号
  // 然后将连续的多个逗号替换为单个逗号
  var 替换后的内容 = 内容.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');

  // 删除开头和结尾的逗号（如果有的话）
  if (替换后的内容.charAt(0) == ',') 替换后的内容 = 替换后的内容.slice(1);
  if (替换后的内容.charAt(替换后的内容.length - 1) == ',') 替换后的内容 = 替换后的内容.slice(0, 替换后的内容.length - 1);

  // 使用逗号分割字符串，得到地址数组
  const 地址数组 = 替换后的内容.split(',');

  return 地址数组;
}

async function nginx() {
  const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
  return text;
}