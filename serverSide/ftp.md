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
