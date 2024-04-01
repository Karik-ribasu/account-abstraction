// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
import "./interfaces/IAccount.sol";

contract Account is IAccount {
    address public owner;
    uint256 public count;

    constructor(address _owner) {
        owner = _owner;
    }

    function validateUserOp(
        UserOperation calldata,
        bytes32,
        uint256
    ) external pure returns (uint256 validationData) {
        // typically here we'd check this signature
        return 0;
    }

    // this is our state changing function, which could be called anything
    function execute() external {
        count++;
    }
}
