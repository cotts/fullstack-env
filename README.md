# Full Stack env

## A Webapp using Node, CouchDB, Nginx and Vue

`Tecnologies used:`
 - Docker
 - Node.JS
 - CouchDB
 - NGINX
 - Vue.JS

## Requirements
 - Node.JS
 - Docker

## Instructions

> ### 1- Clone this project
```sh
git clone git@github.com:cotts/fullstack-env.git
```

> ### 2- Install Dependencies
```sh
npm install
```

> ### 3- Run Docker Compose
```sh
docker-compose up
```
** If you want to run in silent mode
```sh
docker-compose up -d
``` 

> ### 4- To view logs and infos
```sh
docker logs -f <container-name>
```
** Container Names
* server - Node.JS API
* database - CouchDB
* nginx - webview


### To access the web view
[http://localhost](http://localhost)


>## Observations

* Estimate to zeroed is not implemented
* The webview is a SPA.
* DB user and password are stored in /database/confg/local.ini 
* Node.JS is using a structure to be scalable, splited by feature
* Missing documentation

