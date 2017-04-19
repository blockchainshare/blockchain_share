_dir=$HOME/Downloads/eth/1
_log=$HOME/Downloads/eth/1.log
geth --identity "myNode" \
--rpc --rpcaddr "117.16.45.68" --rpcport "8001" --rpccorsdomain "*" \
--datadir $_dir \
--port "30301" \
--nodiscover \
--ipcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" \
--rpcapi "db,eth,net,web3" \
--networkid 111 \
console 2>>$_log
