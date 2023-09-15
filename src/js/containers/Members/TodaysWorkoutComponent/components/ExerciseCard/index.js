import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ExerciseCard({ shouldRenderDivider, exerciseCount, containerHeight }) {
  return (
    <div className={`exercise-count-container exercise-count-container1`}>
      <div className={`exercise-count-container2`}>
        <p className={`exercise-count-label`}>{exerciseCount}</p>
      </div>
      {shouldRenderDivider ? <div className={`border-left-box`} style={{ height: containerHeight }} /> : null}
    </div>
  );
}

export default ExerciseCard;
