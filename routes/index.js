const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

router.post(`/nugu/ORDER_ONION`, nugu);
// router.post(`/nugu/ThrowYesAction`, nugu);


module.exports = router;
