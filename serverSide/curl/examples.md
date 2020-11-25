# Header

```
curl -H "cookie: SameSite=none; cna=3XcoF090BD8CATslfX361wOz; cookie2=1e279c2c8339fd45dc49c4e21eabe98d; hng=CN%7Czh-CN%7CCNY%7C156; t=0a166e22abe6c6fac7414e163356c091; _tb_token_=36633def89f9e; csg=7628ffce; lid=yamaki; __cn_logon__=false; ali_ab=14.17.22.33.1602488192378.4; h_keys="%u767e%u8d27"; UM_distinctid=1751bbd7e38bef-0933a297a53226-31697304-1aeaa0-1751bbd7e39b7a; taklid=514d5087469d4fafa53727a11aac197e; __wapcsf__=1; unb=24489144; ad_prefer="2020/10/22 10:06:13"; _m_h5_tk=e8e1547d42bb975a25716da101b3e2cc_1603688107291; _m_h5_tk_enc=acfe475cc1eca5744841827da506c09f; xlly_s=1; alicnweb=touch_tb_at%3D1603680548472; tfstk=cYSFBB0oh3f1P4K7kHtrR8nfNRddZp6hEcJX-a8Iu5cuzpThiAGJIHgJQLOYjef..; l=eBPVI6e4OKEPcV_jXOfwnurza77t_IRAguPzaNbMiOCP_R1p5c6FWZWyF2L9CnGVh6fJR379b1TgBeYBcIxvc_DKuTk1lgHmn; isg=BEFBuGLg-gYMIxYgFDjtLp-EUItbbrVgGrA_rKOWK8inimFc674JMQ6MbP7Mgk2Y" -H "referer: https://factory.1688.com/" https://widget.1688.com/front/getJsonComponent.json?callback=jQuery18307398819100468683_1603683249692
```

# Form Data

```
curl -X POST -F 'date=2020-08-04' http://9.20.175.145/video_maker/get_douyin_ranking
```

curl -v POST https://oa.m.tencent.com/mobile/parkourGame/api/api/game/end \
-H "authority: oa.m.tencent.com" \
-H "method: POST" \
-H "path: /mobile/parkourGame/api/api/game/end" \
-H "scheme: https" \
-H "accept: */*" \
-H "accept-encoding: gzip, deflate, br" \
-H "accept-language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" \
-H "cache-control: no-cache" \
-H "content-length: 144" \
-H "content-type: application/x-www-form-urlencoded" \
-H "cookie: pgv_pvi=1332023296; x-mp-host-key=175308487eb-15ed2c56ddc80a130a9ba937e18a749221a78ac1; x-imp-host-key=175308333e6-5adb01f4c14acf4cdb78c821f402a698279001b9; DiggerTraceId=1a1df840-0f89-11eb-9bca-2da5f48825f1; Hm_lvt_29fe37985b5cd2a341e821b85502b2fe=1603276610; Hm_lpvt_29fe37985b5cd2a341e821b85502b2fe=1603338924; pgv_si=s2965317632; _RIO_LAN_=tencentday; _RIO_KEY_=20201111100253313970c203eb2f443ee9b5d1bea2cebf51f; tgw_l7_route=cdfb594bd299284e0a694383ffa6d4b9" \
-H "origin: https://oa.m.tencent.com" \
-H "pragma: no-cache" \
-H "q-auth: 31045b957cf33acf31e40be2f3e71c5217597676a9729f1b" \
-H "q-guid: 9d640bc719506aa844845d3d13b788cb" \
-H "q-qimei: 863463044008528" \
-H "q-ua2: QV=3&PL=ADR&PR=WX&PP=com.tencent.mm&PPVN=7.0.20&TBSVC=43805&CO=BK&COVC=045409&PB=GE&VE=GA&DE=PHONE&CHID=0&LCID=9422&MO= BMH-AN10 &RL=1080*2289&OS=10&API=29" \
-H "referer: https://oa.m.tencent.com/an:tencentday/mobile/parkourGame/index.html?code=051GjLFa1x0gXz0BZ0Ga1bV0bM1GjLFC&state=h5code" \
-H "sec-fetch-mode: cors" \
-H "sec-fetch-site: same-origin" \
-H "user-agent: Mozilla/5.0 (Linux; Android 10; BMH-AN10 Build/HUAWEIBMH-AN10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045409 Mobile Safari/537.36 MMWEBID/5706 MicroMessenger/7.0.20.1781(0x2700143B) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ABI/arm64" \
-H "x-requested-with: com.tencent.mm" \
-d '{"meter":11000,"token":"oQG4t1M18k386FLCtovMGViy4C28","t":1605066173919,"sign":"5a69ab43ca4f958326978255091e9600e483033ee9d9df6332f30bf3f4274b34"}' 

# files

```
curl -F 'files=@/Users/yanjie/a.jpg' http://localhost:3000/parse/img
```