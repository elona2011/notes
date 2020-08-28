```PowerShell
docker build -t getting-started .
docker run -dp 3000:3000 getting-started
docker ps

docker tag getting-started YOUR-USER-NAME/getting-started
docker push YOUR-USER-NAME/getting-started
docker run -dp 3000:3000 YOUR-USER-NAME/getting-started

docker volume create todo-db
docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started

docker run -dp 3000:3000 `
    -w /app -v "$(pwd):/app" `
    node:12-alpine `
    sh -c "yarn install && yarn run dev"

docker network create todo-app
docker run -d `
    --network todo-app --network-alias mysql `
    -v todo-mysql-data:/var/lib/mysql `
    -e MYSQL_ROOT_PASSWORD=secret `
    -e MYSQL_DATABASE=todos `
    mysql:5.7

docker-compose run web python manage.py migrate
```

https://docs.docker.com/compose/django/

# 镜像 

/etc/docker/daemon.json

```
{
  "registry-mirrors": ["https://evzqes5m.mirror.aliyuncs.com"] 
}
```

https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors