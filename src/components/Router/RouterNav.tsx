import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { Navbar } from "../navbar";
import Pool from "../Pool/Pool";

const RouterNav = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pool" element={<Pool />} />
      </Routes>
    </>
  );
};

export default RouterNav;
