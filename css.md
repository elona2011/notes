# center

table里td文字居中：
```
//放在td上
.table-text-center {
    vertical-align: middle!important; //垂直
    text-align: center!important; //水平
}

/* Internet Explorer 10 */
display:-ms-flexbox;
-ms-flex-pack:center;
-ms-flex-align:center;

/* Firefox */
display:-moz-box;
-moz-box-pack:center;
-moz-box-align:center;

/* Safari, Opera, and Chrome */
display:-webkit-box;
-webkit-box-pack:center;
-webkit-box-align:center;

/* W3C */
display:box;
box-pack:center;
box-align:center;
```

bootstrap grid上下居中

```
<div class="row">
    <div class="col-md-10">
        <div id="main5" style="height:400px"></div>
    </div>
    <div class="col-md-2" style="height: 400px;">
        <div style="position: absolute;width: 100%;left: 0;top: 50%;transform: translateY(-50%);">
            <table class="table table-bordered">
                <tr>
                    <td><a href="" style="pointer-events: none;cursor: default;">Jill</a></td>
                </tr>
                <tr>
                    <td><a href="" style="pointer-events: none;cursor: default;">Jill</a></td>
                </tr>
            </table>
        </div>
    </div>
</div>
```

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

rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。下面就是一个例子：

```
p {font-size:14px; font-size:.875rem;}
```
