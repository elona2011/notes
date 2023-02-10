# lets-encrypt

配置环境 https://certbot.eff.org/lets-encrypt/ubuntuother-other

泛域名手工申请证书：
```
certbot -h all
sudo certbot certonly  -d "*.xxx.com" --manual --preferred-challenges dns
```

测试域名解析win10

nslookup app.xxx.com