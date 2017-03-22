# step 0

防抖

```js
let cb, debounce = (fn, wait) => (...args) => {
    clearTimeout(cb)
    cb = setTimeout(fn.bind(null, ...args), wait);
}

let a = debounce((...args) => {
    console.log(...args)
}, 1000)
a(1, 2, 3, 4)
```

# stpe 1

节流

```js
let cb, debounce = (fn, wait) => (...args) => {
    !cb && fn(...args)
    clearTimeout(cb)
    cb = setTimeout(()=>{
        cb = null
    }, wait);
}
```
