// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Lock {
    uint public res = 0;

    function add(uint x, uint y) public {
        res = x + y;
    }
}
