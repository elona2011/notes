# apache ab

apache的bin目录下ab.exe可用于压力测试

```
ab -n 1000 -c 100 -w http://localhost/index.php >>c:\1.html
```

http://jingyan.baidu.com/article/e3c78d647a57833c4c85f502.html

# test node.js

```
var fs = require('fs')

fs.readFile('./public/frontImage.html', function(err, data) {
    console.log(data)
    if (err) throw err;
    require('http').createServer(function(req, response) {
        response.setHeader('content-type', 'text/html;charset=utf-8');
        response.end(data);
    }).listen(3009);
});
```

# Node.js slower than Apache

http://stackoverflow.com/questions/6634299/node-js-slower-than-apache
