const debug = require('../../../../config/debug')('web:api:v1:buy:service');
const { database } = require('../../../../config');

debug('Buy Service');

const db = database.dbBuy;

const BuyService = {
  buyItem: (req, res) => db.insert(req.body, (err, body) => (err ? res.send(err) : res.send(body))),

  listBuys: (req, res) =>
    db.list(
      { include_docs: true },
      (err, body) => (err ? res.send(err) : res.send(body.rows.map(index => index.doc))),
    ),
};

module.exports = BuyService;
