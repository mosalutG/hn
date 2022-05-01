const hre = require("hardhat");

async function main() {
	accounts = await ethers.getSigners();

	const Hn = await ethers.getContractFactory("Hn");
	hn = await Hn.deploy();
	await hn.deployed();

	console.log("Hn deployed to:", hn.address);
	console.log(await hn.name());
	console.log(await hn.symbol());
	console.log(await hn.totalSupply());
	console.log(await hn.decimals());
}

main().then(() => process.exit(0)).catch((error) => {
	console.error(error);
	process.exit(1);
});
