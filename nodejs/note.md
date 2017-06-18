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