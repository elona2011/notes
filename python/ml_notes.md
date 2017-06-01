# Practical Machine Learning Tutorial with Python 

https://www.youtube.com/watch?v=lN5jesocJjk

## p.2

从quandl.com获取数据

```py
quandl.ApiConfig.api_key = 'T8idaq_4ufaesdj3KBz6qz'
data = quandl.get_table('WIKI/PRICES')
print(type(data)) #返回是pandas的DataFrame实例
```

数据整理

```py
df = df[['open','high','low','close']]
```

## p.3

```py
df.fillna(-99999, inplace=True)
df.dropna(inplace=True)
```