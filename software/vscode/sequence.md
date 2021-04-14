需要安装Markdown Preview Enhanced

```sequence
title:防刷功能时序
participant 小程序 as A
participant 安全插件 as B
participant 插件服务器 as C
participant 防刷服务器 as D

A->B:accountType,uid,appid...
note over B:参数加密
B->C:密文
note over C:参数解密、获取ip\n、signature校验
C->D:防刷验证
D-->C:验证结果
note over C:结果加密
C-->B:
note over B:结果解密
B-->A:返回风险
```

```sequence
title:知货架构
participant browser as A
participant nginx as B
participant node as C
participant API as D
participant mysql as E

A->B:域名请求
note over B:路由转发
B->C:
note over C:校验woa\n登陆态
C-->A:html,js,css...
A->D:ajax请求
note over D:router
D->E:sql查询
E-->D:返回结果
note over D:转json
D-->A:返回结果
```