import React, { useState } from "react";
import "chart.js/auto";
import MemberMetrics from "../../components/Analytics/MemberMetrics";
import EquipmentMetrics from "../../components/Analytics/EquipmentMetrics";

const Analytics = () => {
  return (
    <div className="pl-8 pt-12 pr-[72px]">
      <div className="flex justify-between">
        <div className="ml-4 text-2xl text-white">
          Good Morning{" "}
          <span className="font-bold text-[#15BFFD] text-3xl">John Doe</span>
        </div>
        <div className="flex gap-10">
          <img src="icons/help-icon.svg" alt="help" />
          <img src="icons/alert-icon.svg" alt="alert" />
          <img src="icons/profile-dp.svg" alt="profile" />
        </div>
      </div>
      <div className="flex justify-between pt-11">
        <MemberMetrics />
        <EquipmentMetrics />
      </div>
      <div className="flex justify-between pt-11">
        <MemberMetrics />
        <EquipmentMetrics />
      </div>
    </div>
  );
};

export default Analytics;
