# 修改默认启动项

在/boot/grub/grub.cfg中找出windows项，如``menuentry "Windows Vista (loader) (on /dev/sdc1)"``

```
# vi /etc/default/grub
```

修改GRUB_DEFAULT=0

```
GRUB_DEFAULT="Windows 7 (loader) (on /dev/sda1)"
```

更新Grub

```
# update-grub
```
