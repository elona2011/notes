# bases

```
null >= 0; // true
null == 0; // false
```
http://stackoverflow.com/questions/2910495/why-null-0-null-0-but-not-null-0

## typeof

```
if(typeof foo === 'undefined'){...}
if(this.foo){...}
```
以上两者效果基本等价，但typeof作为类型检查会更加准确，所以在一些框架和库中会使用很多
typeof检测对象时，要注意不是null，因为typeof null === 'object'

## object

hasOwnProperty
实现a['b.c']
```
var r = { a:1, b: {b1:11, b2: 99}};
var s = "b.b2";

var value = s.split('.').reduce(function(a, b) {
  return a[b];
}, r);

console.log(value);
```

http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string

# Promise

promise chaining

http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promises-queues

# Regex

```
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
```
``\1`` - it means the first capturing group in the matched expression. ``\n`` would be the nth capturing group. (Note that ``\0`` would be whole match). In many engines, the upperlimit for n is 9, but some support up to 99 as well.
When used in regex like ``(a|b)\1``, it means that after a or b, the next character should be the first captured group, which is a or b so the regex here would match aa or bb.

# window/history

```
window.location.reload();
window.location.href = '#/suits';
window.open('#/edit-rooms-detail/' + rowData[1], '_blank');
<a href="javascript:history.go(-1);" class="btn default">返回上一级</a>
<a target="_blank" href="http://your_url_here.html">Link</a>
```
