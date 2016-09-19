# typeof

typeof可返回6种类型：``undefined, boolean, number, string, object, function``

js实际的数据类型为：undefined, boolean, number, string, object，前4种为基本类型，第5种为引用类型
基本类型无法添加属性,如需添加可以在prototype上添加

```
var a = '111';
a.value = '222';
console.log(a.value); //undefine
console.log(a.length); //3
String.prototype.bb = '33';
a.bb; //'33'
```

基本类型中的假值

false, 0, “”, NaN, null, undefined, 除了这6个值，其它所有值均可隐式转换为true

```
if(typeof foo === 'undefined'){...}
if(this.foo){...}
```

以上两者效果基本等价，但typeof作为类型检查会更加准确，所以在一些框架和库中会使用很多
typeof检测对象时，要注意不是null，因为``typeof null === 'object'``
