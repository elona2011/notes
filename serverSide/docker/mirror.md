/etc/docker/daemon.json

```json
{
  "registry-mirrors": ["http://hub-mirror.c.163.com","https://docker.mirrors.ustc.edu.cn"]
}
```

systemctl daemon-reload
systemctl restart docker