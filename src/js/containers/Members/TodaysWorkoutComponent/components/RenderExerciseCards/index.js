import { useCallback, useState, forwardRef } from "react";
import ExerciseCard from "../ExerciseCard";
import { theme } from "../../theme";
import "./style.css";

function RenderExerciseCards({ exerciseCounts }) {
  const exerciseCardContainerHeights = [{ containerHeight: theme.others.HEIGHT_178BCA }, { containerHeight: theme.others.HEIGHT_178448 }, { containerHeight: theme.others.HEIGHT_178448 }, {}];
  const generateShouldRenderDivider = useCallback((index) => {
    return { shouldRenderDivider: [0, 1, 2].includes(index) };
  }, []);

  return (
    <div className={`exercise-count-container3`}>
      {exerciseCounts.map((data, index) => {
        return <ExerciseCard {...data} key={index} {...exerciseCardContainerHeights[index]} {...generateShouldRenderDivider(index)} />;
      })}
    </div>
  );
}

export default RenderExerciseCards;
