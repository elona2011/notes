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
