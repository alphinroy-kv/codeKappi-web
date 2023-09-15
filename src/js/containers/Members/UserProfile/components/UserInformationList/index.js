import { useCallback, useState, forwardRef } from "react";
import UserInfoBox from "../UserInfoBox";
import "./style.css";

function UserInformationList({ userInformation }) {
  return (
    <div className={`membership-status-container`}>
      {userInformation.map((data, index) => {
        return <UserInfoBox {...data} key={index} />;
      })}
    </div>
  );
}

export default UserInformationList;
