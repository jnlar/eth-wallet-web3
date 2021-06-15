const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
require('dotenv').config();

const PORT = process.env.PORT

require('./account-model');

mongoose.connect('mongodb://localhost/wallet', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Connected to mongoDB');
})

const wallet = db.collection('wallets');

const account = require('./account-route')

app.use('/wallet', account);

app.listen(process.env.PORT, () => {
	console.log(`Listening on port: ${PORT}`);
	console.log(
		wallet != null ?
		`${wallet.name}: Database found` :
		`${wallet.name}: Database not found`
	);
})
