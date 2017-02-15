# 当前时间

```
moment().format('YYYY-MM-DD HH:mm:ss')
```

# 本周第一天
```
moment.lang('zh-cn', {
    week : {
        dow : 1 // Monday is the first day of the week
    }
});

var date = moment().weekday(0); // date now is the first day of the week, (i.e., Monday)
```