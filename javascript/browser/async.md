# Tasks and microtasks

https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

# XMLHttpRequest

```js
var fd = new FormData();
fd.append('file', value);
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function (e) {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
    }
})
xhr.addEventListener('error', function (e) {
    document.getElementById('uploaderror').textContent = '上传失败'
})
xhr.open('POST', '/customservice/upload')
xhr.send(fd)
```

# 代码

```js
function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }

    xhr.open("GET", options.url, true);
    xhr.send(null);
}
```

# upload

```js
var value = e.target.files[0]
var fd = new FormData();
fd.append('file', value);

//XMLHttpRequest
var xhr = new XMLHttpRequest()
xhr.open('POST', '/home/index/upload')
xhr.onload = function (e) {
    e
}
xhr.send(fd)

//jquery
$.ajax({
    url: '/customservice/upload',
    type: 'POST',
    data: fd,
    contentType: false,
    processData: false,
    success: function (e) {
        e
    }
});
```

# Async/Await

http://cnodejs.org/topic/5640b80d3a6aa72c5e0030b6

遍历数组形式的异步操作

```js
await Promise.all(arr.map(async function (e,i) {
    await operation...
}))
```
