# command line

```bash
$ mysql -u root -h localhost -p
```

```sql
show databases;
select database(); #显示当前选择的database
use mysql; #使用mysql

select Host,User from mysql.user

create database test;
drop database test;

show tables;
create table aaa(id int(11) unsigned auto_increment primary key not null,username varchar(25) not null,passwd varchar(25) not null,email varchar(40) not null);
describe aaa;
```

https://www.youtube.com/watch?v=tdBa1XIaC70

<C-l> 清空屏幕

# group by

http://stackoverflow.com/questions/12890071/select-from-multiple-tables-mysql
