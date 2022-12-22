import {NavLink, Outlet} from 'react-router-dom';
import block from 'bem-cn';
import './Layout.scss';
import {Tooltip} from "../Tooltip/Tooltip";

export const Layout = () => {
    const b = block('layout')
    return (<>
            <div className={b('container')}>

                <header>
                    <Tooltip position="left" content="Главная страница">
                        <NavLink
                            className='link'
                            to="/"
                        >
                            Home
                        </NavLink>
                    </Tooltip>
                    <Tooltip
                        position="bottom"
                        content="Счетчик"
                        style={{ width: '120px' }}
                    >
                        <NavLink
                            className='link'
                            to="/counter"
                        >
                            Count
                        </NavLink>
                    </Tooltip>
                    <Tooltip position="right" content="Модальное окно">
                        <NavLink
                            className='link'
                            to="/modal"
                        >
                            Modal
                        </NavLink>
                    </Tooltip>


                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>)
}
