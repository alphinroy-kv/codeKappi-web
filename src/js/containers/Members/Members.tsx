import React from "react";
import TodaySWorkout from "./TodaysWorkoutComponent/components/TodaySWorkout";
import { mockData as workoutMock } from "./TodaysWorkoutComponent/mockData";

import UserProfile from "./UserProfile";

import "./styles.css";

const Members = () => {
  return (
    <>
      <div className="grid-container">
        <div className="header-panel">
          <div className="profile-card flex">
            <div className="profile-image-container">
              <img src="/Photo.png" alt="profile" className="profile-image" />
            </div>
            <div className="profile-details text-white">
              <h2 className="profile-name">Jessica Jane</h2>
              <p className="profile-phone font-sm">+919605259680</p>
            </div>
          </div>
        </div>
        <div className="main-panel">
          <div
            style={{ marginRight: "48px", marginBottom: "48px" }}
            data-ignore="used only for top most containter width"
          >
            <UserProfile />
          </div>
          <div
            style={{ marginRight: "48px" }}
            data-ignore="used only for top most containter width"
          >
            <TodaySWorkout {...workoutMock} />
          </div>
        </div>
        <div className="right-panel" >
          <div className="weekly-muscle-activity text-white">
            Weekly muscle activity
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
