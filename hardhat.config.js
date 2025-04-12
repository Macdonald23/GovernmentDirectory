require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/21924ea242ed4986a209ee31db92df1f",
      accounts: [`0x${process.env.b39f5A8446ea0817145d9d782aCB1C8600dEAf3}`],
    },
  },
};
