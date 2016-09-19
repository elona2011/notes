# npm

``npm run`` 运行在package.json的scripts字段里定义的命令

# server

启动node server
```
npm install http-server --save-dev
npm start
```

package.json如下：
```
"devDependencies": {
   "http-server": "^0.9.0",
},
"scripts": {
   "start": "http-server -a localhost -p 8000 .",
},
```

# debug

```
npm install -g node-inspector
node-debug app.js
```
