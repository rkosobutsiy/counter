import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";
import "./Home.scss";
import { Counter } from "../../components/Counter/Counter";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { Button } from "../../components/Button/Button";
import { Quiz } from "../../components/Quiz/Quiz";
import { UserHome } from "../../components/UserHome/UserHome";

export const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const [activeCounter, setActiveCounter] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  return (
    <>
      <div className="navigation">
        <nav>
          <ul className="nav">
            <Tooltip content="Счётчик" position="right">
              <Button onClick={() => setActiveCounter(true)}>Счётчик</Button>
            </Tooltip>
            <Tooltip content="Модальное окно" position="right">
              <Button onClick={() => setModalActive(true)}>
                Модальное окно
              </Button>
            </Tooltip>
            <Tooltip content="Опросник" position="right">
              <Button onClick={() => setActiveQuiz(true)}>Опросник</Button>
            </Tooltip>
            <Tooltip content="Users" position="right">
              <Button onClick={() => setActiveUser(true)}>Users</Button>
            </Tooltip>
          </ul>
        </nav>
      </div>
      <Modal open={activeCounter} setOpen={setActiveCounter} children>
        <Counter />
      </Modal>
      <Modal open={modalActive} setOpen={setModalActive} children>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          ad consequatur dicta distinctio eaque explicabo, id illo iure maiores
          minus, nulla porro possimus, praesentium recusandae sapiente
          voluptatem voluptates. Provident, vitae?
        </p>
      </Modal>
      <Modal open={activeQuiz} setOpen={setActiveQuiz} children>
        <Quiz setOpen={setActiveQuiz} />
      </Modal>
      <Modal open={activeUser} setOpen={setActiveUser} children>
        <UserHome setOpen={setActiveUser} />
      </Modal>
    </>
  );
};
