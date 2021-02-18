* jsx
* usestate
* useEffect

---

* jsx

jsx会经过babel编译成React.createElement的表达式。createElement接收三个参数：type/props/children。形成一个树状结构，类似于DOM树。遍历这个树，React会生成真实的DOM

https://zhuanlan.zhihu.com/p/43145754

* usestate

为什么只能在函数最外层调用 Hook？为什么不要在循环、条件判断或者子函数中调用?

memoizedState 数组是按 hook定义的顺序来放置数据的，如果 hook 顺序变化，memoizedState 并不会感知到。

https://juejin.cn/post/6844903849082224648

* useEffect

更容易复用代码/代码量更少
状态不同步/响应式的useEffect

https://zhuanlan.zhihu.com/p/88593858