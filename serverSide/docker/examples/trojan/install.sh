#!/bin/sh
sudo apt install snapd
sudo snap install core
sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot certonly --standalone -m arthuxx@gmail.com --agree-tos -n -d t..me
mkdir trojan
sudo cp /etc/letsencrypt/archive/t.yanjie.me/fullchain1.pem /home/ubuntu/trojan/fullchain.pem
sudo cp /etc/letsencrypt/archive/t.yanjie.me/privkey1.pem /home/ubuntu/trojan/privkey.pem
sudo snap install docker
sleep 5
FILE=/home/ubuntu/trojan/config.json
if [ ! -f "$FILE" ]; then
touch trojan/config.json
echo '{
    "run_type": "server",
    "local_addr": "0.0.0.0",
    "local_port": 443,
    "remote_addr": "127.0.0.1",
    "remote_port": 80,
    "password": [
        ""
    ],
    "log_level": 1,
    "ssl": {
        "cert": "/config/fullchain.pem",
        "key": "/config/privkey.pem",
        "key_password": "",
        "cipher": "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384",
        "cipher_tls13": "TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_256_GCM_SHA384",
        "prefer_server_cipher": true,
        "alpn": [
            "http/1.1"
        ],
        "alpn_port_override": {
            "h2": 81
        },
        "reuse_session": true,
        "session_ticket": false,
        "session_timeout": 600,
        "plain_http_response": "",
        "curves": "",
        "dhparam": ""
    },
    "tcp": {
        "prefer_ipv4": false,
        "no_delay": true,
        "keep_alive": true,
        "reuse_port": false,
        "fast_open": false,
        "fast_open_qlen": 20
    },
    "mysql": {
        "enabled": false,
        "server_addr": "127.0.0.1",
        "server_port": 3306,
        "database": "trojan",
        "username": "trojan",
        "password": "",
        "key": "",
        "cert": "",
        "ca": ""
    }
}' >> trojan/config.json
fi
sudo docker run -dt --name trojan -v /home/ubuntu/trojan:/config -p 443:443 trojangfw/trojan