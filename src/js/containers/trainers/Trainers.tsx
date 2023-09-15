import React, { useState } from "react";
import "chart.js/auto";
import MemberMetrics from "../../components/Analytics/MemberMetrics";
import EquipmentMetrics from "../../components/Analytics/EquipmentMetrics";
import TrainerCard from "../../components/Trainers/trainerCard";
import TeamsCard from "../../components/Trainers/teamsCard";
import WorkingToday from "../../components/Trainers/workingToday";

const users = [
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
];

const teams = {
  totalTrainers: 12,
  totalAdmins: 2,
  totalCleaningStaff: 2,
};

const working= {
  personalTrainers: 12,
  generalTrainers: 2,
  admin: 1,
  cleaning: 1,
};

const Trainers = () => {
  return (
    <div className="ml-4 pl-8 pt-12 pr-[72px]">
      <div className="flex justify-between">
        <div className="text-2xl text-white">
          Good Morning{" "}
          <span className="font-bold text-[#15BFFD] text-3xl">John Doe</span>
        </div>
        <div className="flex gap-10">
          <img src="icons/help-icon.svg" alt="help" />
          <img src="icons/alert-icon.svg" alt="alert" />
          <img src="icons/profile-dp.svg" alt="profile" />
        </div>
      </div>
      <div className="text-xl text-white  pt-11">Personal Trainers</div>
      <div className=" pt-8  flex justify-between">
        <div>
          <div className="w-[740px] flex flex-wrap justify-between gap-3">
            {users.map((user) => {
              return (
                <div>
                  <TrainerCard user={user} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <TeamsCard teams={teams} />
          <div className="pt-4">
          <WorkingToday working={working} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
