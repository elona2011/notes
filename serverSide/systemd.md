
```
systemctl enable nodeserver.service
systemctl start nodeserver.service
```

http://expressjs.com/en/advanced/pm.html

查看日志　

```
ls /etc/systemd/system/
journalctl -e -u nodeserver.service
```

python3不打印日志

```py
import sys
print('Hello')
sys.stdout.flush()
```