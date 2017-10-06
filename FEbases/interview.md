https://gold.xitu.io/post/587dab348d6d810058d87a0a

http://www.thatjsdude.com/interview/js2.html

https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.7fty5p61c

https://rockjins.github.io/2017/01/26/interviews-javascript/

假设有一个库A提供了一个方法b，正常执行使用A.b()，如何重载方法b，使A.b()执行时，可以先执行额外的函数c()

```js
function reload(obj,name){
    var old = obj[name]
    obj[name]=function(){
        c()
        return old.apply(obj,arguments)
    }
}
reload(A,'b')
```

https
ast
mysql索引