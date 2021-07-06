# bg

```
nohup <command> <args> ><filename> 2>&1 &
```

# adduser

新建一个用户

```
# adduser jie -s /bin/bash
# passwd jie
```

查看和修改用户组

```
# groups jie
# usermod -aG sudo jie
```

# 常用命令

## top

按数字键“1”就可以看到每个核心的使用情况

## 压缩、解压

.xz

```
xz -z xxx.tar //压缩xxx.tar并删除原文件
xz -zk xxx.tar //压缩xxx.tar并保留原文件
xz -d xxx.tar.xz //解压xxx.tar.xz并删除原文件
xz -dk xxx.tar.xz //解压xxx.tar.xz并保留原文件
```

## 查找

在find后面写上-name，表明要求系统按照文件名查找，最后写上httpd.conf这个目标文件名即可

```bash
find / -name httpd.conf
```

## yum

```
yum list available tomcat* //列出可以安装的tomcat包
yum list |grep mysql
yum list installed |grep mysql
```

## 自启动

```
chkconfig vsftpd on
```

## service

```bash
service oracle start
service oracle stop
service oracle restart
service oracle status
```

# CentOS 7

## 最小安装，激活网卡

```
# ls /etc/sysconfig/network-scripts
# vi /etc/sysconfig/network-scripts/ifcfg-epn0s3
将其中的ONBOOT改为yes
# service network start
```
