
const { assert } = require("chai");
const { ethers } = require("hardhat");

require("dotenv").config();
describe("Check if private objects are really private in solidity",function(){
  let provider;
  let contactAddress="0x0a98f630c7832478856428dd3184b1b9e2f82ba4"
  let privateValue,user,user2;
  before("Set provider and signer",async()=>{
    provider=new ethers.providers.getDefaultProvider(process.env.hardhat_testnet_url);
  })

  it("Find the value of private object which is assigned to a value via constructor method",async()=>{  
    console.log("Private address in hex : ",await provider.getStorageAt(contactAddress,1));
    privateValue=parseInt(await provider.getStorageAt(contactAddress,1));
    assert.equal(privateValue,760);
  })

})
