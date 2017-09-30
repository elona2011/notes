# undefined

可以使用``void 0``来代替``undefined``，原因：

1 函数内部可以声明一个undefined变量取代undefined关键字

# comparision

If the two operands are not of the same type, JavaScript converts the operands then applies strict comparison. If either operand is a number or a boolean, the operands are converted to numbers if possible; else if either operand is a string, the other operand is converted to a string if possible.

```js
" " == false; // true
' ' == undefined; // false
```

https://stackoverflow.com/questions/4216362/javascript-white-space-string-boolean-conversion/4216618#4216618

# Promise

promise chaining

http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promises-queues

# Regex

```
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
```

``\1`` - it means the first capturing group in the matched expression.

``\n`` would be the nth capturing group. (Note that ``\0`` would be whole match). In many engines, the upperlimit for n is 9, but some support up to 99 as well.

When used in regex like ``(a|b)\1``, it means that after a or b, the next character should be the first captured group, which is a or b so the regex here would match aa or bb.

# window/history

```
window.location.reload();
window.location.href = '#/suits';
window.open('#/edit-rooms-detail/' + rowData[1], '_blank');
<a href="javascript:history.go(-1);" class="btn default">返回上一级</a>
<a target="_blank" href="http://your_url_here.html">Link</a>
```
