# CORS(Cross Origin Resourse-Sharing)

验证简单跨域请求与非简单跨域请求合法性的区别就在于，验证非简单跨域请求前，浏览器向服务器发送一个OPTIONS方法的预检请求来加以判断，如果预检失败，实际请求将被丢弃。而简单跨域请求浏览器会正常发送请求，再对返回头加以判断以检查请求的合法性。在检查失败时，浏览器将会阻止脚本对返回内容的访问。

简单跨域请求并不会包含下面的HTTP头。而预检请求将会发送以下HTTP头

Origin: 普通的HTTP请求也会带有，在CORS中专门作为Origin信息供后端比对

Access-Control-Request-Method: 接下来请求的方法，例如PUT, DELETE等等

Access-Control-Request-Headers: 自定义的头部，所有用setRequestHeader方法设置的头部都将会以逗号隔开的形式包含在这个头中

其他头，例如实际请求的头部，Cookie头等都将不被包含在预检请求中。

```
Access-Control-Allow-Origin: "*" //表示该网站支持跨域请求
```

# JSONP

http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html

# image

get image data in javascript

https://stackoverflow.com/questions/934012/get-image-data-in-javascript/42916772#42916772