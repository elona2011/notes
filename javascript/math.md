# random

math.random是可以破解的，在需要安全的场合，应使用如下随机数方法：

```
var array = new Uint32Array(10);
window.crypto.getRandomValues(array);
```

http://security.stackexchange.com/questions/84906/predicting-math-random-numbers/123554#123554

https://blog.securityevaluators.com/hacking-the-javascript-lottery-80cc437e3b7f#.gswhnqsxw