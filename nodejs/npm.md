# package.json

``npm run`` 运行在package.json的scripts字段里定义的命令

windows下设置环境变量

```json
"scripts":{
  "dev": "set NODE_ENV=dev&& tsc && rollup -c", //process.env.NODE_ENV.length === 3 不含空格
  "prd": "set NODE_ENV=dev && tsc && rollup -c", //process.env.NODE_ENV.length === 4 包含空格
}
```

# command

## registry

```
npm config set registry "https://registry.npm.taobao.org"
npm install express --registry=https://registry.npm.taobao.org
```

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

## publish

```
npm init
npm adduser
npm publish
```

## shrinkwrap

锁定依赖包的版本号，可防止小版本号(^引起)升级导致的bug

http://www.tuicool.com/articles/EBVNV37

# Peer dependencies

npm v2中peer dependencies用于将depth>0的依赖提升到depth=0，供项目直接引用

npm v3中peer dependencies只起到提示的作用，还需要手工进行安装

```
npm ls --depth=0
```

https://docs.npmjs.com/how-npm-works/npm3

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
