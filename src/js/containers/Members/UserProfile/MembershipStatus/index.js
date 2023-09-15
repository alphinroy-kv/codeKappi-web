import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function MembershipStatus() {
  return (
    <div className={`plan-card`}>
      <div className={`code-info-label-code-membership-status`}>
        <p className={`code-info-label`}> Plan</p>
        <p className={`membership-status-label`}>3 months </p>
      </div>
      <div className={`reminder-section`}>
        <div className={`reminder-container`}>
          <p className={`remaining-text`}>Remaining</p>
          <p className={`remaining-days`}>10 days</p>
        </div>
        <p className={`reminder-button`}>Send Reminder</p>
      </div>
    </div>
  );
}

export default MembershipStatus;
