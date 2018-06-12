const Joi = require('joi');

const DiaperModel = Joi.object().keys({
  name: Joi.string(),
  description: Joi.string(),
  sizes: Joi.array().items(Joi.object().keys({
    size: Joi.string(),
    amount: Joi.number(),
  })),
  available: Joi.boolean(),
});

module.exports = DiaperModel;
