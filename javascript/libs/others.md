# Metronic

Metronic.initUniform() 初始化jQuery uniform

## update

更新uniform需要用$timeout，因为此时数据还未被angular更新

```
jQuery.uniform.update($(n))
jQuery.uniform.update(selector)
```

# D3.js

enter

http://knowledgestockpile.blogspot.com/2012/01/understanding-selectall-data-enter.html

# ui-router.js

ui-router可加``autoscroll="true"``来滚动到当前标签

```html
<div ui-view class="rightContent" autoscroll="true"></div>
```

# select2.js

angular.js中直接调``$docInput.val(null).trigger('change');``会报``$digest``错误，可用如下方法解决：

```js
$docInput.val(null).trigger('change.select2');
```

https://github.com/select2/select2/issues/3620

# moment.js

当前时间

```
moment().format('YYYY-MM-DD HH:mm:ss')
```

本周第一天

```
moment.lang('zh-cn', {
    week : {
        dow : 1 // Monday is the first day of the week
    }
});

var date = moment().weekday(0); // date now is the first day of the week, (i.e., Monday)
```