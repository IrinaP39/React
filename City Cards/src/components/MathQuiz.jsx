import { useState } from "react";
import Answer from "./Answer";

function MathQuiz() {
  const generateNumber = () => Math.floor(Math.random() * 10) + 1;

  const [a, setA] = useState(generateNumber());
  const [b, setB] = useState(generateNumber());
  const [score, setScore] = useState(0);

  const updatePoints = (userAnswer) => {
    if (userAnswer === a + b) {
      setScore((prevScore) => prevScore + 1);
    }

    setA(generateNumber());
    setB(generateNumber());
  };

  return (
    <div>
      <Answer a={a} b={b} score={score} updatePoints={updatePoints} />
    </div>
  );
}
export default MathQuiz;
