# Aeternity Setup and Tooling

## Node
 - Node Documentation https://github.com/aeternity/aeternity/tree/master/docs
 - Run with docker `docker run -p 3013:3013 -p 3015:3015 -d aeternity/aeternity`
 - Api Documentation https://api-docs.aeternity.io/
 - Full Node Configuration https://github.com/aeternity/aeternity/blob/master/apps/aeutils/test/data/epoch_full.yaml
 - Use own config file `-v ./aeternity.yaml:/home/aeternity/.aeternity/aeternity/aeternity.yaml`
 - Persist data directory `./.data/aeternity:/home/aeternity/node/data/mnesia`

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
