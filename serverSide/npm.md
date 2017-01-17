# command

## registry

```
npm install express --registry=https://registry.npm.taobao.org
```

## run

``npm run`` 运行在package.json的scripts字段里定义的命令

## config

config设置在.npmrc中，可直接修改该文件

```
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

.npmrc文件

```
proxy=http://10.19.110.55:8080/
https-proxy=http://10.19.110.55:8080/
registry=https://registry.npm.taobao.org
```

## shrinkwrap

锁定依赖包的版本号，可防止小版本号(^引起)升级导致的bug

http://www.tuicool.com/articles/EBVNV37

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
