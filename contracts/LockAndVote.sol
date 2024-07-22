// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./xFCTR.sol";

interface ILockContract {
    function increaseLockPositionAndBroadcast(uint256 amount) external;
}

interface IVoteContract {
    function vote(uint256 proposalId, bool support) external;
}

contract LockAndVote is Ownable {
    IERC20 public fctrToken;
    xFCTR public xfctrToken;
    ILockContract public lockContract;
    IVoteContract public voteContract;
    
    address public lockContractAddress = 0x43D75A4248e8fDBd63778Ea449349173697A7050;
    address public voteContractAddress = 0x66a85979b954077eFd5Db830063a56Fb86850398;

    constructor(address _fctrToken, address _xfctrToken, address initialOwner) Ownable(initialOwner) {
        fctrToken = IERC20(_fctrToken);
        xfctrToken = xFCTR(_xfctrToken);
        lockContract = ILockContract(lockContractAddress);
        voteContract = IVoteContract(voteContractAddress);
        transferOwnership(initialOwner); // Se desideri trasferire la proprietà immediatamente
    }

    function lockTokens(uint256 amount) external {
        require(fctrToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        // Lock the tokens for two years
        fctrToken.approve(lockContractAddress, amount);
        lockContract.increaseLockPositionAndBroadcast(amount);

        // Mint xFCTR tokens to the user
        xfctrToken.mint(msg.sender, amount);
    }

    function vote(uint256 proposalId, bool support) external onlyOwner {
        voteContract.vote(proposalId, support);
    }
}