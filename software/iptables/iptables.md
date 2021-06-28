1 sudo apt-get install redsocks
2 创建redsocks.conf
3 killall redsocks
4 sudo redsocks -c redsocks.conf
5 adduser --system --no-create-home trojan //增加一个trojan用户
6 在trojan.service增加User
7 ./iptables_install.sh

https://superuser.com/questions/1401585/how-to-force-all-linux-apps-to-use-socks-proxy
https://github.com/trojan-gfw/trojan/issues/135

