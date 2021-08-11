# 创建image

```Dockerfile
FROM mysql:5.7
COPY my.cnf /etc/mysql/conf.d/mysqlutf8.cnf
CMD ["mysqld", "--character-set-server=utf8", "--collation-server=utf8_unicode_ci"]
```

```my.cnf
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
collation-server=utf8_general_ci
character-set-server=utf8
init-connect='SET NAMES utf8'
```

docker build -t mysqlutf8 .

# run

docker run --name mysqlutf8 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=webfunny_db -d mysqlutf8:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

# test uft8

mysql -uroot -p123456

```sql
show variables like "chara%";
```