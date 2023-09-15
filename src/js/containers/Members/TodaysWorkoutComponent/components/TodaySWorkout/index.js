import { useCallback, useState, forwardRef } from "react";
import WorkoutTrackerSection from "../WorkoutTrackerSection";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function TodaySWorkout({ exerciseCounts, exerciseCardsData }) {
  return (
    <div className={`workout-card`}>
      <p className={`exercise-count-label`}>Todays Workout</p>
      <p className={`core-workout-info`}>
        <span className={`core-focused`}>Core focused</span>

        <span className={`core-focused-text`}>
          work out for today. <br /> balance and steadiness, also called stability
        </span>
      </p>
      <div className={`workout-container`}>
        <WorkoutTrackerSection exerciseCounts={exerciseCounts} exerciseCardsData={exerciseCardsData} />
        <div className={`exercise-summary`}>
          <SvgIcon1 className="svg-container" />
        </div>
      </div>
    </div>
  );
}

export default TodaySWorkout;
