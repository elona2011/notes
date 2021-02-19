* 看代码
* Event Loop
* setTimeout vs setImmediate

---

* 看代码

```js
// function async1(){
//     new Promise((res)=>{
//         console.log('async1 start')
//         async2()
//         res()
//     }).then(()=>{
//         console.log('async1 end')
//     })
// }
// function async2(){
//     console.log('async2')
// }
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeOut')
}, 0)
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')
```

script start/async1 start/async2/promise1/script end/async1 end/promise2/setTimeOut

```js
setTimeout(() => {
  console.log(1)
}, 0);

const promise = new Promise((resolve, reject) => {
  console.log(2)
  reject(3)
  console.log(4)
})

promise
.then(() => console.log(5))
.catch(() => console.log(6))
.then(() => console.log(7))
.catch(() => console.log(8))
.then(() => console.log(9))  
console.log(10) 
```

2/4/10/6/7/9/1

* Event Loop

MacroTask：script/setTimeout/IO/Event/setImmediate
MicroTask：Promise/process.nextTick

```js
console.log('start');

setTimeout(function() {
  console.log('timeout1');
}, 10);

new Promise(resolve => {
    console.log('promise1');
    resolve();
    setTimeout(() => console.log('timeout2'), 10);
}).then(function() {
    console.log('then1')
})

console.log('end');
//start promise1 end then1 timeout1 timeout2
```

* setTimeout vs setImmediate

timers/poll/check：timers执行setTimeout/check执行setImmediate/poll执行IO
setTimeout设置为0，其实际值也至少为1，多层嵌套下可能为4ms。为了优化性能及功耗
setTimeout和setImmediate在nodejs中插入的phase不一样，而setTimeout会有最小为1的值，所以一般情况setImmediate会比setTimeout快。但有时EventLoop一个循环超过1ms时，这时就会有setTimeout先于setImmediate执行。