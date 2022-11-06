
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './ItemDetail.css';

export const ItemDetail = ({item})=>{

    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useContext(CartContext);

    const alerta = ()=> Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `agregaste ${item.title} al carrito`,
        showConfirmButton: false,
        timer: 1500
      })

    const agregarProducto = (quantity)=>{
    
        addProduct(item, quantity);
        alerta();
        setGoToCart(true);
    }

    return(
        <div className="detail-container">

            <div className="img-container">
                <img src={item.pictureUrl} alt={item.title} />
            </div>

            <div className="img-container">
              <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            
            
            {
                goToCart 
                ?<div className="estilosTerminarCompra">
                <button className="terminarCompra"><Link id="linkCompra1" to={"/cart"}>Terminar compra</Link></button> 
                  
                <button className="terminarCompra"><Link id="linkCompra2" to={"/"}>Seguir navegando</Link></button>

                 
                  </div>
                : <ItemCount stock={item.stock} initial={1} onAdd={agregarProducto}/>
            }
        </div>
    )
}