require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
      // chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/Q4sEGIat3PfGD8nHqoyfj_TlelWlu-Xf",
      accounts: [`0x${"d966b6ec7d8c9a75037b10f3a947dd77f1c552a5f35c46b7a761abc83d66fd33"}`],
    },
  },
};
