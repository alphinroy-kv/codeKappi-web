import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Analytics from "../containers/analytics/Analytics";
import NavBar from "../components/NavBar/navBar";
import Members from "../containers/Members/Members";
import Trainers from "../containers/trainers/Trainers";

const HomeLayout = () => (
  <div className="h-full w-full bg-[#1B1C31]">
    <BrowserRouter>
      <NavBar />
      <div className="ml-[200px] font-[poppins]">
        <Routes>
          <Route path="/analytics" Component={Analytics} />
          <Route path="/members" Component={Members} />
          <Route path="/trainers" Component={Trainers} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);

export default HomeLayout;
