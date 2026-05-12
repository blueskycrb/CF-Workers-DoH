```shell
ENDPOINT=https://你的域名/dns-query DOMAIN=google.com node ./scripts/test_doh.js
```

未设置环境变量时，脚本默认测试 `https://doh.cmliussss.hidns.co/dns-query` 和 `google.com`。
