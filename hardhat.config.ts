import { HardhatUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: process.env.DEPLOYER_ACCOUNT_PRIVATE_KEY,
          balance: process.env.DEPLOYER_ACCOUNT_BALANCE,
        },
      ],
    },
  },
} as HardhatUserConfig;
