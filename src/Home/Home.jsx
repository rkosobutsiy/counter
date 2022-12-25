import { Modal } from "../components/Modal/Modal";
import { useState } from "react";
import "./Home.scss";
import { Counter } from "../components/Counter/Counter";
import { Tooltip } from "../components/Tooltip/Tooltip";

export const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const [activeCounter, setActiveCounter] = useState(false);
  return (
    <>
      <div className="navigation">
        <nav>
          <ul className="nav">
            <Tooltip content="Счётчик" position="right">
              <button onClick={() => setActiveCounter(true)}>Count</button>
            </Tooltip>
            <Tooltip content="Модальное окно" position="right">
              <button onClick={() => setModalActive(true)}>Modal</button>
            </Tooltip>
          </ul>
        </nav>
      </div>
      <Counter active={activeCounter} setActive={setActiveCounter} />
      <Modal open={modalActive} setOpen={setModalActive} children>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          deserunt distinctio, ea eos excepturi expedita ipsum modi molestias
          necessitatibus quae quas qui quisquam, unde, voluptatem voluptatibus.
          Deserunt nemo rem vel!
        </p>
      </Modal>
    </>
  );
};
