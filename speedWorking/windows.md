# keybinding

```
win+2 启动任务栏上第2个程序，如有多个则切换
win+leftArrow 当前窗口左半屏
win+upArrow 当前窗口全屏
win+shift+leftArrow(rightArrow) 当前窗口移动至扩展屏
```

# 将CapsLock修改为Ctrl键

因为CapsLock键很少使用，可以把该键修改为Ctrl键。win7下可以使用[Ctrl2Cap](https://technet.microsoft.com/en-us/sysinternals/bb897578.aspx?f=255&MSPPError=-2147217396)

win10:
https://sharpkeys.codeplex.com/

https://www.emacswiki.org/emacs/MovingTheCtrlKey#toc15

# win7多桌面

https://github.com/octalmage/mdesktop

http://getmdesktop.com/

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