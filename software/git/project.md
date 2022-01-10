# 分支定义

name-xxx需求分支，每个开发人员用姓名缩写+需求编号创建分支名，一个需求建一个分支，可发测试环境自测，不可提测
release-date分支，从master上checkout，用于提测，并且后续合并到master发生产
master分支，与生产一致，严格控制权限

# 流程

1 根据需求建name-xxx分支。此分支可发布到测试环境自测，但不可提测。

```
git checkout -b name-xxx
```

2 开发自测完成后，提交合并请求到release-date分支，项目经理审核后，合并到release分支。提测。

3 测试通过后，从release分支提交合并请求到master分支，项目经理审核后，由运维人员打tag并发布到生产。

4 重置release分支

git reset --hard master

# 生产回退

1 可根据tag直接回退

2 通过还原merge请求