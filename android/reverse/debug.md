# Debug

1 在 AndroidManifest.xml 文件中添加`android:debuggable="true"`

2 baksmali

```
smali d xxx.apk -o src
```

3 edit smali code

4 pack

```
apktool b xxx -o xxx.apk
jarsign app.apk
jarsigner -verbose -keystore test.keystore -signedjar app-signed.apk app.apk key0

zipalign -v 4 in.apk out.apk

```

5

```
adb shell "ps |grep xxx"
adb forward tcp:8700 jdwp:10140
adb logcat -s xxx
```

TroubleShooting

```
netstat -ano | findstr "8700"
```

# code

## debug

```
invoke-static {}, Landroid/os/Debug;->waitForDebugger()V
```

## log

```smali
.class public Lme/test/LogA;
.super Ljava/lang/Object;
.source "LogA.java"


# direct methods
.method public constructor <init>()V
    .registers 1

    .line 5
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static log(Ljava/lang/String;Ljava/lang/String;)V
    .registers 2

    .line 7
    invoke-static {p0, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method
```

```smali
const-string v0, "yjdebug"

const-string v1, "666"

invoke-static {v0, v1}, Lme/test/LogA;->log(Ljava/lang/String;Ljava/lang/String;)V
```