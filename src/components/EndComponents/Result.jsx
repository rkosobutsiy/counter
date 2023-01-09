import "../Quiz/Quiz.scss";
import { Button } from "../Button/Button";

export const Result = ({ setCorrect, correct, questions, setStep }) => {
  const reset = (index) => {
    setStep(0);
    if (index !== questions.length) {
      setCorrect(0);
    }
  };
  const num_word = (value, words) => {
    value = Math.abs(value) % 100;
    let num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
  };

  return (
    <div className="result">
      <h2>{`Вы отгадали ${correct} ${num_word(correct, [
        "ответ",
        "ответа",
        "ответов",
      ])} из ${questions.length}`}</h2>
      <Button className="restart" onClick={reset}>
        Попробовать снова
      </Button>
    </div>
  );
};
