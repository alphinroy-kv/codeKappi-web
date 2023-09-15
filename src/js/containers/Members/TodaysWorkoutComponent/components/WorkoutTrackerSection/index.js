import { useCallback, useState, forwardRef } from "react";
import WorkoutTracker from "../WorkoutTracker";
import WorkoutSection from "../WorkoutSection";
import "./style.css";

function WorkoutTrackerSection({ exerciseCounts, exerciseCardsData }) {
  return (
    <div className={`exercise-card1`}>
      <WorkoutTracker exerciseCounts={exerciseCounts} />
      <WorkoutSection exerciseCardsData={exerciseCardsData} />
    </div>
  );
}

export default WorkoutTrackerSection;
