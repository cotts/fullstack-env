const debug = require('../../../../config/debug')('web:api:v1:diaper:routes');
const router = require('express').Router();
const DiaperController = require('./diaper.controller');

debug('Diaper Routes');

router
  .get('/diapers', DiaperController.listDiapers)
  .get('/diapers/:id', DiaperController.getDiaper)
  .post('/diapers', DiaperController.insertDiaper)
  .put('/diapers', DiaperController.updateDiaper)
  .delete('/diapers', DiaperController.deleteDiaper);

module.exports = router;
