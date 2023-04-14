1在home下新建config.json，修改id和port
```json
{
    "inbounds": [
        {
            "port": 10086, // 服务器监听端口
            "protocol": "vmess",
            "settings": {
                "clients": [
                    {
                        "id": "b831381d-6324-4d53-ad4f-8cda48b30811"
                    }
                ]
            }
        }
    ],
    "outbounds": [
        {
            "protocol": "freedom",
            "tag": "freedom"
        },
        {
            "protocol": "blackhole",
            "tag": "blackhole"
        }
    ],
    "routing": {
        "domainStrategy": "AsIs",
        "rules": [
            {
                "type": "field",
                "network": "udp,tcp",
                "outboundTag": "freedom"
            },
            {
                "type": "field",
                "network": "udp,tcp",
                "outboundTag": "blackhole"
            }
        ]
    }
}
```

2启动docker
sudo docker run --restart always -it -d \
    --name wgcf \
    -p 80:10086 \
    --sysctl net.ipv6.conf.all.disable_ipv6=0 \
    --privileged --cap-add net_admin \
    -v /lib/modules:/lib/modules \
    -v $(pwd)/wgcf:/wgcf \
    neilpang/wgcf-docker -4 

sudo docker run -d -it --restart always \
    --name v2ray \
    --network container:wgcf \
    -v /home/lighthouse/config.json:/etc/v2fly/config.json \
    v2fly/v2fly-core run -c /etc/v2fly/config.json 

3下载客户端软件，并修改客户端json
```json
{
    "inbounds": [
        {
            "port": 1080, // SOCKS 代理端口，在浏览器中需配置代理并指向这个端口
            "listen": "127.0.0.1",
            "protocol": "socks",
            "settings": {
                "udp": true
            }
        }
    ],
    "outbounds": [
        {
            "protocol": "vmess",
            "settings": {
                "vnext": [
                    {
                        "address": "server", // 服务器地址，请修改为你自己的服务器 ip 或域名
                        "port": 10086, // 服务器端口
                        "users": [
                            {
                                "id": "b831381d-6324-4d53-ad4f-8cda48b30811"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "protocol": "freedom",
            "tag": "direct"
        }
    ],
    "routing": {
        "domainStrategy": "IPOnDemand",
        "rules": [
            {
                "type": "field",
                "ip": [
                    "geoip:private"
                ],
                "outboundTag": "direct"
            }
        ]
    }
}
```