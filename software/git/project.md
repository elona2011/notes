master分支，与生产一致，严格控制权限
test分支，与测试环境一致
每个开发人员建个人分支用于日常开发。

```
git checkout -b your-name-branch
```

开发自测完成后，将你的分支合并到test分支，并发布到测试环境

```
git checkout test
git merge your-name-branch
```