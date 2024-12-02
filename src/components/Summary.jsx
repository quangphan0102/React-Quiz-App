import summaryImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ answers }) {
  const skippedAnswers = answers.filter((answer) => answer === null);

  const correctAnswer = answers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const calculateSkipAnswer = Math.round(
    (skippedAnswers.length / answers.length) * 100
  );

  const calculateCorrectAnswer = Math.round(
    (correctAnswer.length / answers.length) * 100
  );

  const calculateIncorrectAnswer =
    100 - calculateSkipAnswer - calculateCorrectAnswer;

  return (
    <div id="summary">
      <img src={summaryImg} alt="Summary Logo" />
      <h2>Quiz Completed</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{calculateSkipAnswer}%</span>
          <span className="text">Skip answer</span>
        </p>
        <p>
          <span className="number">{calculateCorrectAnswer}%</span>
          <span className="text">Correct Answer</span>
        </p>
        <p>
          <span className="number">{calculateIncorrectAnswer}%</span>
          <span className="text">Incorrect Answer</span>
        </p>
      </div>

      <ol>
        {answers.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else if (
            answer !== QUESTIONS[index].answers[0] &&
            answer !== null
          ) {
            cssClasses += " wrong";
          } else {
            cssClasses += " skipped";
          }

          return (
            <li key={index} className="question">
              <p>{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
