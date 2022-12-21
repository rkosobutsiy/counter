import { NavLink, Outlet} from 'react-router-dom';
import block from 'bem-cn';
import './Layout.scss';

export const Layout = () => {
    const b = block('layout')
    return (
        <>
            <div className={b('container')}>
                <header>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/counter">Count</NavLink>
                    <NavLink to="/modal">Modal</NavLink>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
