* 盒模型
* BFC
* 居中
* 层叠上下文
* 选择器
* link vs @import

---

* 盒模型

content-box/border-box

* BFC

Block Formatting Context/块级格式化上下文

触发条件:：position/float/overflow/display

应用：阻止margin重叠/自适应两栏布局/清除浮动

* 居中

水平居中：text-align:center/margin:0 auto;/absolute+transform/flex+justify-content
垂直居中：line-height:height/absolute+transform/flex+align-items

* 层叠上下文

在同一个层叠上下文中比较

position+z-index会产生层叠上下文

层叠等级：background/border < z-index负 < block元素 < float元素 < inline元素 < z-index为正

* 选择器

!important>inline>#>class>tag>*>继承>默认 从右往左解析

* link vs @import

位置不同/加载时机不同/js支持不同/兼容性不同

https://www.jianshu.com/p/86d266f14f75