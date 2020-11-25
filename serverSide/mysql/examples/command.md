mysql -uroot -ppassword -h100.100.100.100 -P3306 dbName
mysqldump -uroot -ppassword -h100.100.100.100 -P3306 dbName tableName > my.sql
mysql -uroot -ppassword dbName < my.sql 

# docker

```
mysql -uroot -psecret -h127.0.0.1 -P33061 goods
```