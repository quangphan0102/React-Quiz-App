import { useRef } from "react";
import QUESTIONS from "../questions";

export default function Answers({
  index,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledQuestion = useRef();

  if (!shuffledQuestion.current) {
    shuffledQuestion.current = [...QUESTIONS[index].answers];
    shuffledQuestion.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledQuestion.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== "" ? true : false}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
