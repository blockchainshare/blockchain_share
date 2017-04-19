var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://117.16.47.18:8001"));
}
console.log(web3.eth.blockNumber);

var _abiStr = '[{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"delegate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"winningProposal","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"proposal","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_numProposals","type":"uint8"}],"payable":false,"type":"constructor"}]'

var _abiArrray = JSON.parse(_abiStr);
var _address = ''
var _contract = web3.eth.contract(_abiArray);
var _instance = _contract.at(_address);
web3.eth.defaultAccount=web3.eth.accounts[0];
var event = _instance.Deposit(function (error, result) {
    if (!error) {
        console.log("event triggered ===> ",result);
        process.exit(1);
    }
});
_instance.deposit();
