# eval

eval方法中的this是语句执行位置处的this

(0,eval)是一个表达式，将eval赋值给表达式的结果
(0,eval)('this') 实际上等价于 var e = eval; e('this')

http://jsfiddle.net/mbest/DBhKT/1/