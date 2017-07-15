# Install NVM

nvm用于切换node的各种版本

https://github.com/creationix/nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```

安装完可能需要重启bash

# Install node

```
# nvm install 4.5.0
# nvm ls //查看所有版本
# nvm use 4.5.0 //使用该版本
```

*二进制安装*

http://www.cnblogs.com/dubaokun/p/3558848.html

## ubuntu

```
sudo apt-get update
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

# Install nginx

```
sudo yum install epel-release
sudo yum install nginx
sudo systemctl start nginx
```

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7

# Install tomcat

```
sudo yum install tomcat6
```

# Install apache ab

httpd为apache http server,httpd-tools里包含ab,apr和apr-util为ab的依赖

```
yum install apr
yum install apr-util
yum install httpd
yum install httpd-tools
```
