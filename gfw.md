https://github.com/hawx1993/Accessing-Google

# shadowsock

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
