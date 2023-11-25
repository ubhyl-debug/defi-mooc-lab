require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('hardhat-etherscan');
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const ALCHEMY_API_KEY = '8GRZ40nx_GtdjcthT7UB-xitSAbW7RPJ';
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    alchemy: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}',
      accounts: [],
    },
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/8GRZ40nx_GtdjcthT7UB-xitSAbW7RPJ", // Replace with your Alchemy API key or any other valid JSON-RPC URL
        blockNumber: 12489619, // Replace with the desired block number
      },
      chainId: 1,
      mining: {
        auto: true,
      },
      gasPrice: 0,
      initialBaseFeePerGas: 0,
      accounts: {
        mnemonic: "swap swap swap swap swap swap swap swap swap swap swap swap"
      },
    },
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 600000
  },
};
