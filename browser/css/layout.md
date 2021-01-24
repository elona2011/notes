主要是使用BFC

# 三栏

```html
<div class="contain">
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
</div>
```

```css
.column:nth-of-type(1),
.column:nth-of-type(2) {
    float: left;
    width: 100px;
    height: 300px;
    background-color: green;
}

.column:nth-of-type(2) {
    float: right;
}

.column:nth-of-type(3) {
    overflow: hidden;  /*创建bfc*/
    height: 300px;
    background-color: red;
}
```