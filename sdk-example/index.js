const Universal = require("@aeternity/aepp-sdk").Universal;

const main = async () => {
    const client = await Universal({
        url: "http://localhost:3013",
        internalUrl: "http://localhost:3113",
        compilerUrl: "http://localhost:3080",
        networkId: "ae_next",
        keypair: {
            publicKey: "ak_hYi4bwaTo6NJtAkgKhqhU1Jz2P5VCWGvg2cLyRnDuG78yDS1J",
            secretKey: "f1a6bf1c2589b3e7c5173a6703897fe902be11bea7d4dd3b23c878f4d2d03e625c10f3a61c6a0ec9c56a2dd7dfd3b17683cf13b3c6d3900b6edf988689dbc01c"
        }
    });

    const balance = await client.balance("ak_hYi4bwaTo6NJtAkgKhqhU1Jz2P5VCWGvg2cLyRnDuG78yDS1J");
    console.log("balance", balance);

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

};

main();
