import {useState} from "react";
import './index.scss'


export const Counter = () => {
    const [count, setCount] = useState(0);
    const [chang, setChang] = useState(true);

    const change = () => {
        setChang(!chang)
    }
    function onResp () {
        setCount( 0)
    }

    const onClickPlus = () => {
        setCount(count + 1)
    }
    const onClickMinus = () => {
        setCount(count - 1)
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
        setCount( + e.target.value )
    }

    return (
        <div>
            <h2>Счетчик:</h2>
            <input
                className='inputCount'
                type='number'
                value={count}
                onChange={(event => inputHandler(event))}/>
            {chang ? (
                <div>
                    <button
                        className="minus"
                        onClick={onClickMinus}
                    >
                        - Минус
                    </button>
                    <button
                        className="plus"
                        onClick={onClickPlus}
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
                    onClick={onResp}
                >
                    Сбросить
                </button>
            </div>
        </div>
    )
}
