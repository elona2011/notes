# Atom

## Keybinding

```
alt-\ tree-view:toggle-focus
```

## Package

```
atom-beautify
atom-hexo
git-plus
highlight-selected
language-babel
minimap
minimap-highlight-selected
platformio-ide-terminal
project-manager
tortoise-svn
```

# Sublime

ctrl+r	跳转函数、类名、ID名
ctrl+d	快速选取当前单词
ctrl+shift+a	选择标签内部所有元素（html）
ctrl+f2,shift+f2		书签

To achieve the Ctrl+Tab and Ctrl+Shift+Tab behavior your can add the following lines to your sublime-keymap:

```js
{ "keys": ["ctrl+tab"], "command": "next_view" },
{ "keys": ["ctrl+shift+tab"], "command": "prev_view" }
```

在搜索中去掉文件夹
在where中增加,-*/node_modules/*，将不会搜索所有/node_modules/文件夹
D:\aijia\frontend\cms-front\,-*/node_modules/*

# Snippets

用于自定义TAB键的Auto Complete
新增方法：tools-new snippet...
例：function的自动完成

```
<snippet>
	<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
	<tabTrigger>fun</tabTrigger>
	<content><![CDATA[function($2) {
	$1
}]]></content>
	<!-- Optional: Set a scope to limit where the snippet will trigger -->
	<!-- <scope>source.python</scope> -->
</snippet>
```
http://docs.sublimetext.info/en/latest/extensibility/snippets.html

定义aaa.sublime-completions文件，建立多个auto complete
```
{
    "completions":
    [
            { "trigger": "fu", "contents": "function() {\n	$0\n}" },
            { "trigger": "re", "contents": "return (\n	$0\n)" },    
    ]
}
```
