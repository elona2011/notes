* 看代码
* 对象复制
* new过程
* 继承
* 手写instanceof

---

* 看代码

```js
var A = function() {};
A.prototype.n = 1;
var b = new A();
A.prototype = { n: 2, m: 3 };

var c = new A();
console.log(b.n);
console.log(b.m);
console.log(c.n);
console.log(c.m);
```

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

* 手写instanceof

判断是否是对象/遍历原型链查找

```js
function instance_of(obj,func){
    if(typeof obj === 'object'&&obj!==null){
        let proto = obj.__proto__
        while(proto){
            if(proto===func.prototype){
                return true
            }
            proto = proto.__proto__
        }
    }
    return false
}
```