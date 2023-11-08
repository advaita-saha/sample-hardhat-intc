const { ethers } = require("hardhat");

async function main() {
    const LockFactory = await ethers.getContractFactory("Lock");
    const contract = LockFactory.attach("0xe46a31B58CC53914F2492f9736962d8D6e74d64C");

    const res0 = await contract.res();
    let tx = await contract.add(2, 3);
    await tx.wait();
    const res1 = await contract.res();

    console.log(res0, res1)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });