import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Analytics from "../containers/analytics/Analytics";
import NavBar from "../components/NavBar/navBar";

const HomeLayout = () => (
  <div className="h-screen w-screen bg-[#1B1C31]">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/analytics" Component={Analytics} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default HomeLayout;
