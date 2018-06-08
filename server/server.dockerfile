FROM node:9.0

RUN mkdir -p /usr/src/app
COPY ./server /usr/src/app/
WORKDIR /usr/src/app

CMD ["npm", "start"]