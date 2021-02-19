* nextTick
* 虚拟dom
* diff算法
* Proxy vs Object.defineProperty
* vue vs react

---

* nextTick

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

```js
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick()
  .then(function () {
    // DOM 更新了
})
```

* 虚拟dom

vue模板编译成由h函数组成的结点描述/h函数生成Vnode/生成真实DOM结点/插入页面
h函数等于React中的createElement函数

* diff算法

diff就是调用patch函数，比较新旧节点，一边比较一边给真实的DOM打补丁
数据改变->Dep.notify通知订阅者->调用patch打补丁->调用sameVnode判断是否值得比较->值得比较就调用patchVnode，否则用Vnode替换oldVnode

patchVnode: 同一对象return/文本节点不同，替换文本/子节点不同，添加、删除或比较。如果有key，可以高效地比较

https://www.cnblogs.com/wind-lanyan/p/9061684.html

* Proxy vs Object.defineProperty

defineProperty：对属性的劫持。无法监听新增属性和删除属性/深层对象的劫持需要深度遍历(性能不好)/劫持数组时需要重写Array.prototype原生方法
defineProperty可以支持响应式数组，但由于数组常用于集合、队列，数据较多，直接以属性的方式劫持，性能会差。因为数组会经常遍历，每次都会调劫持方法。

https://segmentfault.com/q/1010000015780995

Proxy：对对象的支持。可以监听对象新增删除属性/只在get时才对对象的下一层进行劫持(优化了性能)/能正确监听原生数组方法/兼容性有问题

* vue vs react

数据流的不同/HoC 和 mixins/模板渲染方式

https://juejin.cn/post/6844903668446134286