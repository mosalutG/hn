//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Hn is ERC20, Ownable {
	constructor() ERC20("happy-nation token", "HN") {
		_mint(msg.sender, 9 * 1e26);
	}
}
