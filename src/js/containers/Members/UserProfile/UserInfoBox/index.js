import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function UserInfoBox({ codeInfoLabelCode, membershipStatus }) {
  return (
    <div className={`code-info-label-code-membership-status`}>
      <p className={`code-info-label`}>{codeInfoLabelCode}</p>
      <p className={`membership-status-label`}>{membershipStatus}</p>
    </div>
  );
}

export default UserInfoBox;
