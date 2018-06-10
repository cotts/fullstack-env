const debug = require('../../../config/debug')('web:api:v1:routes');
const router = require('express').Router();
const diaper = require('./diaper');
const timer = require('./timer');
const buy = require('./buy');

debug('v1 routes');

router
  .use(diaper)
  .use(timer)
  .use(buy);

module.exports = router;
