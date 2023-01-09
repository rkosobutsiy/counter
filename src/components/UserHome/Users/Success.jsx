import React from "react";
import { Button } from "../../Button/Button";
import ok from "../../../assets/images/icon/ok.svg";

export const Success = ({ count, setSuccess }) => {
  const back = () => {
    setSuccess(false);
  };

  const num_words = (value, words) => {
    value = Math.abs(value) % 100;
    let num = value % 10;
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[1];
  };

  return (
    <div className="success-block">
      <img src={ok} alt="Success" />
      <h3>Успешно!</h3>
      <p>{`${num_words(count, ["", "Всем"])} ${count} ${num_words(count, [
        "пользователю",
        "пользователям",
      ])} отправлено приглашение.`}</p>
      <Button onClick={back} className="send-invite-btn">
        Назад
      </Button>
    </div>
  );
};
