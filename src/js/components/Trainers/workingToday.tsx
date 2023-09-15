import React from "react";

const WorkingToday: React.FC<{
  working: {
    personalTrainers: number;
    generalTrainers: number;
    admin: number;
    cleaning: number;
  };
}> = ({ working }) => {
  return (
    <div className="w-[230px] bg-[#222338] rounded-xl px-[20px] py-[34px]">
      <div className="text-white items-center">
        <div className="font-bold">Working Today</div>
        <div className=" pt-[21px] h-[150px] flex flex-col justify-between">
          <div className="flex justify-between">
            <div>Personal Trainers</div>
            <div>{working.personalTrainers}</div>
          </div>
          <div className="flex justify-between">
            <div>General Trainers</div>
            <div>{working.personalTrainers}</div>
          </div>
          <div className="flex justify-between">
            <div>Admin</div>
            <div>{working.personalTrainers}</div>
          </div>
          <div className="flex justify-between">
            <div>Cleaning</div>
            <div>{working.personalTrainers}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingToday;
