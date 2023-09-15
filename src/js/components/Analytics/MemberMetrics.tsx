import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
} from "chart.js";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineController);

const MemberMetrics: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState("WEEKLY");
  const getLabels = () => {
    if (selectedRange === "WEEKLY")
      return ["3 Sep", "4 Sep", "5 Sep", "6 Sep", "7 Sep", "8 Sep", "9 Sep"];
    if (selectedRange === "MONTHLY")
      return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    if (selectedRange === "YEARLY")
      return ["2017", "2018", "2019", "2020", "2021", "2022", "2023"];
  };

  const getDatasets = () => {
    if (selectedRange === "WEEKLY") return [12, 17, 8, 21, 19, 10, 23];
    if (selectedRange === "MONTHLY")
      return [65, 59, 80, 81, 56, 55, 40, 70, 41, 50, 63, 45];
    if (selectedRange === "YEARLY") return [185, 213, 251, 245, 240, 209, 219];
  };

  const data = {
    labels: getLabels(),
    datasets: [
      {
        data: getDatasets(),
        fill: false,
        borderColor: "#00F69E",
        tension: 0.3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        borderWidth: 2,
        pointRadius: 0,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-[47%] bg-[#222338] rounded-xl p-[30px]">
      <div className="flex justify-between font-[Inter] text-white items-center">
        <div className="font-bold text-xl">Member Metrics:</div>
        <div className="w-2/5 rounded-[10px] px-2.5 py-2 border border-[#15BFFD] flex justify-center font-medium text-xs">
          New Sign Ups
          <img src="icons/chevron.svg" alt="dropdown" className="pl-[2px]" />
        </div>
      </div>
      <div className="pt-2">
        <div className="w-1/2 flex justify-start pl-[25px] gap-4 text-[#D9D9D9] font-semibold pb-4">
          <button
            onClick={() => setSelectedRange("WEEKLY")}
            className={` ${
              selectedRange === "WEEKLY"
                ? "text-white border-b-2 border-[#15BFFD]"
                : ""
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setSelectedRange("MONTHLY")}
            className={` ${
              selectedRange === "MONTHLY"
                ? "text-white border-b-2 border-[#15BFFD]"
                : ""
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedRange("YEARLY")}
            className={` ${
              selectedRange === "YEARLY"
                ? "text-white border-b-2 border-[#15BFFD]"
                : ""
            }`}
          >
            Yearly
          </button>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MemberMetrics;
