# pm2的日志

JSON形势下可配置的属性如下： - pid_file，配置pid文件的路径 - error_file，配置error日志文件的路径 - out_file，配置常规日志文件的路径 - log_date_format，配置log日志日期的格式形式

pm2提供了一个官方的插件，用来进行文件切分：logrotate

# log4js

pm2的日志功能只是将程序中打印到console的日志定位到文件中，对log本身来说，并没有增强。log4js是更加强大的log工具，提供了日志分级、日志分类、日志落盘等额外功能。

关于log4js本身的功能和特性，这里推荐一篇非常优秀的文章：Node.js之log4js完全讲解

由于log4js已经提供了完备的日志功能，所以在log4js和pm2共同使用的情况下，可以考虑不再使用pm2的日志配置。仅需要保留pid_file的配置，用来获取pm2启动项目的pid进程号

## log4js在thinks中的使用

在config目录下新建log.js文件，保存log4js的配置：

```js
export default {
 "appenders": [{
     "type": "console"
 }, {
     "type": "dateFile",
     "filename": think.ROOT_PATH + "/logs/log-",
     "pattern": "yyyy-MM-dd.log",
     "maxLogSize": 1024,
     "alwaysIncludePattern": true,
     "backups": 4
 }, {
     "type": "logLevelFilter",
     "level": "ERROR",
     "appender": {
         "type": "dateFile",
         "filename": think.ROOT_PATH + "/logs/error-",
         "pattern": "yyyy-MM-dd.log",
         "maxLogSize": 1024,
         "alwaysIncludePattern": true
     }
 }],
 "replaceConsole": true
}
```

在bootstrap目录下新建log.js文件，在服务启动时，配置log4js： 

```js 
import log4js from 'log4js'; import cluster from 'cluster';

let config = think.config('log');

if('development'==think.env || !cluster.isMaster) { log4js.configure(config); log4js.setGlobalLogLevel(log4js.levels.trace); global.logger = log4js.getLogger(); } 
```

注意事项：

1：上文配置了日志按照日期进行分割。并将ERROR级别的错误单独提取到error开头的日志文件中。可参考Node.js之log4js完全讲解的内容进行灵活配置。

2：由于pm2启动了cluster，所以实际的master进程是pm2，程序跑的都是worker进程。所以在配置中需要加判断：开发模式或非master进程才进行log4js配置。log4js文档中提供的多进程模式和集群模式都不太适合当前情况。当前简单测试中，未发现日志在多进程下会出问题，如果后续发现问题，再进一步考虑解决方案。

3：为了简化开发，在global下增加了logger变量。但是如果需要对日志进行更加精细的分类等操作。还需要额外进行配置。不推荐使用global下的logger。
