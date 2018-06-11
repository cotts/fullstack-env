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

const dbConnect = () => {
  logger.info('Trying to connect to database');
  nano.auth('dbadmin', 'C0uchd4t4', (err, body, headers) => {
    if (err) {
      logger.error(err);
      logger.warn('Reconnecting ...');
      setTimeout(() => dbConnect(), 3000);
    }
    if (headers && headers['set-cookie']) {
      cookies.dbadmin = headers['set-cookie'];
      logger.info('Database Connected');
    }
  });
};

dbConnect();

const db = nano.use('diapers');

module.exports = db;
