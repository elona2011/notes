https://github.com/hawx1993/Accessing-Google

# shadowsocks

```
sudo apt install shadowsocks
sslocal -c /etc/shadowsocks/config.json
```

install ``ssserver``和``sslocal``

shadowsocks的安装目录在``/etc/shadowsocks``，该目录下有``config.json``文件可以配置远程服务器参数和本地socks5参数。参数配置好后运行``sslocal``，就在本地启动了socks5代理。若需同时指定多个服务端ip，可参考``"server":["1.1.1.1","2.2.2.2"],``

# HAProxy

国内vps的出口带宽要远高于个人的出口带宽，故可以使用国内vps连国外vps来加速外网访问。

```
client  < - >  haproxy  < - >  ss server
```

以1.6版本为例：

```
apt-get install haproxy
vi /etc/haproxy/haproxy.cfg
service haproxy restart
```

config如下，注意mode一定要是tcp

```
global
	log /dev/log	local0
	log /dev/log	local1 notice
	chroot /var/lib/haproxy
	stats socket /run/haproxy/admin.sock mode 660 level admin
	stats timeout 30s
	user haproxy
	group haproxy
	daemon

	# Default SSL material locations
	ca-base /etc/ssl/certs
	crt-base /etc/ssl/private

	# Default ciphers to use on SSL-enabled listening sockets.
	# For more information, see ciphers(1SSL). This list is from:
	#  https://hynek.me/articles/hardening-your-web-servers-ssl-ciphers/
	ssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS
	ssl-default-bind-options no-sslv3

defaults
	log	global
	mode	tcp
	option	dontlognull
        timeout connect 5000
        timeout client  50000
        timeout server  50000
	errorfile 400 /etc/haproxy/errors/400.http
	errorfile 403 /etc/haproxy/errors/403.http
	errorfile 408 /etc/haproxy/errors/408.http
	errorfile 500 /etc/haproxy/errors/500.http
	errorfile 502 /etc/haproxy/errors/502.http
	errorfile 503 /etc/haproxy/errors/503.http
	errorfile 504 /etc/haproxy/errors/504.http

frontend ss-in
	bind *:11111
	default_backend ss-out

backend ss-out
	server server1 111.112.119.111:11111 maxconn 48
```

haproxy优化

https://blog.codeship.com/performance-tuning-haproxy/https://blog.codeship.com/performance-tuning-haproxy/

# ss具体安装

下面的命令，需要一行一行的执行，每输入一行命令，回车执行，如果没有报错，即为执行成功，出现确认提示的时候，输入 y 后，回车即可（每行命令可以复制后在putty里右键粘贴，回车执行）

```
yum install epel-release
yum update
yum install python-setuptools m2crypto supervisor
easy_install pip
pip install shadowsocks

vi /etc/shadowsocks.json
```

此时按 i 键进入编辑模式，putty黑框的左下角会出现 -- INSERT -- 字样，然后一次性复制下面的内容（复制之前记得修改8388和yourpassword为你自己的端口号和密码，此端口号不是你的SSH端口号，而是你在手机或电脑上的shadowsocks客户端连接VPS上搭建的服务端的端口号，范围 1 - 65535 ，只要不和现有的端口号如SSH端口冲突都可以，记下你修改的端口号和密码，待会儿在配置手机和电脑的客户端时还要用到），在putty里右键，此时复制的内容应该已经粘贴到了putty里

```
----------以下内容为复制内容----------
{
    "server":"0.0.0.0",
    "server_port":8388,
    "local_port":1080,
    "password":"yourpassword",
    "timeout":600,
    "method":"aes-256-cfb"
}
----------以上内容为复制内容----------
```

复制完成后，按 Esc 键退出编辑模式，此时putty黑框左下角的 -- INSERT -- 字样消失，按下 : 键，输入 wq ，此时文件保存完毕并退出了vi编辑器。

继续执行命令

```
vi /etc/supervisord.conf
```

此时你应该能看到很多英文内容，按 i 键再次进入编辑模式，putty黑框的左下角会出现 -- INSERT -- 字样，用方向键将光标调整至文件尾部的空行处，然后一次性复制下面的内容，在putty里右键，此时复制的内容应该已经粘贴到了putty里

```
----------以下内容为复制内容----------
[program:shadowsocks]
command=ssserver -c /etc/shadowsocks.json
autostart=true
autorestart=true
user=root
---------以上内容为复制内容---------
```

复制完成后，按下回车键给文件尾部留出空行，然后按 Esc 键退出编辑模式，此时putty黑框左下角的 -- INSERT -- 字样消失，按下 : 键，输入 wq ，此时文件保存完毕并退出了vi编辑器。

继续执行命令

```
vi /etc/rc.local
```

此时你应该能看到几行英文内容，按 i 键再次进入编辑模式，putty黑框的左下角会出现 -- INSERT -- 字样，用方向键将光标调整至文件中部的空行处，然后一次性复制下面的内容，在putty里右键，此时复制的内容应该已经粘贴到了putty里

```
---------以下内容为复制内容---------
service supervisord start
---------以上内容为复制内容---------
```

复制完成后，按 Esc 键退出编辑模式，此时putty黑框左下角的 -- INSERT -- 字样消失，按下 : 键，输入 wq ，此时文件保存完毕并退出了vi编辑器。

最后执行命令

```
reboot
```

此时，你的VPS重新启动，服务端已经完全配置完毕，putty会弹出一个连接已断开的提示框，关闭即可(不是报错)。
