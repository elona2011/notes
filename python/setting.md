# pipenv

```
url = "https://pypi.tuna.tsinghua.edu.cn/simple/"
```

# virtualenv

```
virtualenv -p python3 envname
source envname/bin/activate
```

http://stackoverflow.com/questions/41151141/how-to-get-scrapy-to-use-python-3-when-both-python-versions-are-installed

# proxy

windows下执行py时，设置代理

```
set http_proxy=http://10.19.110.55:8080
set https_proxy=http://10.19.110.55:8080
python get-pip.py
```

# module version

```bash
$ pip freeze |grep sklearn 
```

或

```py
>>> import sklearn
>>> sklearn.__version__
```

pip方法不能正常显示时，可用py命令行

https://stackoverflow.com/questions/20180543/how-to-check-version-of-python-modules