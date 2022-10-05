/* eslint-disable import/no-extraneous-dependencies */
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-deploy';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
dotenv.config();

const {
  GOERLI_RPC_URL = 'https://eth-goerli',
  PRIVATE_KEY = '0xkey',
  ETHERSCAN_API_KEY = 'key',
  COINMARKETCAP = 'key',
} = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-report.txt',
    noColors: true,
    currency: 'USD',
    coinmarketcap: COINMARKETCAP,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
