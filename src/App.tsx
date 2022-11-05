import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";

import Table from "./components/Table";

function App() {
  return (
    <div>
      <div className="App h-screen" style={{ background: "#10172A" }}>
        <Navbar />
      </div>
      <div className="App">
        <Table />
      </div>
    </div>
  );
}

export default App;
