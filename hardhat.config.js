require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: {
		version: "0.8.9",
		settings: {
			optimizer: {
				enabled: true,
				runs: 1000
			}
		}
	},
	defaultNetwork: "localhost",
	networks: {
		localhost: {
			url: "http://0.0.0.0:8545",
		},
		testnet: {
			url: "https://data-seed-prebsc-1-s1.binance.org:8545",
			chainId: 97,
			gasPrice: 20000000000,
			accounts: ["404cc778fdb355c3c2f8136a28471c809a33155d3781f37bcb6eeb50be3e3c44"]
		}
	}
};
