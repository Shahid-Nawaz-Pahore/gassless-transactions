"use client";
import { useState } from "react";
import axios from "axios";

export default function Gasless() {
  const [to, setTo] = useState("");
  const [value, setValue] = useState("0");
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const sendGaslessTransaction = async () => {
    try {
      setError("");
      const response = await axios.post(
        "http://localhost:5000/api/send-gasless",
        { to, value }
      );
      setTxHash(response.data.txHash);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Send Gasless Transaction</h1>
      <input
        type="text"
        placeholder="Recipient Address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value (ETH)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={sendGaslessTransaction}>Send</button>

      {txHash && <p>Transaction Hash: {txHash}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
