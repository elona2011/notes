FROM node:12-slim

RUN npm i axios --registry=https://registry.npm.taobao.org

VOLUME /code

CMD ["node","/code/test.js"]