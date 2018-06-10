const Joi = require('joi');

const DiaperModel = Joi.object().keys({
  name: Joi.string(),
  description: Joi.string(),
  sizes: Joi.array().items(Joi.object().keys({
    size: Joi.string(),
    amount: Joi.number(),
  })),
  available: Joi.boolean(),
  purchased: Joi.array().items(Joi.object({
    quantity: Joi.string(),
    date: Joi.date(),
  })),
});

module.exports = DiaperModel;
