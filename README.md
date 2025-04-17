# Crowdfunding Smart Contract

This is a basic crowdfunding smart contract project built with Solidity and Hardhat.  
The project allows users to launch campaigns, pledge ETH, and manage campaign funding securely on Ethereum-compatible networks.

---

## 📦 Project Setup

Clone the repository:

```bash
git clone git@github-calmdefi:calmdefi/crowdfunding-contract.git
cd crowdfunding-contract
```

Install dependencies:

```bash
npm install
```

Compile the smart contracts:

```bash
npx hardhat compile
```

Start a local blockchain node:

```bash
npx hardhat node
```

Deploy the contract to localhost:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Open the Hardhat console to interact:

```bash
npx hardhat console --network localhost
```

---

## 🛠 Technologies Used

- [Solidity](https://soliditylang.org/) (v0.8.x)
- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.org/)
- [Node.js](https://nodejs.org/)

---

## 🛤️ Project Roadmap

- [x] Deploy basic crowdfunding contract
- [ ] Implement campaign creation with metadata (title, description, goal)
- [ ] Enable pledging and unpledging of ETH
- [ ] Allow campaign owners to claim funds if goal met
- [ ] Add refund mechanism if goal not met
- [ ] Write unit tests for major contract functionalities
- [ ] Deploy to public Ethereum testnet
- [ ] Create frontend dApp for interaction

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
