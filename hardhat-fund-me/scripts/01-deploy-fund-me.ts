import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
// async function deployFunc() {
//   console.log('hey!');
// }

// module.exports.default = deployFunc;
const deployFundMe: DeployFunction = async ({
  getNamedAccounts,
  deployments,
  network,
}: HardhatRuntimeEnvironment) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const { chainId } = network.config;

  // what happens when we want to change chains?
  // when going for localhost or hardhat networkwe want to use a mock
};
