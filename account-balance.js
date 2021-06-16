const express = require('express');
const Web3 = require('web3');
require('dotenv').config();

const web3 = new Web3(process.env.URL);

exports.getBalance = (req, res) => {
	const addr = req.query.hex;

	web3.eth.getBalance(addr, (err, bal) => {
		/* bal returns wei (smallest eth denominator) */
		if (err) {
			console.log(err);

			return send.status(404);
		}

		const convToEth = web3.utils.fromWei(bal, 'ether');

		let addrBal = {};
		addrBal.ether = convToEth;

		return res.status(200).send(addrBal);
	});
}
