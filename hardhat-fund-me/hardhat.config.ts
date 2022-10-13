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
  // solidity: '0.8.17',
  solidity: {
    compilers: [{ version: '0.8.17' }, { version: '0.6.6' }],
  },
  defaultNetwork: 'hardhat',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [
        PRIVATE_KEY ||
          'cb91c849c9291d9cced11d4fecf7980432ff4926d4b75d0f6a3ea7af779b3640',
      ],
      chainId: 5,
    },
  },
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
