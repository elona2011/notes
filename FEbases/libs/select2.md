# angular.js

angular.js中直接调``$docInput.val(null).trigger('change');``会报``$digest``错误，可用如下方法解决：

```js
$docInput.val(null).trigger('change.select2');
```

https://github.com/select2/select2/issues/3620