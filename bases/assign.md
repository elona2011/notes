对象的赋值实际是保存该对象的地址

对象的属性的赋值分为两步，先是判断该对象是否有该属性，没有就先创建；然后赋值

```
var a = {n:1}; //a获取对象{n:1}的地址
var b = a; // 将a的值赋给b，b也获取对象{n:1}的地址
a.x = a = {n:2}; //首先在对象上创建属性，得到对象{n:1, x:undefine}，此时a和b都指向它；然后a获取对象{n:2}的地址，a改变了值；对象{n:1, x:undefine}的x获取对象{n:2}的地址
alert(a.x);// --> undefined
alert(b.x);// --> {n:2}
```

# let

```js
for(var i=1;i<5;i++){
 setTimeout(function timer(){
  console.log(i);
 },i*1000);
} //输出4个5

for(let i=1;i<5;i++){
 setTimeout(function timer(){
  console.log(i);
 },i*1000);
} //输出1，2，3，4
```