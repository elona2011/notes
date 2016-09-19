# get和set

```
var my={
get a(){return this.a;},
set a(val){this.a=val*2;}
};
my.a=2;
my.a; //4
```

# 实现a['b.c']

```
var r = { a:1, b: {b1:11, b2: 99}};
var s = "b.b2";

var value = s.split('.').reduce(function(a, b) {
  return a[b];
}, r);

console.log(value);
```

http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string

# Property

对象的属性名都是字符串，如果不是，也会先转化成字符串，如下：

```
var myObject={};
myObjcet[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";
myObject['true']; //"foo"
myObject["3"]; //"bar"
myObject["[object Object]"]; //"baz"
```

## 枚举property

可枚举相当于“出现在对象属性的遍历中”，即for(var k in myObject){…}遍历可枚举属性
for…in可遍历对象的可枚举属性列表，包括[[prototype]]链

```
('b' in myObject); //查找[[Prototype]]链
myObject.hasOwnProperty('b'); //只查找对象直接包含的属性
Object.keys(myObject); //返回一个数组，包含所有可枚举属性，不查[[Prototype]]链
Object.getOwnPropertyName(myObject); //返回一个数组，包含所有属性，不查[[Prototype]]链
```

## hasOwnProperty

所有的普通对象都可以通过对于Object.prototype的委托来访问hasOwnProperty()，但有的对象可能没连接到Object.prototype（通过Object.create(null)来创建），这时访问myObject.hasOwnProperty()会失败。但可以使用``Object.prototype.hasOwnProperty.call(myObject, 'a')``
