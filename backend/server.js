require("dotenv").config();
const express = require("express");
const {
  createNexusClient,
  createBicoPaymasterClient,
} = require("@biconomy/sdk");
const { privateKeyToAccount } = require("viem/accounts");
const { http, parseEther } = require("viem");
const { baseSepolia } = require("viem/chains");

const app = express();
app.use(express.json());

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PAYMASTER_URL = process.env.PAYMASTER_URL;
const BUNDLER_URL = process.env.BUNDLER_URL;

let nexusClient;
(async () => {
  try {
    const account = privateKeyToAccount(PRIVATE_KEY);
    nexusClient = await createNexusClient({
      signer: account,
      chain: baseSepolia,
      transport: http(),
      bundlerTransport: http(BUNDLER_URL),
      paymaster: createBicoPaymasterClient({ paymasterUrl: PAYMASTER_URL }),
    });
    console.log("Nexus client initialized!");
  } catch (err) {
    console.error("Failed to initialize Nexus client:", err);
  }
})();

app.post("/api/send-gasless", async (req, res) => {
  const { to, value } = req.body;
  try {
    const txHash = await nexusClient.sendTransaction({
      calls: [{ to, value: parseEther(value) }],
    });
    res.status(200).json({ txHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
