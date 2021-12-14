const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = 'e2bab8b3672741d6b2e5059eb0f29781';
 

const mnemonic = "present step dutch mule meadow race drip spider genre make drama cherry";
const infuraURL = 'https://rinkeby.infura.io/v3/e2bab8b3672741d6b2e5059eb0f29781';

module.exports = {
  networks: {
    development: {
        host: 'localhost',
        port: 8545,
        network_id: '*'
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: 4,          // Rinkeby's network id
      gas: 5500000,        
    },
  }
};
