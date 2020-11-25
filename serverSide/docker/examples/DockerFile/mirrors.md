FROM node:12-slim

RUN sed -i "s/http:\/\/deb.debian.org/http:\/\/mirrors.163.com/g" /etc/apt/sources.list
RUN sed -i "s/http:\/\/security.debian.org/http:\/\/mirrors.163.com/g" /etc/apt/sources.list