- yarn config set registry 'https://registry.npm.taobao.org'
- yarn config set sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
- yarn config set phantomjs_cdnurl "http://cnpmjs.org/downloads"
- yarn config set electron_mirror "https://npm.taobao.org/mirrors/electron/"
- yarn config set sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
- yarn config set profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"
- yarn config set chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
- yarn config set cache-folder $(pwd)/.yarn-cache

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

