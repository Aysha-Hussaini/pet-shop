pragma solidity ^0.5.0;

import "../contracts/Adoption.sol";
import "truffle/DeployedAddresses.sol";
import "truffle/Assert.sol";

contract TestAdoption {
   // The address of the adoption contract to be tested
   Adoption public adoption = Adoption(DeployedAddresses.Adoption());

   // The id of the pet that will be used for testing
   uint expectedPetId = 8;

   // The expected owner of adopted pet is this contract
   address expectedAdopter = address(this);

   function testAdopt() public{
      uint petId = adoption.adopt(expectedPetId);
      Assert.equal (petId, expectedPetId, "Adoption of the expected pet should match what is returned.");
   }

   function testgetAdopters() public{
      address adopter = adoption.adopters(expectedPetId);
      Assert.equal(adopter, expectedAdopter, "Adopter and expectedAdopter do not match");
   }

   function testGetAdopterAddressByPetIdInArray() public {
      // Store adopters in memory rather than contract's storage
      address[16] memory adopters = adoption.getAdopters();

      Assert.equal(adopters[expectedPetId], expectedAdopter, "Owner of the expected pet should be this contract");
   }
}