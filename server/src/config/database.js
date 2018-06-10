const Env = require('./env');
const AgentKeepAlive = require('agentkeepalive');
const logger = require('./logger');

const cookies = {};
const myAgent = new AgentKeepAlive({
  maxSockets: 50,
  maxKeepAliveRequests: 0,
  maxKeepAliveTime: 30000,
});

const nano = require('nano')({ url: Env.DATABASE, requestDefaults: { agent: myAgent } });

nano.auth('dbadmin', 'C0uchd4t4', (err, body, headers) => {
  if (err) {
    logger.error(err);
    return;
  }
  if (headers && headers['set-cookie']) {
    cookies.dbadmin = headers['set-cookie'];
    logger.info('Database Connected');
  }
});

const db = nano.use('diapers');

module.exports = db;
