import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {

    const {getTotalProducts} = useContext(CartContext);

    return (
        <div>
        <FontAwesomeIcon className='botonCarro' icon={faCartShopping}/>
        <span> {getTotalProducts()} </span>
        </div>
    )
}