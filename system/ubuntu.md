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

# 输入法

fcitx可配，ibus未成功

http://www.jianshu.com/p/4793e55751ec