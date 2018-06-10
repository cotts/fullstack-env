const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const router = require('./web');

const bootstrap = async () => {
  app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(helmet())
    .use(router);

  return app;
};

module.exports = bootstrap;
