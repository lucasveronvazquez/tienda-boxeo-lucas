import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './CartContainer.css';

export const CartContainer = ()=>{
    const value = useContext(CartContext);
    const {productosCarrito, getTotalPrice, removeItem} = value;
    const [compraId, setCompraId] = useState("");
    const purchaseAlert=()=>{
        Swal.fire({
            icon:'success',
            title:'gracias por tu compra!',
            html:`<p>El código de tu orden es ${compraId}`,
            confirmButtonColor:'#3085d5',
            cancelButtonColor:'#d33',
            confirmButtonText:'seguir navegando'
        }).then(function(){
            window.location="/";

        })
    }

    if (productosCarrito.length === 0){
        return (
            <div>
                <p>No hay productos en el carrito</p>
                <Link to="/">Click aquí para ver productos</Link>
            </div>
        )
    }

    const sendOrder = (evt)=>{
     evt.preventDefault();
     const compra = {
       buyer:{
            name:evt.target[0].value,
            phone:evt.target[1].value,
            email:evt.target[2].value
        },
        items: productosCarrito,
        total:getTotalPrice()
     }
     const queryRef=collection(db,'orders');
     addDoc(queryRef, compra).then((resultado)=>{
        
        setCompraId(resultado.id);
        purchaseAlert();
       
      })
      
     }
    

    return(
        <div>
           

            <div className='carrito'>

               {
                productosCarrito.map((producto=>

                    <div className='productoEnCarro'>
                        <div className='imagenCarro'>
                        <img src={producto.pictureUrl}  alt={producto.title} />
                        </div>
                        <div className='infoProducto'>
                        <h3>{producto.title}</h3>
                        <p>precio por unidad: ${producto.price}</p>
                        <p>cantidad: {producto.quantity}</p>
                        <p>precio por cantidad: ${producto.quantityPrice} </p>
                        <button onClick={()=>removeItem(producto.id)}><FontAwesomeIcon icon={faTrash} />Eliminar</button>
                        </div>
                    </div>
                ))
               }
                  <p><strong>precio total:$ </strong> {getTotalPrice()} </p>
                  <form onSubmit={sendOrder}>
                     <label>Nombre</label>
                     <input type='text' placeholder='Nombre' required></input>
                     <label>Teléfono</label>
                     <input type='tel' placeholder='Teléfono'required></input>
                     <label>Correo</label>
                     <input type='email' placeholder='Ingrese su correo'required></input>
                     <button type='submit'>Enviar orden de compra</button>
                  </form>
            </div>
        </div>
    )
}