var primary = eth.accounts[0];
console.log("primary ac: ",primary);
console.log("balance: ",eth.getBalance(primary));
source = "contract test {\n" + "   /// @notice will multiply `a` by 7.\n" + "   function multiply(uint a) returns(uint d) {\n" + "      return a * 7;\n" + "   }\n" + "} ";
    "contract test {\n   /// @notice will multiply `a` by 7.\n   function multiply(uint a) returns(uint d) {\n      return a * 7;\n   }\n} ";
compiled = eth.compile.solidity(source);
_class=eth.contract(compiled.test.info.abiDefinition);
console.log('bin code: ', compiled.test.code)
//async way
_object=_class.new({from:primary,data:compiled.test.code}, function(err, contract) {
  if (!err && contract.address)
    console.log("contractAddress: ", contract.address);
    console.log("transactionHash: ", contract.transactionHash);
    myMultiply=_class.at(contract.address);
    console.log("multiply: ",myMultiply.multiply.call(6));
