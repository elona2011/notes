sudo apt install zssh
登陆用法同ssh

上传到远程
按ctrl+2切换到本机
zssh>pwd //看一下本地机器的目录在那
zssh>ls  //看一下有那些文件
zssh>sz 123.txt  //上传本地机器的当前目录的123.txt到远程机器的当前目录

下载文件
#sz filename  //在远程机器上,启动sz, 准备发送文件
看到一堆乱码
然后在ctrl+2
zssh > pwd  //看看在那个目录,cd 切换到合适的目录
zssh > rz //接住对应的文件