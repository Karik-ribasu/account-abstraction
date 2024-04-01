import { Contract } from "ethers";
import { ethers } from "hardhat";
import * as AccountFactory from "./artifacts/contracts/AccountFactory.sol/AccountFactory.json";
import * as EntryPoint from "./artifacts/contracts/EntryPoint.sol/EntryPoint.json";

async function main() {
  // get signer
  const signer = await ethers.provider.getSigner(
    process.env.DEPLOYER_ACCOUNT_ADDRESS
  );

  // load contracts
  const contractAccountFactory = await new Contract(
    process.env.CONTRACT_ACCOUNT_FACTORY as string,
    AccountFactory.abi,
    signer
  );

  const contractEntryPoint = await new Contract(
    process.env.CONTRACT_ENTRY_POINT as string,
    EntryPoint.abi,
    signer
  );

  // userOperation
  const calldata = await contractAccountFactory.interface.encodeFunctionData(
    "createAccount",
    ["0x8F31Adcc52bAE625516B7c82c6356b35740FC5de"] // sample address. This should be the address of the account owner
  );

  const initCode = `0x${process.env.CONTRACT_ACCOUNT_FACTORY?.slice(
    2
  )}${calldata.slice(2)}`;

  const senderAddress = await contractEntryPoint.getSenderAddress(initCode);
}

main();
