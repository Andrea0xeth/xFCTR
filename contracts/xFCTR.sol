// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract xFCTR is ERC20, Ownable {
    constructor(address initialOwner) ERC20("xFCTR", "xFCTR") Ownable(initialOwner) {
        transferOwnership(initialOwner); // Se desideri trasferire la proprietà immediatamente
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }
}