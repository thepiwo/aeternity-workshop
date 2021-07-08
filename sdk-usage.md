# SDK Usage Example

see [/sdk-example](/sdk-example)

 - install with npm `npm i @aeternity/aepp-sdk`
 - or use from cdn `<script src="https://unpkg.com/@aeternity/aepp-sdk/dist/aepp-sdk.browser-script.js"></script>`
 - initialize client with node and compiler to connect to
```javascript
const {Universal, Node, MemoryAccount} = require("@aeternity/aepp-sdk");
...
const client = await Universal({
  nodes: [{
    name: 'local test',
    instance: await Node({url: "http://localhost:3013", internalUrl: "http://localhost:3113"})
  }],
  accounts: [MemoryAccount({
    keypair: {
      publicKey: "ak_Nk4vNXGCUHPBD9Qt2S6Vc9hzB6zK8GH9Kza1RUzmiLyMVy7JJ",
      secretKey: "..."
    }
  )],
  compilerUrl: "http://localhost:3080"
});
```
 - generate keypair
```javascript
const Crypto = require("@aeternity/aepp-sdk").Crypto;
console.log(Crypto.generateKeyPair());
```
 - example contracts usage
```javascript
const contractSouce = `
contract Example =
  type state = int
  entrypoint init() = 0
  stateful entrypoint set(x : int) = put(x)
  entrypoint get() = state`;

const contract = await client.getContractInstance(contractSouce);
const init = await contract.methods.init();
console.log("deployed contract at", init.address);

await contract.methods.set(42);
const result = await contract.methods.get();
console.log("result get", result.decodedResult);
```
