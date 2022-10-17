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


## Testing

```shell
npx hardhat test
npx hardhat coverage
```

output of coverage witout tests:

![](https://upww.screenrec.com/images/f_gl9Jf4h7ipeWQMPnrsqNkGwXxAByOFI1.png)

-----------------------|----------|----------|----------|----------|----------------|
| File                    | % Stmts    | % Branch   | % Funcs    | % Lines    | Uncovered Lines  |
| ----------------------- | ---------- | ---------- | ---------- | ---------- | ---------------- |
| contracts/              | 0          | 0          | 0          | 0          |                  |
| FundMe.sol              | 0          | 0          | 0          | 0          | ... 106,113,116  |
| PriceConverter.sol      | 0          | 100        | 0          | 0          | 20,22,30,31,33   |
| contracts/test/         | 100        | 100        | 100        | 100        |                  |
| MockV3Aggregator.sol    | 100        | 100        | 100        | 100        |                  |
| ----------------------- | ---------- | ---------- | ---------- | ---------- | ---------------- |
| All files               | 0          | 0          | 0          | 0          |                  |
| ----------------------- | ---------- | ---------- | ---------- | ---------- | ---------------- |


