version: '3.8'

services:
    nginx:
        image: nginx
        container_name: nginx
        volumes:
            - /root/www:/www
            - /root/nginx:/etc/nginx/conf.d
        ports:
            - "36912:80"
        depends_on:
            - rwb
            - web
    rwb:
        image: rwb
        container_name: rwb
        volumes:
            - /root/rwb-back:/code
        ports:
            - "9000:9000"
        command: bash -c "gunicorn -w 1 -b 0.0.0.0:9000 --timeout 300 rwb.wsgi"
    db:
        image: mysql:5.7
        container_name: db
        environment:
            MYSQL_ROOT_PASSWORD: secret
            MYSQL_DATABASE: goods 
        volumes: 
            - /root/goods/conf/mysqlconf:/etc/mysql/conf.d
        ports:
            - "33061:3306"
    web:
        build: /root/goods
        container_name: web
        command: bash -c "python manage.py runserver 0.0.0.0:8000"
        volumes:
            - /root/goods:/code
        ports:
            - "8000:8000"
        depends_on:
            - db
            # - redis
        environment:
            MYSQL_HOST: db
            MYSQL_USER: root
            MYSQL_PASSWORD: secret
            MYSQL_DB: goods