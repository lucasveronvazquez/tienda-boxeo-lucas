import './NavBar.css';
import ImagenLogo from '../../assets/box.jpg';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () =>{

    return (
        <nav className='navegation'>
            <img className='logo' src={ImagenLogo} alt="logo" />
            <ul className="list">
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Guantes</a></li>
                <li><a href="/">Equipamiento</a></li>
                <li><a href="/">Indumentaria</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}