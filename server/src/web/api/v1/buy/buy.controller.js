const debug = require('../../../../config/debug')('web:api:v1:buy:controller');
const BuyService = require('./buy.service');

debug('Buy Controller');

const BuyController = {
  buy: BuyService.buyItem,
};

module.exports = BuyController;
