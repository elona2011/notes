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

# child_process in Windows

windows下npm相关的命令都要加上``.cmd``

https://github.com/nodejs/node/issues/8077

node start 'npm start'

```js
const spawn = require('child_process').spawn

const viewExec = spawn('npm.cmd', ['start'],{
    cwd:'C:\\Users\\Jie\\Documents\\component-view'
})
viewExec.stdout.pipe(process.stdout)
```

```js
viewExec.stdout.on('data', (d: string) => {
    //输出无空行
    process.stdout.write(`pcss: ${d}`)

    //输出有空行
    // console.log(`pcss: ${d}`)
})
```

node start typescript commandline

```js
spawn('tsc.cmd')
```

terminate process

```js
const execSync = require('child_process').execSync

execSync(`taskkill /F /T /PID ${viewExec.pid}`)
```

# path

There are at least three ways to refer to the current directory in Node:

1.__dirname is the most common method. It gives you the path of the currently running file.

2.process.cwd() is useful in special cases. It returns the directory from which you ran Node.

3.Dot Notation (./ and ../) is useful for relative paths similar to the command line.
