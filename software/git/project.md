master分支，与生产一致，严格控制权限
sit分支，与测试环境一致
每个开发人员建个人分支用于日常开发。

```
git checkout -b your-name-branch
```

开发自测完成后，从master分支上checkout出release分支，将你的分支合并到release分支，并发布到测试环境。

```
git checkout release
git merge your-name-branch
```

测试通过后，从release分支提交合并请求到master分支，项目经理审核后，由运维人员发布到生产。