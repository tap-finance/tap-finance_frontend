import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import NFTQueringTable from "./components/NFTQueringTable";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pool from "./components/Pool/Pool";

import Home from "./components/Home/Home";
import TopVaultsPage from "./components/TopVaults/TopVaultsPage";


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
      <Routes>
        <Route path="/"
          element={
            <WagmiConfig
              client={client}>
              <div className="App h-screen" style={{ background: "#10172A" }}>
                <Navbar />
              <Home />
              </div>
            </WagmiConfig>
          }
        />
      <Route path="/top"
        element={
          <WagmiConfig
            client={client}>
            <div className="App h-screen" style={{ background: "#10172A" }}>
              <Navbar />
              <TopVaultsPage />
            </div>
          </WagmiConfig>
        }
      />
      <Route path="/pool"
        element={
          <WagmiConfig
            client={client}>
            <div className="App h-screen" style={{ background: "#10172A" }}>
              <Navbar />
              <Pool />
            </div>
          </WagmiConfig>
        }
      />
      <Route path="/nft"
        element={
          <WagmiConfig
            client={client}>
            <div className="App h-screen" style={{ background: "#10172A" }}>
              <Navbar />
              <NFTQueringTable />
            </div>
          </WagmiConfig>
        } />
    </Routes>
    </Router >

  );
}

export default App;


