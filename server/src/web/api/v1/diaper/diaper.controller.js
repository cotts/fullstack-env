const debug = require('../../../../config/debug')('web:api:v1:diaper:controller');
const DiaperService = require('./diaper.service');

debug('Diaper Controller');

const DiaperController = {
  listDiapers: DiaperService.list,
  insertDiaper: DiaperService.insert,
  getDiaper: DiaperService.getById,
  updateDiaper: DiaperService.update,
  deleteDiaper: DiaperService.delete,
};

module.exports = DiaperController;
