const pkg = require('../../package.json');

global.APP_NAME = pkg.name;

module.exports = {
  debug: require('./debug'),
  logger: require('./logger'),
  Env: require('./env'),
  database: require('./database'),
};
