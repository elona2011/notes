# 查看容器ip

docker network inspect bridge

# 查看网络

sudo docker network ls

# 将goods_web_1加入bridge网络

sudo docker network connect bridge goods_web_1