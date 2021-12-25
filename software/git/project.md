master分支，与生产一致，严格控制权限
test分支，与测试环境一致
每个开发人员建个人分支用于日常开发。

```
git checkout -b xxx
```

开发自测完成后，发布到测试环境

```
git merge test

```