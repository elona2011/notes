docker run -it --rm -d -p 8080:80 --name web nginx
sudo docker run -it --rm -dp 80:80 --name web -v /home/ubuntu/web:/data/web mynginx
sudo docker run -it --rm -dp 80:80 --name web -v /root/www:/www -v /root/nginx:/etc/nginx/conf.d nginx
docker run --name ykz -dp 80:80 --restart always -v /home/ubuntu/www:/usr/share/nginx/html:ro nginx