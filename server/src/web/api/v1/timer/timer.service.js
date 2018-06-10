const debug = require('../../../../config/debug')('web:api:v1:timer:service');
const { database } = require('../../../../config');

debug('Timer Service');

const TimerService = {
  list: (req, res) =>
    database.list(
      { include_docs: true },
      (err, body) => (err ? res.send(err) : res.send(body.rows.map(index => index))),
    ),
};

module.exports = TimerService;
