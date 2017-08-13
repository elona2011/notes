# child_process in Windows

node start 'npm start'

```js
const spawn = require('child_process').spawn

const viewExec = spawn('npm.cmd', ['start'],{
    cwd:'C:\\Users\\Jie\\Documents\\component-view'
})
viewExec.stdout.pipe(process.stdout)
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
