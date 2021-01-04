# 环境变量

window:

```json
"scripts":{
  "dev": "set NODE_ENV=dev&& tsc && rollup -c", //process.env.NODE_ENV.length === 3 不含空格
  "prd": "set NODE_ENV=dev && tsc && rollup -c", //process.env.NODE_ENV.length === 4 包含空格
}
```

ubuntu:

```json
"scripts":{
  "dev": "NODE_ENV=dev npm run build", //不加set和&&
}
```

# npm link

http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears

# command

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

# Install NVM

nvm用于切换node的各种版本

https://github.com/creationix/nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```

安装完可能需要重启bash

# Install node

```
# nvm install 4.5.0
# nvm ls //查看所有版本
# nvm use 4.5.0 //使用该版本
```

*二进制安装*

http://www.cnblogs.com/dubaokun/p/3558848.html
