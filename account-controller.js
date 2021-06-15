const mongoose = require('mongoose');
const Wallet = mongoose.model('Wallet')
const ethController = require('./eth-controller');

exports.newWallet = async (req, res) => {
	try {
		let ethData;

		let newWallet = new Wallet(
			{
				ETH: req.body.ETH
			}
		);

		ethData = await ethController.getNewAddress();
		newWallet.ETH = ethData;

		newWallet.save((err, dbResponse) => {
			if (err) res.send(err);

			console.log(dbResponse);
			res.send(dbResponse);
		});
	} catch (err) {
		console.log(err)
	}
}
