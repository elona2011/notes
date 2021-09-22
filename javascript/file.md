# path

process.cwd() returns the directory from which you invoked the node command.

__dirname returns the directory name of the directory containing the JavaScript source code file.

# files

```js
const path = require('path');
const fs = require('fs');

fs.readdir(path.resolve(process.cwd(), 'xxx'), function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {
        console.log(file); 
    });
});
```