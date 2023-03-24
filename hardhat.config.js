require("@nomicfoundation/hardhat-toolbox");

// This task bellow show me how to get the accounts from hardhat enviromment 
// Creat task Accounts and Balances
task(
  "accounts",
  "Print list of accounts and their balances",
  async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for(const account of accounts){
      const balance = await account.getBalance()
      console.log(account.address, ":" , balance)
    }
  }
)

////////////////////////////////////////////////////////////////////////////////////////

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  paths: {
    sources: "./contracts",
    artifacts: "./src/artifacts",
    },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: "https://goerli-testnet-node-url.com",
      // accounts: [privateKey1, privateKey2, ...]
    }
  }
};
