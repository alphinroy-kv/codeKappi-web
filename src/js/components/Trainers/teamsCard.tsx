import React from "react";
const dividerStyle = {
  height: "1px",
  borderTop: "1px solid rgba(255, 255, 255, 0.10)",
  margin: "12px 0", // Adjust margin as needed
};

const Divider = () => <div style={dividerStyle}></div>;
const TeamsCard: React.FC<{
  teams: {
    totalTrainers: number;
    totalAdmins: number;
    totalCleaningStaff: number;
  };
}> = ({ teams }) => {
  return (
    <div className="w-[230px] bg-[#222338] rounded-xl px-[20px] py-[34px]">
      <div className="flex justify-between font-[Inter] text-white items-center">
        <div>
          <div className="font-bold">Team</div>
          <div
            className="flex
          items-center pt-[17px]"
          >
            <div className="pr-[8px]">
              <img
                src="/icons/tt.svg"
                alt="Avatar"
                className="rounded-full h-8 w-8"
              ></img>
            </div>
            <div className="ml-[21px]">
              <div className="font-medium text-[14px] pb-[7px]">
                Total Trainers
              </div>
              <div className="text-[14px]">{teams.totalTrainers}</div>
            </div>
          </div>
          <Divider />
          <div className="flex items-center pt-[17px]">
            <div className="pr-[8px]">
              <img
                src="/icons/ta.svg"
                alt="Avatar"
                className="rounded-full h-8 w-8"
              ></img>
            </div>
            <div className="ml-[21px]">
              <div className="font-medium text-[14px] pb-[7px]">
                Total Admins
              </div>
              <div className="text-[14px]">{teams.totalAdmins}</div>
            </div>
          </div>
          <Divider />

          <div className="flex items-center pt-[17px]">
            <div className="pr-[8px]">
              <img
                src="/icons/tcs.svg"
                alt="Avatar"
                className="rounded-full h-8 w-8"
              ></img>
            </div>
            <div className="ml-[21px]">
              <div className="font-medium text-[14px] pb-[7px]">
                Total Cleaning Staffs
              </div>
              <div className="text-[14px]">{teams.totalCleaningStaff}</div>
            </div>
          </div>
        </div>
        {/* <div className="w-[354px] flex items-center">
          <div className="pr-[8px]">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Avatar"
              className="rounded-full h-12 w-12"
            ></img>
          </div>
          <div>
            <div className="font-medium text-[16px]">{user.name}</div>
            <div className="text-[12px]">{user.designation}</div>
          </div>
        </div>
        <div className="flex text-[18px]">
          <div className="text-gray-400">Client&nbsp;</div>
          <div className="text-[#00FF85]">{user.noOfClients}</div>
        </div> */}
      </div>
    </div>
  );
};

export default TeamsCard;
