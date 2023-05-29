1 get https cert

https://certbot.eff.org/lets-encrypt/ubuntuother-other

2 copy pem file

cp /etc/letsencrypt/archive/xlcmll.top/fullchain1.pem /root/trojan/fullchain.pem
cp /etc/letsencrypt/archive/xlcmll.top/privkey1.pem /root/trojan/privkey.pem

3 new config.json

4 docker run

sudo docker run --restart always -it -d \
    --name wgcf \
    -p 443:443 \
    --sysctl net.ipv6.conf.all.disable_ipv6=0 \
    --privileged --cap-add net_admin \
    -v /lib/modules:/lib/modules \
    -v $(pwd)/wgcf:/wgcf \
    neilpang/wgcf-docker -4 

sudo docker run -it -d --restart always \
    --name trojan2023 \
    --network container:wgcf \
    -v /home/ubuntu/trojan:/config \
    trojangfw/trojan

<!-- docker run -dt --name trojan2023 --restart always -v /home/ubuntu/trojan:/config -p 443:443 trojangfw/trojan -->

