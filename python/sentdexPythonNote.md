# Practical Machine Learning Tutorial with Python 

## p.1

https://www.youtube.com/watch?v=OGxgnH8y2NM&index=1&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v

## p.2

https://www.youtube.com/watch?v=JcI5Vnw0b2c&index=2&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v

首先安装依赖包，ubuntu建议先安装virtualenv

```
pip install virtualenv
virtualenv -p python3 envname
source envname/bin/activate

pip install sklearn
pip install quandl
pip install pandas
```

windows下建议直接安装anaconda，因为scipy在windows下难以直接安装。anaconda包括了所有我们需要的科学计算包

从quandl.com获取数据

```py
import pandas as pd
import quandl

quandl.ApiConfig.api_key = 'xxxxx_xxxxxxxxxxx' #需要在quandl.com上注册账号，免费
data = quandl.get_table('WIKI/PRICES')
print(type(data)) #返回是pandas的DataFrame实例
```

select数据

```py
df = df[['open','high','low','close']]
```

https://stackoverflow.com/questions/11285613/selecting-columns

DataFrame的简单教程

http://pandas.pydata.org/pandas-docs/stable/10min.html

## p.3

```py
df.fillna(-99999, inplace=True)
df['label']= df[forecast_col].shift(-forecast_out)
df.dropna(inplace=True) 
```

inplace=True将直接改变df，并返回None

## p.4

```py
X = np.array(df.drop(['label'],axis=1))
y = np.array(df['label'])
print(X)
X = preprocessing.scale(X)
print(X)
print(X.mean(axis=0))
print(X.std(axis=0))
```

axis指数组的某一维度，对于一个m*n的二维数组，所有元素为a[0,0]...a[m,n]。axis=0指第一个下标，即row；axis=1指第二个下标，即column
X.mean计算平均数，X.std计算标准差standard deviation，验证preprocessing.scale的计算结果

```py
X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y, test_size=0.4)
clf = LinearRegression(n_jobs=-1)
clf.fit(X_train, y_train)
accuracy = clf.score(X_test, y_test)
print(accuracy)
```

clf.score

n_jobs=-1可以使用所有的cpu加速计算，深度学习由于计算量很大，经常会用到

model_selection替换了cross_validation,原方法将废弃

