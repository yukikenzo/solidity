require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv")
dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
const accounts = [process.env.PRIVATE_KEY];
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts,
    },
  },
};

