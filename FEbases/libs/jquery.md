
鼠标指针移动到某元素上的样式
```
$(n).css("cursor", "pointer")
```

# attr

检查attr是否存在
```
var attr = $(this).attr('name');

// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.
if (typeof attr !== typeof undefined && attr !== false) {
    // ...
}
```

# modal

显示
```
data-toggle="modal" data-target="#confirmOrder"
$('#editDiscount').modal({
   keyboard: true
});
```

隐藏
```
$('#addRemark').modal('hide')
```

modal事件
```
$('#myModal').on('hidden.bs.modal', function () {
  // do something…
})
```
hide.bs.modal: This event is fired immediately when the hide instance method has been called.

hidden.bs.modal: This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
