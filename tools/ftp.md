# commandline

```
ftp xx.xx.xx.xx 8080
pass // if found `500 Illegal PORT command, switch to passive mode
ls
```

https://www.howtoforge.com/tutorial/how-to-use-ftp-on-the-linux-shell/

# wget

```
wget -m --user="user@login" --password="Pa$$wo|^D" ftp://server.com/
```

https://stackoverflow.com/questions/113886/how-to-recursively-download-a-folder-via-ftp-on-linux

# install & restart

```
yum -y update
yum -y install vsftpd
vim /etc/vsftpd/vsftpd.conf
service vsftpd restart
```

https://www.liquidweb.com/kb/how-to-install-and-configure-vsftpd-on-centos-7/

# trouble shooting

*500 OOPS: chroot*

https://www.liquidweb.com/kb/error-500-oops-vsftpd-refusing-to-run-with-writable-root-inside-chroot-solved/

*425 failed to establish connection*

修改/etc/selinux/config文件中的SELINUX=xxx 为disabled ，然后重启

```
SELINUX=disabled
```
