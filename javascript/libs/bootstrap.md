# grid

whitespace
```
<div class="form-group">
    <div class="col-xs-12" style="height:20px;"></div>
</div>
```
http://stackoverflow.com/questions/12273588/add-vertical-blank-space-using-twitter-bootstrap

# radio

```
<div class="radio-list">
  <label class="radio-inline">
    <input type="radio" name="gender" ng-model="gender" value="1" checked/>男
    </label>
  <label class="radio-inline">
    <input type="radio" name="gender" ng-model="gender" value="0" />女
    </label>
</div>
```

# table

The border styling is set on the td elements.

html:
```
<table class='table borderless'>
```

css:

```
.borderless td, .borderless th {
    border: none;
}

<table class="table table-bordered ">
```
