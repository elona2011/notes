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
