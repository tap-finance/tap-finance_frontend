import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { Navbar } from "../navbar";
import Pool from "../Pool/Pool";
import Feedback from "../Feedback/Feedback";

const RouterNav = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default RouterNav;
