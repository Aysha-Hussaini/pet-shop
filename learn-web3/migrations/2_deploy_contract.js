var ss = artifacts.require("./SimpleStorage");

module.exports = function(deployer){
   deployer.deploy(ss);
};