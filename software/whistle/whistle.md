# 替换文件

```
s2.go-mpulse.net/boomerang/HJKHG-CCJVV-8NNND-TLWFJ-6YU9W file://</Users/yanjie/git/reverse/akamai/HJKHG-CCJVV-8NNND-TLWFJ-6YU9W.js>
www.luisaviaroma.cn/static/b46df8183e8ti241d8d031852be488032 file://</Users/yanjie/git/reverse/akamai/vo.js> includeFilter://m:post
/http:\/\/zkpartnerwx\.open\.zking\.com\/$/ file://<D:\git\tools\whistle\aaa.html>
open.zking.com/app/mall/m-web/static/js/app.4617f858b7991232fb7e.js file://<D:\git\tools\whistle\test.js>
```

# replace

rules:
mp.weixin.qq.com/mp/newappmsgvote resReplace:///Users/yanjie/git/reverse/akamai/resReplace.json
open.zking.com/temp/api/v1/public/user/getLoginForOfficial reqReplace://{req.json}

```resReplace.json
aaa: bbb
{"\"selected\":true": "\"selected\":false"}
{"\"isCheck\":\"1\"": "\"isCheck\":\"0\""}
```

# 替换cookie
Rules:
test-dp.zking.com/sso/ssoReturn headerReplace://res.set-cookie:/Path/=domain%3Dtest-dp.zking.com;Path