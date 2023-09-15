import { useCallback, useState, forwardRef } from "react";
import RenderExerciseCards1 from "../RenderExerciseCards1";
import "./style.css";

function WorkoutSection({ exerciseCardsData }) {
  return (
    <div className={`exercise-card`}>
      <div className={`leg-raise-container`}>
        <p className={`leg-raise-title`}>
          <span className={`leg-raise-text`}>Leg raise</span>
          <span className={`leg-raise-description`}> </span>
        </p>
        <p className={`leg-raise-info`}>3 sets x 10 reps</p>
      </div>
      <RenderExerciseCards1 exerciseCardsData={exerciseCardsData} />
    </div>
  );
}

export default WorkoutSection;
