# SDK Usage Example

see [/sdk-example](/sdk-example)

 - install with npm `npm i @aeternity/aepp-sdk`
 - or use from cdn `<script src="https://unpkg.com/@aeternity/aepp-sdk/dist/aepp-sdk.browser-script.js"></script>`
 - initialize client with node and compiler to connect to
```javascript
const Universal = require("@aeternity/aepp-sdk").Universal;
const client = await Universal({
        url: "http://localhost:3013",
        internalUrl: "http://localhost:3113",
        compilerUrl: "http://localhost:3080",
        networkId: "ae_next",
        keypair: { publicKey: "ak_hYi4bwaTo6NJtAkgKhqhU1Jz2P5VCWGvg2cLyRnDuG78yDS1J",
                   secretKey: "..." }
    });
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
console.log("result get", result.decodedResult
```
