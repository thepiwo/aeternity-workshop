# Aeternity Setup and Tooling

## CLI

```
npm install -g @aeternity/aepp-cli
aecli account create <name>
aecli account address <name> --privateKey
```

## Node
 - Node Documentation https://github.com/aeternity/aeternity/tree/master/docs
 - Run with docker `docker run -p 3013:3013 -p 3015:3015 -d aeternity/aeternity`
 - Api Documentation https://api-docs.aeternity.io/
 - Full Node Configuration https://github.com/aeternity/aeternity/blob/master/apps/aeutils/test/data/epoch_full.yaml
 - Use own config file `-v ./aeternity.yaml:/home/aeternity/.aeternity/aeternity/aeternity.yaml`
 - Persist data directory `./.data/aeternity:/home/aeternity/node/data/mnesia`

 - e.g. to setup local testing node with own key
```
mining:
  autostart: true
  beneficiary: "ak_Nk4vNXGCUHPBD9Qt2S6Vc9hzB6zK8GH9Kza1RUzmiLyMVy7JJ"
  beneficiary_reward_delay: 2
  expected_mine_rate: 30000
  cuckoo:
    edge_bits: 15
    miners:
      - executable: mean15-generic
        extra_args: "-t 1"

http:
  internal:
    listen_address: 0.0.0.0
    debug_endpoints: true

fork_management:
  network_id: "ae_local_test"
```
 - `docker run -p 3013:3013 -p 3113:3113 -v $PWD/aeternity.yaml:/home/aeternity/.aeternity/aeternity/aeternity.yaml aeternity/aeternity`

## Compiler
 - Sophia Language https://github.com/aeternity/protocol/blob/master/contracts/sophia.md
 - Documentation https://github.com/aeternity/aesophia_http
 - Run with docker `docker run -p 3080:3080 -d aeternity/aesophia_http`
 
## AEproject
 - Documentation https://aeproject.gitbook.io/aeproject/
 - Setup, implement and run tests
```
npm i -g aeproject
aeproject init
aeproject node && aeproject compiler
aeproject test
```

# Example

See [/node-docker-setup](/node-docker-setup) for setup of local node in separate network with local miner and compiler.
