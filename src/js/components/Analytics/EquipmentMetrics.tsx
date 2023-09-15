import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  ScriptableContext
} from "chart.js";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineController);

const EquipmentMetrics = () => {
  const data = {
    labels: [
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
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 70, 41, 50, 63, 45],
        fill: true,
        borderColor: "#8D6AFF",
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const { ctx } = context.chart;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(104, 92, 255, 0.2)');
          gradient.addColorStop(1, 'rgba(141, 106, 255, 0.3)');
          return gradient;
        },
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
    <div className="w-[47%] bg-[#222338] rounded-xl p-[30px] flex flex-col justify-between">
      <div className="flex justify-between font-[Inter] text-white items-center">
        <div className="font-bold text-xl">Equipment Metrics:</div>
        <div className="w-2/5 rounded-[10px] px-2.5 py-2 border border-[#15BFFD] flex justify-center font-medium text-xs">
          Calories Burned
          <img src="icons/chevron.svg" alt="dropdown" className="pl-[2px]" />
        </div>
      </div>
      <div className="pt-2">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EquipmentMetrics;
