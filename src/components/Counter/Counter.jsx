import { useState } from "react";
import "./Counter.scss";
import { Button } from "../Button/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [chang, setChang] = useState(true);

  const change = () => {
    setChang(!chang);
  };

  function onResp() {
    setCount(0);
  }

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };
  const onClickDivide = () => {
    setCount(count / 2);
    if (count === 0) {
      alert("нет результата");
    }
  };
  const onClickMultiply = () => {
    setCount(count * 2);
    if (count === 0) {
      alert("нет результата");
    }
  };

  const inputHandler = (e) => {
    setCount(+e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <input
          className="inputCount"
          type="number"
          value={count}
          onChange={(event) => inputHandler(event)}
        />
        {chang ? (
          <div>
            <Button className="minus" onClick={onClickMinus}>
              - Минус
            </Button>
            <Button className="plus" onClick={onClickPlus}>
              Плюс +
            </Button>
          </div>
        ) : (
          <div>
            <Button className="minus" onClick={onClickDivide}>
              / Разделить
            </Button>
            <Button className="plus" onClick={onClickMultiply}>
              Умножить *
            </Button>
          </div>
        )}
        <div>
          <Button className="reset" onClick={change}>
            Поменять
          </Button>
          <Button className="regimeChange" onClick={onResp}>
            Сбросить
          </Button>
        </div>
      </div>
    </div>
  );
};
