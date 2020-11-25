windows上连接本地proxy不能写成127.0.0.1，会连不上，要写成host.docker.internal。端口号在pac文件里有

config.json

```json
{
    "HttpHeaders": {
        "User-Agent": "Docker-Client/19.03.12 (windows)"
    },
    "auths": {
        "https://index.docker.io/v1/": {}
    },
    "credStore": "desktop",
    "credsStore": "desktop",
    "stackOrchestrator": "swarm",
    "proxies": {
        "default": {
            "httpProxy": "http://host.docker.internal:12639",
            "httpsProxy": "http://host.docker.internal:12639",
            "noProxy": "*.test.example.com,.example2.com"
        }
    }
}
```

https://docs.docker.com/docker-for-windows/networking/

