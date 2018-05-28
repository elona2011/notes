# forward proxy

```
location / {
    resolver 8.8.8.8;
    proxy_pass http://$http_host$uri$is_args$args;
}
```

https://ef.gy/using-nginx-as-a-proxy-server

# to another http proxy

proxy_pass转发时，http头部request url里会删除原url里的hostname，可通过rewrite恢复

```
location / {
    rewrite            ^(.*)$   "://$http_host$uri";
    rewrite            ^(.*)$   "http$uri" break;
    proxy_pass http://xx.xx.xx.xx:xx/;
    proxy_set_header    Host   $host;
    proxy_read_timeout 1800;
    proxy_connect_timeout 1800;
}
```

https://stackoverflow.com/questions/5834025/how-to-preserve-request-url-with-nginx-proxy-pass

# inject content

1 如果注入网站开启gzip，那么需要``proxy_set_header Accept-Encoding "";``
2 使用sub_filter

```
location / {
    sub_filter '</head>' 'aaa</head>';
    sub_filter_once on;
    proxy_set_header Accept-Encoding "";
    proxy_pass http://aaa.example.com;
}
```

https://stackoverflow.com/questions/19700871/how-to-inject-custom-content-via-nginx

# serving single file

```
location /static/js/slide.js {
    alias C:\\Users\\username\\Documents\\test\\gee\\slide.js;
}
```

# serving directory

```
location /static/ {
    root C:\\Users\\username\\Documents\\test\\recaptcha\\demo\\;
}
```

https://serverfault.com/questions/278351/nginx-root-versus-alias-for-serving-single-files

# regexp

需要有modifier才生效

```
location ~ \/slide\.7\.\d+\.\d+\.js {
    alias C:\\Users\\username\\Documents\\test\\deobfuscator\\demo\\slide.js;
}
```

# Install

```
sudo apt-get update
sudo apt-get install nginx
```

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04

# 重启

```bash
sudo systemctl restart nginx
```

windows:

```
nginx -s stop
nginx -s reload
```

# 配置

```bash
vi /usr/local/nginx/conf/nginx.conf #redhat位置
sudo vi /etc/nginx/sites-available/default #ubuntu位置
```

/etc/nginx/sites-available/default:

```
server {
    root /home/j/www;
    server_name xxx.me www.xxx.me;

    location /csrf/update {
        proxy_pass http://127.0.0.1:8000;
        proxy_redirect default;
    }
}
```

# 反向代理

```
upstream dip.cng.com{
    server 10.37.65.66:8360 weight=1;
    server 10.37.65.68:8360 weight=1;
}
```

设置/persons 走反向代理

```
location /persons {
    proxy_pass http://p.cng.com;
    proxy_redirect default;
}
```

# gzip

```
gzip             on;
#gzip_min_length  1000;
gzip_http_version 1.1;
gzip_vary on;
gzip_comp_level 6;
gzip_proxied any;
gzip_types text/plain text/html text/css application/json application/javascript application/x-javascript text/javascript text/xml application/xml application/rss+xml application/atom+xml application/rdf+xml;
#it was gzip_buffers 16 8k;
gzip_buffers 128 4k; #my pagesize is 4
gzip_disable "MSIE [1-6]\.(?!.*SV1)";
```

# https

https://certbot.eff.org/#ubuntuxenial-nginx

# http2

nginx sites-available default

```
listen 443 ssl http2;
```