require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    goerli:{
      url:process.env.hardhat_testnet_url,
      accounts:[process.env.secret_key]
    }
  }
};
