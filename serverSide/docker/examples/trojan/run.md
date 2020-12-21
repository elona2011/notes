1 get https cert

https://certbot.eff.org/lets-encrypt/ubuntuother-other

2 copy pem file

cp /etc/letsencrypt/archive/xlcmll.top/fullchain1.pem /root/trojan/fullchain.pem
cp /etc/letsencrypt/archive/xlcmll.top/privkey1.pem /root/trojan/privkey.pem

3 new config.json

4 docker run

docker run -dt --name trojan -v /root/trojan:/config -p 443:443 trojangfw/trojan

