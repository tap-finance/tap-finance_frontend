import React from "react";
import "./App.css";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import RouterNav from "./components/Router/RouterNav";

const { provider, webSocketProvider } = configureChains(
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
      <RouterNav />
    </WagmiConfig>
  );
}

export default App;
