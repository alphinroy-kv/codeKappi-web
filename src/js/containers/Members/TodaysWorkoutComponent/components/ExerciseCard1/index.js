import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ExerciseCard1({ formattedContent, exerciseSetsReps }) {
  return (
    <div className={`leg-raise-container`}>
      <p className={`leg-raise-title`} dangerouslySetInnerHTML={{ __html: formattedContent }} />
      <p className={`leg-raise-info`}>{exerciseSetsReps}</p>
    </div>
  );
}

export default ExerciseCard1;
