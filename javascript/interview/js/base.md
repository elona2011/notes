* 说说 Javascript 的数据类型
* 块级作用域
* 执行上下文
* 闭包
* 对象复制
* new过程
* 继承
* 类型转换判断

---

* 说说 Javascript 的数据类型

Boolean、Null、Undefined、Number、BigInt、String、Symbol

Symbol：属性不可遍历/可定义类的私有属性和方法

* 块级作用域

不存在变量提升/暂时性死区/不允许重复声明

* 执行上下文

全局执行上下文/函数执行上下文
变量对象/作用域链/this

变量对象：arguments/函数定义/变量定义
作用域链：块级作用域/函数作用域

* 闭包

父函数被销毁，返回的子函数仍保留父级的作用域

多个子函数都指向父级，是完全共享的。当父级的作用域被修改，会影响到所有的子函数

* 对象复制

浅拷贝：Object.assign/...
深拷贝：JSON/递归

* new过程

生成新的空对象/链接到构造函数的原型/绑定this/返回新对象

* 继承

```js
class Parent{}
class Child extends Parent{}

Child.__proto__ === Parent
Parent.__proto__ === Function.prototype
Function.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

child.__proto__ === Child.prototype
Child.prototype.__proto__ === Parent.prototype
Parent.prototype.__proto__ === Object.prototype

inherit = function(Child,Parent){
    Child.prototype.__proto__ = Parent.prototype // Child.prototype = Object.create(Parent.prototype)
    Child.__proto__ = Parent // Object.setPrototypeOf(Child,Parent)
    Child.prototype.constructor = Child
}
```

实现两条原型链/设置构造函数

https://www.jianshu.com/p/6dd0e22ff63b

* 类型转换判断

对象转数字：valueOf->toString->[object Object]
undefined: NaN
boolean: 0/1
null:0

Object.prototype.toString.call(x)