dd if=/dev/zero of=/root/myswapfile bs=1M count=1024
chmod 600 /root/linuxswapfile
mkswap /root/linuxswapfile
swapon /root/linuxswapfile
cat /etc/fstab
swapon -s
free -k

https://docs.alfresco.com/3.4/tasks/swap-space-lin.html