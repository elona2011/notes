# 水平居中

## text-align:center;

外block内inline

## margin: 0, auto;

外block内block

# 垂直居中

## vertical-align: middle;

```html
<div>
<a>Some link</a>
<span>Some text</span>
</div>
```

```css
div {
    background:yellow;
    margin:10px;
    line-height:50px;
}
div > * {
    vertical-align: middle;
    line-height: normal;
}

a {
    background-color:#FFF;
    height:20px;
    display:inline-block;
    border:solid black 1px;
    padding:5px;
}

span {
    background:red;
}
```

http://stackoverflow.com/questions/9670469/css-vertical-alignment-of-inline-inline-block-elements

http://jsfiddle.net/TFPx8/1840/

# table里td文字居中

```css
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