import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = userAnswers.length;

  const completedQuiz = activeQuestion === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (completedQuiz) {
    return <Summary answers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSkipQuestion={handleSkipAnswer}
        onHandleSelect={handleSelectAnswer}
      />
    </div>
  );
}
