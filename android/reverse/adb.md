http://adbshell.com/

```
adb forward tcp:23946 tcp:23946

./as -p31928
adb forward tcp:31928 tcp:31928
```

## objdump

android-ndk-r16b-windows-x86_64\android-ndk-r16b\toolchains\arm-linux-androideabi-4.9\prebuilt\windows-x86_64\arm-linux-androideabi\bin中有objdump和readelf工具

## proc 

```
cat /proc/net/tcp
```

# get apk

```
adb shell pm list packages
adb shell pm path com.xxx.xxx
adb pull /data/app/xxx.apk
```