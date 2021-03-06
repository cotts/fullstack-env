const debug = require('../../../../config/debug')('web:api:v1:buy:routes');
const router = require('express').Router();
const BuyController = require('./buy.controller');

debug('Buy Routes');

router.get('/buy', BuyController.list).post('/buy', BuyController.buy);

module.exports = router;
