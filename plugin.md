# Metronic

Metronic.initUniform() 初始化jQuery uniform

## update

更新uniform需要用$timeout，因为此时数据还未被angular更新

```
jQuery.uniform.update($(n))
jQuery.uniform.update(selector)
```

# Select2

将select元素初始化好，包括选择的状态，然后调用select2的初始化方法。因为angular的model绑定的值和select2设置选项的值往往是不一样的。所以在angular中可以watch model的值，然后每次变化都初始化相应的select2
