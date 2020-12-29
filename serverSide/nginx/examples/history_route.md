server {
    server_name zrb.xlcmll.top;
    gzip on;
    gzip_types text/plain application/xml application/javascript text/css;

    location / {
        try_files $uri $uri/ /index.html;
        root /www/zrb;
    }

    location /tasks {
        proxy_pass http://172.17.0.5:9000;
        proxy_set_header Host $host;
    }
}