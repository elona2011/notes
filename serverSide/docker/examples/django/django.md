1
docker build -t zrb .

2
docker run -v C:\Users\jie\Documents\git\docker\zrb:/code zrb django-admin startproject myproject . 

3
docker run -it -dp 8000:8000 -v C:\Users\jie\Documents\git\docker\zrb:/code zrb

# gunicorn

docker run -it -dp 9000:9000 -v /root/rwb-back:/code --name rwb rwb gunicorn -w 1 -b 0.0.0.0:9000 --timeout 300 rwb.wsgi