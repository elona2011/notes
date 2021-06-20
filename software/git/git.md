```
git config user.name "Your Name Here"
git config user.email your@email.com
git config http.proxy socks5h://localhost:39999
```

# git命令行使用socks5代理

git -c http.proxy=socks5h://localhost:39999 clone https://github.com/xxx/xx.git

# cache password

1 缓存本地

```
git config --global credential.helper 'cache --timeout=3600'
```

https://help.github.com/articles/caching-your-github-password-in-git/

2 添加SSH key

https://help.github.com/articles/generating-ssh-keys/

3 del ssh key

use git bash in windows

```
ls -al ~/.ssh
rm -f ~/.ssh/id_rsa*
```

# gitignore

```sh
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
```

https://stackoverflow.com/questions/11451535/gitignore-is-not-working

## git stage

同git add，文件快照

## git commit

递交所有内容

```
git commit -a
```

提交到远程库

```
git push origin master
```

# 远程库

## 首次git

最好先设置好ssh key, 并在github中创建一个新仓库, 复制SSH地址, 下面是本地操作

```
cd blog 进入要git的目录下
git init 创建初始版本库
git add . 将当前目录及子目录的所有文件添加到暂存区
git commit -m 'init repo' 提交暂存区到仓库区
git status 查看暂存区
git remote add origin git@github.com:elona2011/blog.git 添加远程库地址
git push -u origin master 推送本地内容, -u是关联分支, 以后直接用git push即可
```

## 之后git

```
git add .
git commit -m 'xxx comment'
git push
```

## Troubleshooting

更新ssh key，导致无法push

http://stackoverflow.com/questions/23749886/git-unable-to-resolve-references-when-pushing

# git proxy

## linux

add the following to the file ``~/.ssh/config``

```
Host github.com
        ProxyCommand nc -X 5 -x localhost:1080 %h %p
```

## windows

最近ssh可能被封，导致git客户端无论如何也连不上。尝试许久后，在win10找到如下方法：[Using SSH over the HTTPS port](https://help.github.com/articles/using-ssh-over-the-https-port/)

该方法实测可用，但实际使用中传输速度非常慢1k/s，可采用ssh走shadowsocks的方法，配置好后可达到代理的最大网速。

1 设置好[git ssh key](https://help.github.com/articles/generating-ssh-keys/)

2 在用户目录下的.ssh/创建文件config，并加入下面配置：

```
ProxyCommand C:/Program\ Files/Git/mingw64/bin/connect.exe -H http://127.0.0.1:9699 %h %p

Host github.com
  User git
  Port 22
  Hostname github.com
  IdentityFile "C:\\Users\\username\\\.ssh\\id_rsa"
  TCPKeepAlive yes
  IdentitiesOnly yes

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  IdentityFile "C:\\Users\\username\\\.ssh\\id_rsa"
  TCPKeepAlive yes
  IdentitiesOnly yes
```

``C:/Program\ Files/Git/mingw64/bin/connect.exe``替换成connect.exe的实际路径

``http://127.0.0.1:9699``替换成代理地址和商品

``C:\\Users\\username\\\.ssh\\id_rsa``替换成ssh key的实际路径
