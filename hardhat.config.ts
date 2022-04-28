import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.7.3",
  typechain: {
    externalArtifacts: [ 'abis/*.json']
  },
  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/7cdb7f8034de4ca69a9caa13283b41a9"
    }
  }
};

export default config;
