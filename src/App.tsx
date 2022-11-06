import React from "react";
import "./App.css";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import NFTQueringTable from "./components/NFTQueringTable";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pool from "./components/Pool/Pool";

import Home from "./components/Home/Home";
import TopVaultsPage from "./components/TopVaults/TopVaultsPage";
import { Navbar } from "./components/navbar";

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
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <WagmiConfig client={client}>
              <Home />
            </WagmiConfig>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
