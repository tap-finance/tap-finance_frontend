import React from "react";
import "./App.css";
import { Navbar } from "./components/NavBar/navbar";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pool from "./components/Pool/Pool";

import Home from "./components/Home/Home";
import TopVaultsPage from "./components/TopVaults/TopVaultsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route path="/top"
          element={<TopVaultsPage/>}
        />
        <Route path="/pool"
        element={<Pool />}
        />
      </Routes>
    </Router >
  );
}

export default App;
