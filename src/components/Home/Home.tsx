import React from "react";
import { Navbar } from "../NavBar/navbar";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Liquidity from "../Liquidity/Liquidity";
import TopVaults from "./TopVaults";
import Nav2 from "../NavBar/Nav2";
import PopularCollection from "./PopularCollection";
import HomeHeader from "../HomeHeader/HomeHeader";
import Footer from "../Footer/Footer";


function Home() {
    return (
        <div>
            <div className="App h-screen" style={{ background: "#10172A" }}>
                <Navbar />
                <HomeHeader />
                <Liquidity />
            </div>
            <div className="App">
                <TopVaults />
                <PopularCollection />
            </div>
            <Nav2 />
            <Footer />

        </div>
    );
}

export default Home;
