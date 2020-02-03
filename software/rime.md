# ubuntu 16.04 安装Rime

```
sudo apt-get install fcitx-rime
```

然后重启或者注销一次，在 配置fcitx里面添加 “中州韵” 就可以使用了。但是默认是没有五笔输入法的需要安装一下：

```
sudo apt-get install librime-data-wubi
cp /usr/share/rime-data/wubi86.schema.yaml ~/.config/fcitx/rime/
cp /usr/share/rime-data/wubi_pinyin.schema.yaml ~/.config/fcitx/rime/
```

编辑~/.config/fcitx/rime/default.yaml，在schema_list下方加入：

```
- schema: wubi_pinyin
- schema: wubi86
```

然后重新部署输入法，按F4就可以切换了。 五笔按z可以反查。