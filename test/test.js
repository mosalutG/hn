const { expect } = require("chai");

var hn;

beforeEach(async function () {
	accounts = await ethers.getSigners();

	const Hn = await ethers.getContractFactory("Hn");
	hn = await Hn.deploy();
	await hn.deployed();

	console.log("Hn deployed to:", hn.address);
});

describe("Token info", function () {
	it("name", async function () {
		expect(await hn.name()).to.equal("happy-nation token");
	});

	it("symbol", async function () {
		expect(await hn.symbol()).to.equal("HN");
	});

	it("total supply", async function () {
		expect(await hn.totalSupply()).to.equal(ethers.utils.parseEther(9e8 + ""));
	});

	it("decimals", async function () {
		expect(await hn.decimals()).to.equal(18);
	});
});
