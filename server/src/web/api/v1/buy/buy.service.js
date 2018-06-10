const debug = require('../../../../config/debug')('web:api:v1:buy:service');
const { logger, database } = require('../../../../config');

debug('Buy Service');

const BuyService = {
  buyItem: (req, res) => {
    const buyOrder = {
      size: req.buy.size,
      amout: req.buy.size,
    };
    database.insert(
      {
        _id: req.body.doc._id,
        _rev: req.body.doc._rev,
        name: req.body.doc.name,
        description: req.body.doc.description,
        sizes: [req.body.doc.sizes],
        available: req.body.doc.available,
        purchased: [req.body.doc.purchased].push(buyOrder),
      },
      (err, body) => (err ? res.send(err) : res.send(body)),
    );
  },
};

module.exports = BuyService;
