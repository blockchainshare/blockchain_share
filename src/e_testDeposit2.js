var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://117.16.45.68:8001"));
}
console.log(web3.eth.blockNumber);
var _abiStr='[{"constant":false,"inputs":[{"name":"_id","type":"bytes32"}],"name":"deposit","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}]'
var _abiArray=JSON.parse(_abiStr);
var _address = '0xf957f93a7b95c28005af20b5f8f396ba8b6f18d0';
var _contract=web3.eth.contract(_abiArray);
var _instance=_contract.at(_address);
web3.eth.defaultAccount=web3.eth.accounts[0];
var event = _instance.Deposit(function (error, result) {
    if (!error) {
        console.log("event triggered ===> ",result);
        process.exit(1);
    }
});
_instance.deposit();
