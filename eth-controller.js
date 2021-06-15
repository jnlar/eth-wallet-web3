const Web3 = require('web3');
const Accounts = require('web3-eth-accounts');
const accounts = new Accounts('ws://localhost:3000');

const web3 = new Web3(Web3.givenProvider || "https://rinkeby.infura.io/");

exports.getNewAddress = async (req, res) => {
	console.log("Getting ETH address...");

	let ethData = {};

	try {
		ethData = await web3.eth.accounts.create();
		console.table(ethData);
		ethData.result = ethData.address;

		return ethData.result;
	} catch (err) {
		ethData.result = err.message
		console.error(`Request error in getNewAddress: ${ethData.result}`);

		return ethData.result;
	}

	console.log(ethData.result);

	return ethData.result;
}
