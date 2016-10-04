# XMLHttpRequest

```
var xhr = new XMLHttpRequest();
xhr.open('get', 'http://yanjie.me/');
xhr.onload = function() { /* do something */ }
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Content-Length', JSON.stringify(data).length);
xhr.send(JSON.stringify(data));
xhr.status
xhr.responseText
```

https的页面请求http的ajax请求会报错

# 代码

```
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
