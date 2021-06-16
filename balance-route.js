const express = require('express');
const route = express.Router();

const accountBalance = require('./account-balance');

route.get('/addr', accountBalance.getBalance);

module.exports = route;
