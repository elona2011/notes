# command line

```
tasklist 显示所有任务
taskkill /im nginx.exe /f
netsh interface set interface "本地连接" admin=disable
netsh interface set interface "无线网络连接" admin=enable
netsh wlan connect name=AndroidAP_xxxx
```

# keybinding

```
win+2 启动任务栏上第2个程序，如有多个则切换
win+leftArrow 当前窗口左半屏
win+upArrow 当前窗口全屏
win+shift+leftArrow(rightArrow) 当前窗口移动至扩展屏
```

# 将CapsLock修改为Ctrl键

因为CapsLock键很少使用，可以把该键修改为Ctrl键。

https://sharpkeys.codeplex.com/

# PATH

SET PATH=.\node_modules\.bin;%PATH%

```bat
@ECHO OFF
SETLOCAL

REM Speed up by checking for bin directory directly
IF NOT EXIST node_modules\.bin GOTO FINDBIN
SET BIN=.\node_modules\.bin
GOTO RUN

:FINDBIN
REM Find the current bin directory from npm, storing the result in 'BIN'
FOR /f "delims=" %%i IN ('npm bin') DO SET BIN=%%i

:RUN
SET PATH=%BIN%;%PATH%

REM Run the arguments passed into this script, including the script name
%*

ENDLOCAL
```

https://gist.github.com/joeyespo/a532500f5615bf3a4bacf1f410407115