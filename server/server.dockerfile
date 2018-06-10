FROM node:9.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 5984
EXPOSE 3000
CMD ["npm", "start"]