#! /bin/sh
# Note that you need to select the network which host is local

network="$1"
chainId="$2"

command="node ./read_truffle.js $network"
network_id=$($command)

nohup ganache --chain.chainId "$chainId" -i "$network_id" > ganache.out &
# #
truffle deploy --network "$network" > truffle.out
#
#
#
#
