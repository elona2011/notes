server {
    server_name xlcmll.top www.xlcmll.top;
    gzip on;
    gzip_types text/plain application/xml application/javascript text/css;

    location / {
        gzip_static on;
        root /www/web;
    }
}

server {
    server_name zhb.xlcmll.top;
    gzip on;
    gzip_types text/plain application/xml application/javascript text/css;

    location / {
        gzip_static on;
        root /www/zhihuo;
    }

    location ~ ^/(data1platformcheck|data1platformlogin) {
        proxy_pass http://172.17.0.4:8000;
        proxy_set_header Host zrb.xlcmll.top;
    }

    location ~ /qr/.*\.(gif|jpg|png)$ {
        root /www/zrb;
    }
}