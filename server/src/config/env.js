const dotenv = require('dotenv').config({ path: './server.env' });

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

const NODE_ENV = process.env.NODE_ENV || 'development';

const PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

const DATABASE = process.env.DATABASE_URL || 'http://database:5984';

module.exports = {
  NODE_ENV,
  PORT,
  DATABASE,
};
