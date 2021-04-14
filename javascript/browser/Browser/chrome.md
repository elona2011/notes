# Chrome

## bug

因为chrome可能会在mousedown和mouseup事件同时触发一次mousemove事件（实际上鼠标应该没动）
通过ignoreNextMove变量忽略mousedown事件同时触发的一次mousemove事件

```
var ignoreNextMove = false;
$(elm).mousedown(function()
  ignoreNextMove = true;
   ...
})
 .mousemove(function() {
     if (ignoreNextMove) {
       ignoreNextMove = false;
       return;
     }
     ...
 })
```