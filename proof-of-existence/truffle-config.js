const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = 'fj4jll3k.....';
 
const fs = require('fs');
const mnemonic = fs.readFileSync('.secret').toString().trim();


module.exports = {
  networks: {
      development: {
          host: 'localhost',
          port: 8545,
          network_id: '*'
      }
  }
};