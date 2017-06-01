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

# 对象判断

```
function A(){}
var a = new A();
if(typeof a === 'object'){} //基本类型判断
if(a instanceof A){} //实例判断
if(a.constructor === A){} //构造器函数判断
```

# 函数判断

```
function isFunction(fn){
  return Object.prototype.toString.call(fn) === "[object Function]";
}
```

# 两种类型判断的区别

```
if(typeof foo === 'undefined'){...}
if(this.foo){...}
```

以上两者效果基本等价，但typeof作为类型检查会更加准确，所以在一些框架和库中会使用很多

typeof检测对象时，要注意不是null，因为``typeof null === 'object'``
