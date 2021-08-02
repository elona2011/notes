# lets-encrypt


配置环境 https://certbot.eff.org/lets-encrypt/ubuntuother-other

泛域名手工申请证书：
```
certbot -h all
sudo certbot certonly  -d "*.xxx.com" --manual --preferred-challenges dns
```