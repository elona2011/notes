# 重启

```bash
sudo systemctl restart nginx
```

# 配置

```bash
vi /usr/local/nginx/conf/nginx.conf #redhat位置
sudo vi /etc/nginx/sites-available/default #ubuntu位置
```

# 反向代理

```
upstream dip.cnsuning.com{
    server 10.37.65.66:8360 weight=1;
    server 10.37.65.68:8360 weight=1;
}
```

设置/persons走反向代理

```
location /persons {
    proxy_pass http://dip.cnsuning.com;
    proxy_redirect default;
}
```

# 正向代理

```
server{  
        resolver 127.0.1.1;  
        resolver_timeout 30s;   
        listen 8000;  
        location / {  
                proxy_pass http://$http_host$request_uri;  
                proxy_set_header Host $http_host;  
                proxy_buffers 256 4k;  
                proxy_max_temp_file_size 0;  
                proxy_connect_timeout 30;  
                proxy_cache_valid 200 302 10m;  
                proxy_cache_valid 301 1h;  
                proxy_cache_valid any 1m;  
        }  
}  
```

http://blog.csdn.net/newborn2012/article/details/24248961
