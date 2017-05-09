# update
11
222
33

```
git clone https://github.com/vim/vim.git
cd vim/src
make
sudo make install
```

# reload .vimrc

```
:so %
```

# help

```
vimtutor
:help =
```

# 重复之前操作

```
.
```

# 光标移动

```
w //向后移动一个word
e
b //向前移动一个word
{ //光标移动到前一个空行
} //光标移动到后一个空行
gg //移动到第1行
23gg //移动到第23行
G //光标移动到最后1行
35G //光标移动到第35行
% //光标移动到配对的另一个括号
```

# 翻页

```
ctrl+d 向后翻半页
ctrl+u 向前翻半页
```

# 复制 粘贴 剪切 删除

复制是y，粘贴是p，剪切是d

复制和剪切的命令后面都可以接一个移动命令，表示将光标移动区间内的文本复制过来

```
yy复制游标所在行整行。或大写一个Y。
2yy或y2y复制两行。
y^复制至行首，或y0。不含游标所在处字元。
y$复制至行尾。含游标所在处字元。
yw复制一个word。
y2w复制两个字（单词）。
yG复制至档尾。
y1G复制至档首。
d$	删除游标所在处，到该行的最后一个字符
D	删除游标所在处，到该行的最后一个字符
p //在当前行粘贴
```

```
"+p 在当前光标前插入系统剪切板内容 

gg
=G 格式化当前文件
```

https://askubuntu.com/questions/70334/shortcuts-in-gvim

# 显示

```
ctrl-g 显示行号
```

# 文件

```
:browse old //打开文件历史
:Tex //打开新tab页
:Vex //open explorer in a new vertical window
:Sex //open explorer in a new horizontal window
```

# Tab页

```
:tabnew //打开新tab页
gt,gT //切换tab页
```

# gVim设置

设置indent

```
set tabstop=4
set softtabstop=0
set noexpandtab
set shiftwidth=4
set shiftround
set autoindent
set copyindent
```

NERDTree

```
cd ~/documents/svn
map <F2> :NERDTreeToggle<CR>
```

## windows下乱码

删除VIM下lang目录，修改_vimrc文件，添加：

```
set encoding=utf-8
```

## 启动时最大化

在_vimrc文件加入下面的代码:

```
if has("win32")
 au GUIEnter * simalt ~x
endif
```

## 设置swap,~,un~文件位置

原来的backup,undo,swap文件都放在当前文件位置，让文件显示杂乱。可以修改存放位置：在_vimrc文件中加入

```
set backupdir=~/vimtmp//
set directory=~/vimtmp//
set undodir=~/vimtmp//
```

# colorscheme

```
colorscheme slate
```

# Plugins

## pathogen

https://github.com/tpope/vim-pathogen

## Vundle

win7下安装注意：

在_vimrc中注意将%HOME%和%USERFROFILE%修改为$VIM，否则报错找不到Vundle

```
set rtp+=$VIM/vimfiles/bundle/Vundle.vim/
call vundle#begin('$VIM/vimfiles/bundle/')
```

## NERDTree

```
ctrl+w w    move between open windows
t   open new tab
T   open new tab while staying in current tab
gt  cycle though all tabs
gT  cycle though all tabs (moves to the left)
```

## fugitive.vim

# windows

pathogen安装的plugins要放置在``\vimfiles\bundle``目录下

http://stackoverflow.com/questions/11571723/installing-pathogen-vim-plugin-on-windows