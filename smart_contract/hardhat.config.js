// https://eth-sepolia.g.alchemy.com/v2/9NKZQuaJFy6XkhzglHez28QJuNXR3ifv

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/9NKZQuaJFy6XkhzglHez28QJuNXR3ifv',
      accounts:['414af936f3b88c0eafe7c4487105f0f2482f21ebb75dd15e8b7831ab1681ae6c']
    }
  }
};
