# Symbol

a type-level string kind

https://github.com/paf31/24-days-of-purescript-2016/blob/master/9.markdown

# SProxy

```purescript
main = get (SProxy :: SProxy "aa") { aa: 1 }
```

```js
var main = get(new Data_Symbol.IsSymbol(function () {
    return "aa";
}))()(Data_Symbol.SProxy.value)({
    aa: 1
});
```