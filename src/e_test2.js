var primary = web3.eth.accounts[0];
var bal=web3.eth.getBalance(primary)
var c=web3.net.peerCount;
console.log(bal);
console.log(c);
console.log(eth.blockNumber);
console.log(txpool.status.pending);
console.log('net.listening: ',net.listening);
console.log('net.peerCount: ', net.peerCount);
