# export some tables

```sql
mysqldump -u... -p... mydb t1 t2 t3 > mydb_tables.sql
```

# export schema

```
mysqldump -u root -p --no-data dbname > schema.sql
```

# import 

```
mysql -u root -p PromotionDouyin < PromotionRealTime.sql
```