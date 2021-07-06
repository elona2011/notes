# Intro

1.生成session密钥

第一次登录时，server会将其公钥传给client，client使用公钥加密它传给server的会话密钥q（本次连接的对称密钥）。这样server和client都知道了会话密钥q,之后的信息传输都会用q加密。以后每次登录还会验证公钥的指纹，从而验证server的身份。如果不对，排除是管理员修改或系统重做，那可能就是受到了中间人攻击。

2.认证（免密登录）

认证前，client需将自己生成的公钥传给server。
1. 服务器 生成随机数 x，并用client公钥加密后生成结果 S(x)，发送给客户端
2. 客户端使用client私钥解密 S(x) 得到 x
3. 客户端计算 q + x 的 md5 值 n(q+x)，q为上一步得到的会话密钥
4. 服务器计算 q + x 的 md5 值 m(q+x)
5. 客户端将 n(q+x) 发送给服务器
6. 服务器比较 m(q+x) 和 n(q+x)，两者相同则认证成功

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

## Host key verification failed

说明服务器上的host key被修改，需要在本地``~/.ssh/known_hosts``文件中删除原来的host key，登陆错误码中会提示old key的位置

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
