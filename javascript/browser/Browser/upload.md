# input

使用input[type=file]上传文件时，每次选择文件上传后，需要删除该input元素并重新new一个，原因：

1.重复选择相同的文件不会触发change事件

2.消除多次点击弹窗出现缓慢的bug