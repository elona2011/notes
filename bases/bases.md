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

# Ajax

XMLHttpRequest

```
var xhr = new XMLHttpRequest();
xhr.open('get', 'http://yanjie.me/');
xhr.onload = function() { /* do something */ }
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Content-Length', JSON.stringify(data).length);
xhr.send(JSON.stringify(data));
xhr.status
xhr.responseText
```

https的页面请求http的ajax请求会报错
