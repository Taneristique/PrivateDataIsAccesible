// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
contract VulnerableData{
  uint private secret; 
  constructor(uint _secret){
    secret=_secret;
  }
}