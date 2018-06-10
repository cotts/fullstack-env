const debug = require('../../config/debug')('web:api:routes');
const router = require('express').Router();
const v1 = require('./v1');

debug('API routes');

router.use('/v1', v1);

module.exports = router;
