# center

table里td文字居中：
```
.table-text-center {
    vertical-align: middle; //垂直
    text-align: center; //水平
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
