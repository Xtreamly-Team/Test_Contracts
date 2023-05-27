const truffle = require('./truffle-config');
const { spawn } = require('child_process');

const selectedNetworkName = process.argv[2];

const selectedNetwork = truffle.networks[selectedNetworkName];

const networkId = selectedNetwork.network_id;

console.log(networkId);

return networkId;

