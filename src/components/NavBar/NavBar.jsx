import './NavBar.css';
import ImagenLogo from '../../assets/box.jpg';
import { CartWidget } from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () =>{

    return (
        <nav className='navBar'>
            <Link className='logo' to='/'><img src={ImagenLogo} alt="logo" /></Link>
            <div className="list">
                <Link to='/'>Inicio</Link> 
                <NavLink id='link1' className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/guantes'>Guantes</NavLink>
                <NavLink id='link2' className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/equipamiento'>Equipamiento</NavLink>
                <NavLink id='link3' className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/indumentaria'>Indumentaria</NavLink>
            </div>

            <Link to='/cart'>
               <CartWidget/>
            </Link>
            
        </nav>
    )
}