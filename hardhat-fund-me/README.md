# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

```shell
# to launch a local network
npx hardhat node
# compile you .sol fies
npx hardhat compile
# deploy to local hardhat network(different to localhost)
npx hardhat deploy
# deploy to a test networ like goerli
npx hardhat deplou --network goerli
```
## Tricks

- Remember that deploy mock grabs the MockV3Aggregator contract that is in `contracts/test`, in this contract we grab the implementation from node_modules since @chainlink repo already has a mock sample that we can use.
- Always check the solidity style guides for example for solidity [0.8.16](https://docs.soliditylang.org/en/v0.8.16/style-guide.html)
- Solidity recomends [NatSpec](https://docs.soliditylang.org/en/v0.8.16/natspec-format.html#natspec) to document the code

