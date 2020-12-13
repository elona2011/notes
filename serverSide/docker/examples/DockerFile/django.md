docker build -t zrb .
docker run -v C:\Users\jie\Documents\git\docker\zrb:/code zrb django-admin startproject myproject . 
docker run -it -dp 8000:8000 -v C:\Users\jie\Documents\git\docker\zrb:/code zrb