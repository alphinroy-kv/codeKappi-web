import { useCallback, useState, forwardRef } from "react";
import ExerciseCard1 from "../ExerciseCard1";
import "./style.css";

function RenderExerciseCards1({ exerciseCardsData }) {
  return (
    <div className={`exercise-list`}>
      {exerciseCardsData.map((data, index) => {
        return <ExerciseCard1 {...data} key={index} />;
      })}
    </div>
  );
}

export default RenderExerciseCards1;
