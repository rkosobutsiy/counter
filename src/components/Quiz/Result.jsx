import "./Quiz.scss";
import { Button } from "../Button/Button";

export const Result = ({ correct, questions, setOpen, setStep }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <Button className="restart" onClick={() => setStep(0)}>
        Попробовать снова
      </Button>
      <a href="/">
        <Button className="complete" onClick={() => setOpen(false)}>
          Завершить
        </Button>
      </a>
    </div>
  );
};
