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