# PumpOS: A Native Onchain Operating System Designed for Managing the BTC Asset Layer

<div align="center">
  <img src="https://pbs.twimg.com/profile_images/1801496042405564416/mjMpGb3Y_400x400.jpg" alt="PumpOS Logo" width="200"/>
  <h3>Revolutionizing BTCfi with AI Agent</h3>

  <p align="center">
    <a href="https://discord.gg/pumpbtc">
      <img src="https://img.shields.io/badge/Discord-Join%20Us-blue?style=for-the-badge&logo=discord" alt="Discord" />
    </a>
    <a href="https://x.com/Pumpbtcxyz">
      <img src="https://img.shields.io/badge/X-Follow%20Us-blue?style=for-the-badge&logo=x"
       alt="Twitter" />
    </a>
  </p>
</div>

<div align="center">
  <h3>🏆 PumpLabs Project</h3>
</div>

---

## 📚 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [📖 Documentation](#-documentation)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🛠️ Development](#️-development)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🌟 Overview

PumpOS is an innovative open-source project that simplifies and automates interactions with the BTC DeFi ecosystem through AI-powered agent. 

### Why Multi-Agent Systems (MAS)?

Our platform leverages a Multi-Agent System architecture where each agent specializes in specific tasks—from fetching metrics to executing trades—enabling modular, scalable, and efficient operations. This approach ensures:

- **🎯 Specialization**: Optimized performance through task-specific agents
- **📈 Scalability**: Easy addition of new agents and features
- **🛡️ Robustness**: Continued operation even if individual agents fail
- **⚡ Efficiency**: Parallel task execution for improved performance
- **🔄 Adaptability**: Seamless integration with new protocols and APIs


## ✨ Features

### Core Features

- 🤖 Natural language processing
- 💥 Multi Agent System including 10 AI Agents with different personalities, roles and skills.
- 🔅 Multiple Client Support: Web Client, API,Telegram, Discord, Twitter.
- 💰 Real time prices using CoinGecko API
- 🚀 Real time TVL using DefiLlama API
- 📝 Text generation and analysis
- 🎨 Image generation and description
- 🗣️ Speech synthesis and recognition
- 📊 Data visualization
- 🌐 Web browsing capabilities


### Onchain Features

- 💰 Wallet management (EVM address)
- 💸 Token transfers (ERC-20 only). 
- 🌉 Cross-space bridging from different EVM chains.
- 💱 Token swapping via Uniswap and Cruve
- 💱 WBTC Staking on PumpBTC.xyz
- 🔍 Transaction tracking


## 🚀 Quick Start

### Prerequisites

- Node.js 23+
- pnpm 9+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/
cd codas/eliza

# Install dependencies
pnpm install --no-frozen-lockfile

# Copy environment file
cp .env.example .env
```

### Configuration

Edit `.env` file and add your credentials:

```env
# Required for Ethereum operations
PRIVATE_KEY=your_private_key
RPC_URL=your_EVM_chain_URL

# Choose an API provider and add the API_KEY on the env file (Choose one and configure it on the character file as well, openai is default)
OPENAI_API_KEY=                 # OpenAI API key, starting with sk-
ANTHROPIC_API_KEY=              # For Claude

# You can add additional clients by adding the env variables and including them in the character file like ["dicord","telegram"].
# Discord Configuration
DISCORD_APPLICATION_ID=
DISCORD_API_TOKEN=              # Bot token

# Telegram Configuration
TELEGRAM_BOT_TOKEN=

# Twitter/X Configuration
TWITTER_DRY_RUN=false
TWITTER_USERNAME=               # Account username
TWITTER_PASSWORD=               # Account password
TWITTER_EMAIL=                  # Account email
```

### Running the Agent

```bash
# Build the agent
pnpm build

# Start the coordinator agent
pnpm start --characters="characters\coordinator.character.json"

```

### Running the Web Client
In a new terminal, run the following command:

```bash
cd client
pnpm run dev
```


## 🧪 How to use?

Interact with the agents with these example prompts:

### Network Information

```
What is PumpBTC?
```

### TVL Metrics

```
Get detailed TVL metrics for PumpBTC
```

### Price Metrics

```
Get prices for pumpBTC, USDT, ETH, WBTC
```

### Wallet Operations

```
Show me my EVM wallet address and balance
```

### pumpBTC Transfers


```
Send 0.001 pumpBTC to 0x0926**6AB15 on Ethereum
```

### Cross-Space Bridge

```
Bridge 0.00001 pumpBTC from Ethereum to Mantle to 0x0926**6AB15 
```

### Token Swaps

```
swap 0.001 WBTC for PumpBTC
```

### Token Transfers

```
Send 0.00001 pumpBTC to 0x0926**AB15 on ethereum
```


### Deposit on PumpBTC

```
Deposit 0.01 WBTC on pumpbtc.xyz
```



## 🛠️ Development

### Project Structure

```
README.md                       # This file
docs/                           # Documentation
  ├── aiws.md                   # AI Workforce Suite docs
  ├── business-plan.md          # Business plan and strategy
  ├── overview.md               # Project overview
  ├── plan.md                   # Development roadmap
  ├── plugin-codas.md           # PumpOS plugin documentation
  ├── specs.md                  # Technical specifications
  └── whitepaper.md             # Project whitepaper
assets/                         # Assets
PumpOS-token/                   # PumpOS Token Hardhat project
  ...

eliza/                          # Eliza project
  ├── packages/
  │   ├── core/                 # Eliza core functionality
  │   ├── plugin-onchain/       # EVM integration
  │   │   ├── src/
  │   │   │   ├── actions/      # Blockchain operations
  │   │   │   ├── providers/    # Wallet providers
  │   │   │   ├── templates/    # Template functions
  │   │   │   ├── types/        # TypeScript definitions
  │   │   │   └── utils/        # Helper functions
  ├── plugin-PumpOS/            # Onchain integration
  │   ├── src/
  │   │   ├── actions/      
  │   │   ├── providers/    
  │   │   │   ├── coingecko     # CoinGecko API
  │   │   │   ├── defillama     # DefiLlama API
  │   │   │   └── ...
  │   │   ├── templates/    
  │   │   ├── types/        
  │   │   └── utils/        
  └── client/                   # Web App
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ by the PumpLabs</p>
  <p>
    <a href="https://discord.gg/pumpbtc">
      <img src="https://img.shields.io/badge/Discord-Join-7289DA?style=for-the-badge&logo=discord" alt="Discord" />
    </a>
    <a href="https://x.com/Pumpbtcxyz">
      <img src="https://img.shields.io/badge/Twitter-Follow%20Us-blue?style=for-the-badge&logo=twitter" alt="Twitter" />
    </a>
    </a>
  </p>
</div>
