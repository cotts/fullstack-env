const debug = require('../../../../config/debug')('web:api:v1:timer:controller');
const TimerService = require('./timer.service');

debug('Timer Controller');

const TimerController = {
  getTimer: TimerService.list,
};

module.exports = TimerController;
