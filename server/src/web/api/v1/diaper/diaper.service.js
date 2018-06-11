const Joi = require('joi');
const DiaperModel = require('./diaper.model');
const debug = require('../../../../config/debug')('web:api:v1:diaper:service');
const { logger, database } = require('../../../../config');

debug('Diaper Service');

const DiaperService = {
  list: (req, res) =>
    database.list(
      { include_docs: true },
      (err, body) => (err ? res.send(err) : res.send(body.rows.map(index => index))),
    ),

  getById: (req, res) => {
    database.get(
      req.params.id,
      { include_docs: true },
      (err, body) => (err ? res.send(err) : res.send(body)),
    );
  },

  insert: (req, res) => {
    Joi.validate(req.body, DiaperModel, (err) => {
      if (err) {
        logger.warn(err);
        res.send(err);
      }
      database.insert(req.body, (err, body) => (err ? res.send(err) : res.send(body)));
    });
  },
  update: (req, res) => {
    database.insert(
      {
        _id: req.body._id,
        _rev: req.body._rev,
        name: req.body.name,
        description: req.body.description,
        sizes: req.body.sizes,
        available: req.body.available,
        purchased: req.body.purchased,
      },
      (err, body) => (err ? res.send(err) : res.send(body)),
    );
  },

  delete: (req, res) => {
    database.insert(
      {
        _id: req.body._id,
        _rev: req.body._rev,
        name: req.body.name,
        description: req.body.description,
        sizes: req.body.sizes,
        available: req.body.available,
        purchased: req.body.purchased,
      },
      (err, body) => (err ? res.send(err) : res.send(body)),
    );
  },
};

module.exports = DiaperService;
