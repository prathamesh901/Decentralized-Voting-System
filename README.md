# 🗳️ Decentralized Voting System (dVoting)

A blockchain-based decentralized voting system built on the [Ethereum](https://ethereum.org/dapps/) network. This project was initially developed as a final year IT degree project, with the aim of evolving into a robust and transparent voting solution.

---

## 🚀 Features

- 💼 Admin-controlled election creation and management  
- 👤 Voter registration with admin approval  
- 🗳️ Verified voters can cast votes securely  
- 📊 Real-time result display after election ends  
- 🔒 Tamper-proof and transparent voting records via Ethereum smart contracts  

---

## 🔁 System Workflow

1. **Admin** deploys the system and creates a new election with candidate details.
2. **Voters** connect to the same blockchain and register by submitting their name and phone number.
3. **Admin** verifies voter identity based on the submitted details.
4. Once approved, **voters cast their votes** for the preferred candidate.
5. **Admin ends the election**, and results are displayed automatically.


---

## 🛠️ Tech Stack

- **Smart Contract**: Solidity  
- **Blockchain Network**: Ethereum (Ganache CLI for local dev)  
- **Frontend**: React.js  
- **Web3 Integration**: Web3.js + MetaMask  
- **Framework**: Truffle  

---

## 🧰 Development Setup

### ✅ Prerequisites

- [Node.js](https://nodejs.org)  
- [Truffle](https://www.trufflesuite.com/truffle)  
- [Ganache CLI](https://github.com/trufflesuite/ganache-cli)  
- [MetaMask](https://metamask.io/)

### 📦 Install Dependencies

1. **Install Node.js** from [here](https://nodejs.org/en/download/)
2. **Install Truffle & Ganache CLI** globally:
   ```bash
   npm install -g truffle
   npm install -g ganache-cli

⚙️ Run Locally
🧾 Clone the Repository
bash
Copy
Edit
git clone https://github.com/prathamesh901/Decentralized-Voting-System.git
cd Decentralized-Voting-System
⚡ Start Ganache CLI
bash
Copy
Edit
ganache-cli
🔸 Keep this terminal open — it runs your local Ethereum blockchain and provides test ETH accounts with private keys.

🦊 Configure MetaMask
Open the MetaMask extension in your browser.

Click “Add network manually” and use the following details:

Network Name: Ganache Local

New RPC URL: http://127.0.0.1:8545

Chain ID: 1337

Currency Symbol: ETH (optional)

Import one or more accounts using private keys from Ganache CLI output.

📤 Deploy Smart Contracts
In a new terminal (keep Ganache running), run:

bash
Copy
Edit
truffle migrate --reset
💻 Start the Frontend
bash
Copy
Edit
cd client
npm install
npm start
🌐 Open your browser and go to http://localhost:3000 to use the dVoting app.
