# BFC

A block formatting context is an HTML box that satisfies at least one of the following conditions:

* The value of float is not none
* The value of position is neither static nor relative
* The value of display is table-cell, table-caption, inline-block, flex, or inline-flex
* The value of overflow is not visible.

https://www.sitepoint.com/understanding-block-formatting-contexts-in-css/

# input-group

```
.input-group .input-group-addon {
    border: 0;
    background-color: rgba(0, 0, 0, 0);
}
<div class="col-md-3">
   <div class="input-group">
   <input type="text" class="form-control" ng-model="orderDetail.paperNum" placeholder="">
   <span class="input-group-addon">
		元
	</span>
  </div>
</div>
```

# ellipsis

```
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.6em;
    max-height: 3.2em;
}
```
http://stackoverflow.com/questions/3922739/limit-text-length-to-n-lines-using-css

# em & rem

em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(CSS2.0). 任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。那么12px=0.75em,10px=0.625em。为了简化font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。

## em特点

1. em的值并不是固定的；

2. em会继承父级元素的字体大小。

## rem特点

rem是CSS3新增的一个相对单位（root em）。使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。只修改根元素就成比例地调整所有字体大小，避免字体大小逐层复合的连锁反应。

对于不支持它的浏览器，可多写一个绝对单位的声明：

```
p {font-size:14px; font-size:.875rem;}
```

# box-shadow可以绘制像素级图案

https://journal.helabs.com/pocket-guide-to-css-only-drawings-and-animations-781470436ecc#.ydkkx0dmy

# calc

```css
width: calc(100% - 80px);
```

https://developer.mozilla.org/en-US/docs/Web/CSS/calc