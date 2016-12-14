# 文件传输

windows下打开powershell

```
./pscp aaa.jpg root@192.168.0.101:/home
```

http://blog.csdn.net/muou2008/article/details/8252223

# 后台运行

putty窗口启动的程序无法在后台运行，窗口关闭，程序就会被杀掉，可以安装screen解决

## install

```
yum install screen
```

## command

```
screen -S yourname -> 新建一个叫yourname的session
screen -ls -> 列出当前所有的session
screen -r yourname -> 回到yourname这个session
screen -d yourname -> 远程detach某个session
```

yourname可为数字或自定义名称：``数字.名称``

http://www.cnblogs.com/mchina/archive/2013/01/30/2880680.html
