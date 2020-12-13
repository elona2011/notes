server {
    location / {
        proxy_pass http://172.17.0.2:8000;
    }

    location ~ /qr/.*\.(gif|jpg|png)$ {
        root /data/zrb;
    }
}