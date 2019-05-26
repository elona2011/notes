# webpack vs rollup vs browserify

webpack将module放在function中，并且根据app的需要逐步加载module。好处是容易实现代码分割、按需加载、热更新等功能

rollup则直接将module组合在一起，重新所有的变量名以避免冲突

browserify则只支持commonjs，则tree-shaking的效果不好，原因是es6的模块是静态，只能置于文件顶层，便于依赖树分析，所以tree-shaking必须结合es6才好用。

在app中用webpack，在lib中用rollup。如果有代码分割、较多的静态资源、commonjs模块，那么webpack更适合

https://stackoverflow.com/questions/43219030/what-is-flat-bundling-and-why-is-rollup-better-at-this-than-webpack

# rollup

rollup对于一些较大的commonjs项目的打包可能会有问题，只能直接引用

https://github.com/rollup/rollup-plugin-commonjs/issues/215

# rollup-plugin-commonjs and tree shaking

~~cjs包使用``import * as main ..``可以支持tree shaking。它将main里的方法直接放置于rollup的iife下面，使用独立变量引用，未使用的变量会被tree shaking。而``import main ..``则在iife下放置了main对象，main对象的属性不会做tree shaking~~