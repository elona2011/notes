# why

本地带宽小，无外网ip

# install

```
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:transmissionbt/ppa
sudo apt-get update
sudo apt-get install transmission-cli transmission-common transmission-daemon -y
```

https://vpsguide.net/tutorials/vps-tutorials/install-transmission-torrent-client-on-ubuntu-server-and-debian/

# config

```
sudo /etc/init.d/transmission-daemon stop
sudo vi /var/lib/transmission-daemon/info/settings.json
sudo /etc/init.d/transmission-daemon start
```

## settings.json

修改settings.json文件，必须先停止transmission服务，然后修改，再重启transmission服务

```
"rpc-username": "你的用户名"　//登录者用户名
"rpc-password": "你的密码"　//用户密码
"download-dir": "/home/bt/downloads"　//下载完成储存的位置,可以不改
"incomplete-dir": "/home/bt/downloads"　//未下载完成储存的位置,可以不改
"rpc-whitelist-enabled": false　//启用IP认证模式
"rpc-authentication-required": true　//启用使用者认证方式 
```

## folder setting

```
mkdir /home/jie/downloads
sudo usermod -a -G debian-transmission jie
sudo chgrp debian-transmission /home/jie/downloads
sudo chmod 770 /home/jie/downloads
sudo service transmission-daemon stop
sudo vi /etc/transmission-daemon/settings.json
```

settings.json

```
"umask": 2
```

https://askubuntu.com/questions/221081/permission-denied-when-downloading-with-transmission-deamon