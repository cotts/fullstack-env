const debug = require('./debug')('config:logger');
const split = require('split');
const winston = require('winston');

debug('Logger Configuration');

winston.emitErrs = true;

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

module.exports = logger;

module.exports.stream = split().on('data', (message) => {
  logger.info(message);
});
