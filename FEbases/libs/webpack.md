# webpack vs rollup

webpack将module放在function中，并且根据app的需要逐步加载module。好处是容易实现代码分割、按需加载、热更新等功能

rollup则直接将module组合在一起，重新所有的变量名以避免冲突

在app中用webpack，在lib中用rollup。如果有代码分割、较多的静态资源、commonjs模块，那么webpack更适合

https://stackoverflow.com/questions/43219030/what-is-flat-bundling-and-why-is-rollup-better-at-this-than-webpack

# webpack dev server

change dev server port

http://stackoverflow.com/questions/33272967/how-to-make-the-webpack-dev-server-run-on-port-80-and-on-0-0-0-0-to-make-it-publ