require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20"
      },
      {
        version: "0.8.24"
      }
    ]
  },
  networks: {
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};