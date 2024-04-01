import { Contract } from "ethers";
import { ethers } from "hardhat";
import * as ABIentryPoint from "./artifacts/contracts/EntryPoint.sol/EntryPoint.json";
function main() {
  const contract_entryPoint = new ethers.Contract(
    "0x70D997D4B68CB2cf8750a73ed08885831c12AcB3",
    ABIentryPoint.abi
  );
}
