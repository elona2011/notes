# 使用shh免密登陆vps

```
$ ssh-keygen -t rsa
$ ssh-copy-id -p port user@ip
```

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
