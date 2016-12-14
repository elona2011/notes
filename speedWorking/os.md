# keybinding

windows下：

```
win+2 启动任务栏上第2个程序，如有多个则切换
```

ubuntu:

```
长按super建，会出来所有快捷键的提示
```

# 将CapsLock修改为Ctrl键

win7:

因为CapsLock键很少使用，可以把该键修改为Ctrl键。windows下可以使用[Ctrl2Cap](https://technet.microsoft.com/en-us/sysinternals/bb897578.aspx?f=255&MSPPError=-2147217396)

https://www.emacswiki.org/emacs/MovingTheCtrlKey#toc15

ubuntu:

```
sudo vi /etc/default/keyboard
XKBOPTIONS='ctrl:swapcaps'

sudo dpkg-reconfigure keyboard-configuration //需重启系统，否则可能会遇到切换中文输入法将配置还原的问题（ibus）
```

http://askubuntu.com/questions/149971/how-do-you-remap-a-key-to-the-caps-lock-key-in-xubuntu

# 多桌面

win7:

https://github.com/octalmage/mdesktop

http://getmdesktop.com/




