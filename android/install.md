HTTP Proxy中Host name设置为mirrors.neusoft.edu.cn

第一次安装Android studio时候弹出unable to access android sdk add-on list原因是你电脑没有SDK而且你下载的android studio又是不带SDK的； 
解决方法：在Android Studio安装目录下/bin找到：bin\idea.properties打开这个文件末尾添加一行disable.android.first.run=true

# java install

```
sudo apt-add-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
sudo vi /etc/profile
```

at the end of file 'profile'

```
export JAVA_HOME=/usr/lib/jvm/java-8-oracle
```

# Failed to load module “canberra-gtk-module"

```
sudo apt install libcanberra-gtk-module libcanberra-gtk3-module
```

https://askubuntu.com/questions/342202/failed-to-load-module-canberra-gtk-module-but-already-installed

# grant current user access to /dev/kvm

```
sudo chown username -R /dev/kvm
```