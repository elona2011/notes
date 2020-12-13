docker images
docker run ksshop:0.1

# volume

docker run --rm -v /root/ksshop/src:/code ksshop:0.1

windows:

docker run --rm -v C:\Users\jie\Documents\git\automation\dy\src:/code dyauto

```
docker-compose run web pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

docker run -it --rm -d -p 8080:80 --name web nginx