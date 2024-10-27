import { deploy, Deployer, DeployFunction, Network } from '@alephium/cli';
import { Settings } from '../alephium.config';

const deployFaucet: DeployFunction<Settings> = async (
    deploy: Deployer,
    network: Network<Settings>
): Promise<void> => {
    // TODO: Implement the deployment of the contract
}