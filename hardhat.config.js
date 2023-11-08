require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks : {
    sepolia : {
      url : "https://sepolia.infura.io/v3/42b22014fc704adea44d3e65731592ba",
      accounts : ["ad3d7067be9b599fc70855c13f148d610612727335d48492d55f461c1ad8bafc"],
    }
  },
};
