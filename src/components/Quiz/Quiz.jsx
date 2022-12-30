import "./Quiz.scss";
import { Game } from "../gameAndEnd/Game";
import { Result } from "../gameAndEnd/Result";
import { useState } from "react";

export const Quiz = () => {
  const questions = [
    {
      title: "React - это ... ?",
      variants: ["библиотека", "фреймворк", "приложение"],
      correct: 0,
    },
    {
      title: "Компонент - это ... ",
      variants: [
        "приложение",
        "часть приложения или страницы",
        "то, что я не знаю что такое",
      ],
      correct: 1,
    },
    {
      title: "Что такое JSX?",
      variants: [
        "Это простой HTML",
        "Это функция",
        "Это тот же HTML, но с возможностью выполнять JS-код",
      ],
      correct: 2,
    },
  ];

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="Quiz">
      {step !== questions.length ? (
        <Game
          questions={questions}
          step={step}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result
          setStep={setStep}
          correct={correct}
          questions={questions}
          setCorrect={setCorrect}
        />
      )}
    </div>
  );
};
