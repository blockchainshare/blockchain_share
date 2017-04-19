var _abiStr='[{"constant":false,"inputs":[{"name":"_id","type":"bytes32"}],"name":"deposit","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}]'
var _abiArray=JSON.parse(_abiStr);
var _bin="606060405234610000575b60a7806100176000396000f360606040526000357c010000000000000000000000000000000000000000000000000000000090048063b214faa5146036575b6000565b34600057604e60048080359060200190919050506050565b005b80600019163373ffffffffffffffffffffffffffffffffffffffff167f19dacbf83c5de6658e14cbf7bcae5c15eca2eedecf1c66fbca928e4d351bea0f346040518082815260200191505060405180910390a35b5056";
var _contract = eth.contract(_abiArray);
var _instance=_contract.new({data:_bin,from:web3.eth.accounts[0],gas:100000}, function(err, contract) {
  if (!err && contract.address)
    console.log("contractAddress: ", contract.address);
    console.log("transactionHash: ", contract.transactionHash);
});
console.log("after async - transactionHash: ",_instance.transactionHash)
console.log("after async - contractAddress: ",_instance.address);
