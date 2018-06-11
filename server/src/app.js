const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = require('./web');

const app = express();

const bootstrap = async () => {
  app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(helmet())
    .use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', ' GET, POST, PUT, DELETE');
      res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      );
      next();
    })
    .use(router);

  return app;
};

module.exports = bootstrap;
