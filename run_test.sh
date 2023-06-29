#! /usr/bin/env bash
ganache --chain.chainId 1337 -i 5777 -h 127.0.0.1 -p 8645 -D -d --wallet.accountKeysPath ./ganache_test_accounts
truffle deploy --network test > truffle_test.out &

# Here you need to read the private key and address of an account from ganaceh_test_accounts file and
# contract address from truffle_test.out
