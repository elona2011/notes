* https
* http2
* http3

---

* https

增加TLS/SSL层
服务器生成公钥私钥/CA对公钥签名/client请求/返回公钥证书/client验证公钥/生成会话密钥/用公钥加密会话密钥/server用私钥解密获得会话密钥

https://segmentfault.com/a/1190000018992153

* http2

二进制分帧(header frame/data frame)/多路复用(一个域名一个连接)/头部压缩/服务器推送

* http3

QUIC(Quick UDP Internet Connection)/基于UDP,并把TCP的连接管理、流量控制等特性移植过来