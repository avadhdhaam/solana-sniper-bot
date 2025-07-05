require('dotenv').config();
const bs58 = require('bs58');
const readline = require('readline-sync');
const {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey,
  LAMPORTS_PER_SOL,
} = require('@solana/web3.js');

// ------------------------------------
// CONFIG
// ------------------------------------
const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

// Load Phantom Seed from .env
const seed = process.env.PHANTOM_SECRET;
const keypair = Keypair.fromSecretKey(bs58.decode(seed));
const wallet = keypair.publicKey;

console.log("🔑 Wallet Loaded:", wallet.toBase58());

// Ask user for token address
const tokenAddress = readline.question("📥 Paste token address: ");
console.log("📌 Target Token:", tokenAddress);

// 🧠 Buy and auto-sell logic will be added in Phase 4
