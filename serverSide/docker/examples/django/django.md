1
docker build -t zrb .

2
docker run -v C:\Users\jie\Documents\git\docker\zrb:/code zrb django-admin startproject myproject . 

3
docker run -it -dp 8000:8000 -v C:\Users\jie\Documents\git\docker\zrb:/code zrb