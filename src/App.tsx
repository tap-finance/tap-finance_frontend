import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
});

function App() {
  return (
    <WagmiConfig client={client}>
      <div className="App h-screen" style={{ background: "#10172A" }}>
        <Navbar />
      </div>
    </WagmiConfig>
  );
}

export default App;
