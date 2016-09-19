# 缓存函数

```
function getElements(name){
  if(!getElemnts.cache) getElements.cache = {};
  return getElements.cache[name] = getElements.cache[name] || document.getElementsByTagName(name);
}
```

# DOM的缓存(地址缓存，数据都是实时最新的)

```
var b = (function a(){
    var cache = {};
    return function(dom){
        return cache[dom] ? cache[dom] : cache[dom] = document.getElementById(dom);
    }
})();

console.log(b("test").innerHTML);
document.getElementById('test').innerHTML="you";
console.log(b("test").innerHTML);
```
