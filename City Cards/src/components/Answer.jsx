import { useState } from "react";

function Answer(props) {
  const { a, b, score, updatePoints } = props;
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(Number(inputValue));
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="mathQuitz_form">
      <h2>Ваши очки: {score}</h2>
      <p>
        {a} + {b} = ?
      </p>
      <input
        type="number"
        placeholder="Введите ответ"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Проверить</button>
    </form>
  );
}
export default Answer;
