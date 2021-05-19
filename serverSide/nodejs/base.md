# NODE_ENV

```json
"scripts": {
    "start": "npm run dev",
    "dev": "set NODE_ENV=dev&& node script/build.js", // for windows
    "de": "NODE_ENV=dev node script/build.js", // for Linux
},
```

# path

process.cwd() returns the directory from which you invoked the node command.

__dirname returns the directory name of the directory containing the JavaScript source code file.

# require

user code is wrapped as follow:

```js
(function(exports,require,module,__filename,__dirname){
    // your code
})
```

# path

There are at least three ways to refer to the current directory in Node:

1.__dirname is the most common method. It gives you the path of the currently running file.

2.process.cwd() is useful in special cases. It returns the directory from which you ran Node.

3.Dot Notation (./ and ../) is useful for relative paths similar to the command line.
