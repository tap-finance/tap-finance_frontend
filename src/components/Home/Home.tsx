import React from "react";
import { Navbar } from "../NavBar/navbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Liquidity from "../Liquidity/Liquidity";
import TopVaults from "./TopVaults";
import Nav2 from "../NavBar/Nav2";
import PopularCollection from "./PopularCollection";
import HomeHeader from "../HomeHeader/HomeHeader";
import Footer from "../Footer/Footer";
import NftLiquidityPool from "./NftLiquidityPool";

function Home() {
  return (
    <div className="" style={{ background: "#10172A" }}>
      <HomeHeader />
      <Liquidity />
      <NftLiquidityPool />
      <TopVaults />
      {/* <TopVaults />
      <PopularCollection />
      <Nav2 />
      <Footer /> */}
      <Footer />
    </div>
  );
}

export default Home;
