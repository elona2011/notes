# 事件代理

不要将事件listener添加在当前node上，而添加在父node上。好处是：当前node即使频繁新增或删除，都不需要重新判定事件。

```js
document.getElementById("parentDiv").addEventListener("click",function(e) {
  if (e.target && e.target.matches("a.classA")) {
    console.log("Parent element clicked!");
	}
});
```

https://davidwalsh.name/event-delegate