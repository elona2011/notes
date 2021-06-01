~/.docker/config.json

```
{
    "proxies":
    {
        "default":
        {
            "httpProxy": "socks5h://172.17.0.1:39582",
            "httpsProxy": "socks5h://172.17.0.1:39582",
            "noProxy": ""
        }
    }
}
```

docker build --build-arg http_proxy=socks5h://172.17.0.1:39582