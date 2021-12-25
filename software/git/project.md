# 分支定义

master分支，与生产一致，严格控制权限
release分支，用于发布到测试环境，并且后续合并到master
每个开发人员建个人分支用于日常开发。

# 流程

建立个人分支或根据需求单独建分支

```
git checkout -b your-name-branch
```

开发自测完成后，从master分支上checkout出release分支，将你的分支合并到release分支，并发布到测试环境。

```bash
git branch -D release # 删除本地release分支
git push origin :release # 删除远程release分支
git checkout release # 从master分支上checkout出release分支
git merge your-name-branch
```

测试通过后，从release分支提交合并请求到master分支，项目经理审核后，由运维人员打tag并发布到生产。

# 生产回退

1 可根据tag直接回退

2 通过还原merge请求