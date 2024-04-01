import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import * as dotenv from "dotenv";
dotenv.config();

const EntryPointModule = buildModule("AccountAbstractionModule", (m) => {
  // deploy the EntryPoint contract
  const EntryPoint = m.contract("EntryPoint", [], {
    from: process.env.DEPLOYER_ACCOUNT_ADDRESS,
  });

  // deploy the AccountFactory contract
  const AccountFactory = m.contract("AccountFactory", [], {
    from: process.env.DEPLOYER_ACCOUNT_ADDRESS,
  });

  // deploy the Paymaster contract
  const Paymaster = m.contract("Paymaster", [], {
    from: process.env.DEPLOYER_ACCOUNT_ADDRESS,
  });

  return { EntryPoint, AccountFactory };
});

export default EntryPointModule;
