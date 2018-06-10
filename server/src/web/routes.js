const debug = require('../config/debug')('web:routes');
const router = require('express').Router();
const api = require('./api');

debug('Routes API Setup');

router.use('/api', api);

module.exports = router;
