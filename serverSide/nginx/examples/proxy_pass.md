```
server {
    location / {
        proxy_http_version 1.1;
        proxy_pass http://172.17.0.2:8000;
    }

    location /blog {
        proxy_http_version 1.1;
        rewrite ^/blog(.*) /$1 break;
        proxy_pass http://127.0.0.1:8181;
    }

    location ~ /qr/.*\.(gif|jpg|png)$ {
        root /data/zrb;
    }
}
```

|location|proxy_pass|test URL|path received|
|---|---|---|---|
|/test1|http://127.0.0.1:8080|	/test1/abc/test|	/test1/abc/test|
|/test2|	http://127.0.0.1:8080/	|/test2/abc/test	|//abc/test|
|/test3/|	http://127.0.0.1:8080	|/test3/abc/test	|/test3/abc/test|
|/test4/|	http://127.0.0.1:8080/	|/test4/abc/test	|/abc/test|
|/test5|	http://127.0.0.1:8080/app1|	/test5/abc/test|/app1/abc/test|
|/test6|	http://127.0.0.1:8080/app1/|	/test6/abc/test	|/app1//abc/test|
|/test7/|	http://127.0.0.1:8080/app1|	/test7/abc/test|	/app1abc/test|
|/test8/|	http://127.0.0.1:8080/app1/|	/test8/abc/test	|/app1/abc/test|
|/|	http://127.0.0.1:8080	|/test9/abc/test	|/test9/abc/test|
|/|	http://127.0.0.1:8080/	|/test10/abc/test	|/test10/abc/test|
|/|	http://127.0.0.1:8080/app1	|/test11/abc/test	|/app1test11/abc/test|
|/|	http://127.0.0.1:8080/app2/	|/test12/abc/test	|/app2/test12/abc/test|

https://tarunlalwani.com/post/nginx-proxypass-server-paths/