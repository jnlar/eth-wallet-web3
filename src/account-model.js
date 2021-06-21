const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WalletSchema = new Schema({
	ETH: {type: String, require: false, max: 64}
});

module.exports = mongoose.model('Wallet', WalletSchema);
