const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");

  // Deploy the contract
  const crowdfunding = await Crowdfunding.deploy();

  // Wait for the deployment to be mined
  await crowdfunding.waitForDeployment();

  // Get the deployed contract address
  const address = await crowdfunding.getAddress();

  console.log("Crowdfunding contract deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});