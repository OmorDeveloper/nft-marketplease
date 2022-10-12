require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Q4sEGIat3PfGD8nHqoyfj_TlelWlu-Xf",
      accounts: [`0x${"edb8f127506ee29da4f071919a69fd8eadf961dcf76d01644b86bae3ef29189b"}`],
    },
  },
};
