# startup

```
crontab -e

@reboot sslocal -c /etc/shadowsocks/config.json
```

https://unix.stackexchange.com/questions/416137/how-can-i-run-a-script-on-startup-on-ubuntu-server-17-10

# desktop shortcut

save to androidStudio.desktop

```
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Icon=someicon
Exec=sh /path/to/studio.sh
Name=Android Studio
```

```
cd ~/Desktop && chmod a+x androidStudio.desktop
```

https://askubuntu.com/questions/713401/create-a-desktop-shortcut-icon-for-studio-sh

# keybinding

ubuntu:

```
长按super建，会出来所有快捷键的提示
```

# 将CapsLock修改为Ctrl键

ubuntu:

```
sudo vi /etc/default/keyboard
XKBOPTIONS='ctrl:swapcaps'

sudo dpkg-reconfigure keyboard-configuration //需重启系统，否则可能会遇到切换中文输入法将配置还原的问题（ibus）
```

http://askubuntu.com/questions/149971/how-do-you-remap-a-key-to-the-caps-lock-key-in-xubuntu

# apt-get

如果出现无法定位软件包，可以``sudo apt-get update``

如果``apt-get update``没有更新，那么查看``/etc/apt/sources.list``是否为空，如果为空可将``/usr/share/doc/apt/examples/sources.list``拷贝过去

# deb

```bash
sudo apt install ./name.deb
```

# bandwidth

http://askubuntu.com/questions/20872/how-do-i-limit-internet-bandwidth

# Grub

修改默认启动项

```
# sudo vim /etc/default/grub

GRUB_DEFAULT=0 //改为4

# sudo update-grub
```

https://jingyan.baidu.com/article/f71d60379e16021ab641d1ab.html