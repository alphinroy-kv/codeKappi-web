import { useCallback, useState, forwardRef } from "react";
import UserInformationList from "../UserInformationList";
import MembershipStatus from "../MembershipStatus";
import "./style.css";

function UserProfile({ userInformation }) {
  return (
    <div className={`membership-details-container`}>
      <UserInformationList userInformation={userInformation} />
      <p className={`membership-details-label`}>Membership Details</p>
      <MembershipStatus />
    </div>
  );
}

export default UserProfile;
