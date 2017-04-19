_dir=$HOME/Downloads/eth/1
_log=$HOME/Downloads/eth/1.log
geth --identity "rdNode" \
--unlock 0 \
--verbosity 3 \
--rpc --rpcaddr "117.16.45.68" --rpcport "8001" --rpccorsdomain "*" \
--datadir $_dir \
--port "30006" \
--bootnodes "enode://8af9548c05477aa4be5e98282d8607f10b26a60e58f8116a854013d647f1c4101a04ae03cb9edee106270b3b2becbc1d6f7996059e2c19caf01e9ffbc27c8aab@117.16.47.18:30301" \
--maxpeers 3 \
--rpcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" \
--ipcdisable \
--networkid 111 \
console 2>>$_log
