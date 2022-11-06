import React from "react";

import Liquidity from "../Liquidity/Liquidity";
import TopVaults from "./TopVaults";
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

      <Footer />
    </div>
  );
}

export default Home;
