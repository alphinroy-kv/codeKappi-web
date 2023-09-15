import { useCallback, useState, forwardRef } from "react";
import RenderExerciseCards from "../RenderExerciseCards";
import "./style.css";

function WorkoutTracker({ exerciseCounts }) {
  return (
    <div className={`exercise-container`}>
      <div className={`exercise-count-container`}>
        <span className={`circle-button`}>1</span>
        <div className={`vertical-divider`} />
      </div>
      <RenderExerciseCards exerciseCounts={exerciseCounts} />
    </div>
  );
}

export default WorkoutTracker;
