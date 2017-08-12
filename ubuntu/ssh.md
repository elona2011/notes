# usage

```
ssh -p [port] [ip]
```

# 使用shh免密登陆vps

```
$ ssh-keygen -t rsa
$ ssh-copy-id -p port user@ip
```

如果pub_key丢失不能登录，可以到服务器上删除``~/.ssh/``目录，打开密码登录选项PasswordAuthentication，就可以密码登录，并上传新的pub_key

# ssh规则

修改/etc/ssh/sshd_config中的PermitRootLogin和PasswordAuthentication，阻止root登录和密码登录

```
PermitRootLogin no
PasswordAuthentication no
```

修改完成后重启sshd

```
sudo systemctl reload sshd
```

# ufw

```
sudo ufw allow port
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
sudo ufw status
```

https://www.youtube.com/watch?v=kR06NoSzAXY
