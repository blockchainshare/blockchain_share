pragma solidity ^0.4.0;

contract e_testDeposit {
    event Deposit(
        address indexed _from,
        bytes32 indexed _id,
        uint _value
    );
    function deposit(bytes32 _id) {
        Deposit(msg.sender, _id, msg.value);
    }
}
