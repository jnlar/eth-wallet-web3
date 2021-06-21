const express = require('express');
const router = express.Router();

const accountController = require('./account-controller');

router.post('/new-wallet', accountController.newWallet);

module.exports = router;
