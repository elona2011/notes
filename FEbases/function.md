# 重载函数

```
function addMethod(object, name, fn){
  var old = object[name];
  object[name] = function(){
    if(fn.length === arguments.length)
      return fn.apply(this, arguments);
    else if(typeof old === 'function')
      return old.apply(this, arguments);
  }
}
```

# this

this是隐式传入参数，改变this的方法就是将函数作为对象的方法调用

立即执行函数中的this

```
var c = {d:function(){
  console.log(this);
  (function(){
    console.log(this);
  })();
}};
c.d();
-Object { d: c.d() } //第1个this
-window  //第2个this
```

但是，如果在严格模式下，不仅是anonymous函数，也包括命名函数中的this，如果立即执行，this将会是undefined

```
"use strict";
function myConstructor() {
    this.a = 'foo';
    this.b = 'bar';
}
myInstance     = new myConstructor(); // all cool, all fine. a and b were created in a new local object
myBadInstance  = myConstructor();
```

http://stackoverflow.com/questions/9822561/why-is-this-in-an-anonymous-function-undefined-when-using-strict

隐式绑定

```
var me = {
	a: 3,
	show:show
};
function show(){
	console.log(this.a);
}
me.show(); //this绑定到me上，输出3
```

如果将me.show赋值给一个变量，再调用：

```
var show1 = me.show;
show1(); //undefine,和上例完全不同！！
```

同样，作为回调函数：

```
setTimeout(me.show, 1000); //undefine,参数传递其实就是一种赋值，结果和例2一样
```

解决方法：

```
setTimeout(function(){me.show();}, 1000); //3,传递了一个匿名函数直接调用me.show()，结果和例1一样
```

# 立即执行函数

```
(function b(){})();
b(); //抛出一个referenceError,b函数只能在函数表达式内部访问
```

还可以写成:

```
~function b(){}();
+function b(){}();
```

# arrow function

箭头函数内部实际是没有this, arguments这些默认参数

不要使用于prototype的函数定义

```
let that = this;
Vue.prototype.parseDom = () =>{
  this.data //此处的this===that，不能指向调用时的对象
}
```

# class

class实际上就是一个function，一个构造函数。但它不可以被直接执行，只能被new。

与ES5一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）

```js
class Point {
    constructor(x, y) {
    this.x = x;
    this.y = y;
}

toString() {
    return ‘(‘+this.x+’, ‘+this.y+’)’;
    }
}
```