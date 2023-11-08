const hre = require("hardhat");

async function main() {

  const LockFactory = await hre.ethers.getContractFactory("Lock");
  const LockContract = await LockFactory.deploy();

  await LockContract.waitForDeployment();

  console.log("Contract deployed to:", LockContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
