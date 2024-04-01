// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
import "./Account.sol";

contract AccountFactory {
    function createAccount(address _owner) public returns (address) {
        Account newAccount = new Account(_owner);
        return address(newAccount);
    }
}
