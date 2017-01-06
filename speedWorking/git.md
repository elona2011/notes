# why

为什么要用git？因为git不仅可以版本控制，还可以显示出团队成员的贡献值，由关键成员负责master，对版本和团队都有很大用处。

git可以说是为团队而生，而svn只是为项目而生

# 添加SSH keys

https://help.github.com/articles/generating-ssh-keys/

# 远程库克隆

```
git clone <SSH clone URL>
```

<SSH clone URL> 在github相应仓库首页右侧点击SSH clone URL的复制按钮

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

# SVN

http://my.oschina.net/donhui/blog/385452

ssa
