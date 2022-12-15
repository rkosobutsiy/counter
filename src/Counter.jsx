import {useState} from "react";
import './index.scss'


export const Counter = () => {
    let [count, setCount] = useState(0);
    const [chang, setChang] = useState(true);

    const change = () => {
        setChang(!chang)
    }
    function res () {
        setCount(count = 0)
    }

    const plus = () => {
        setCount(++ count)
        console.log(plus)
    }
    const minus = () => {
        setCount(-- count)
    }
    const onClickDivide = () => {
        setCount(count / 2)
        if (count === 0) {
            alert('нет результата')
        }
    }
    const onClickMultiply = () => {
        setCount(count * 2)
        if (count === 0) {
            alert('нет результата')
        }
    }

    const inputHandler = (e) => {
        setCount(count = e.target.value )
    }

    return (
        <div>
            <h2>Счетчик:</h2>
            <input className='inputCount' value={count} onChange={(event => inputHandler(event))}/>
            {chang ? (
                <div>
                    <button
                        className="minus"
                        onClick={minus}
                    >
                        - Минус
                    </button>
                    <button
                        className="plus"
                        onClick={plus}
                    >
                        Плюс +
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        className="minus"
                        onClick={onClickDivide}
                    >
                        / Разделить
                    </button>
                    <button
                        className="plus"
                        onClick={onClickMultiply}
                    >
                        Умножить *
                    </button>
                </div>
            )}
            <div>
                <button
                    className="reset"
                    onClick={change}
                >
                    Поменять
                </button>
                <button
                    className="regimeChange"
                    onClick={res}
                >
                    Сбросить
                </button>
            </div>
        </div>
    )
}
