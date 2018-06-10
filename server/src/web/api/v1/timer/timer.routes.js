const debug = require('../../../../config/debug')('web:api:v1:timer:routes');
const router = require('express').Router();
const TimerController = require('./timer.controller');

debug('Timer Routes');

router.get('/timer', TimerController.getTimer);

module.exports = router;
