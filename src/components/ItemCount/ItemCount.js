import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);
    const sumar = ()=>{
        if (count<stock){
            setCount(count+1)
           
        } 
    } ;

    const restar = ()=>{
        if (count>initial){
            setCount(count-1)
        }
    }
    
   return (
    <div className='estilosContador'>
    <div className='contenedorControles'>
       <button onClick={restar} className='botonControl'>-</button>
        <p>{count}</p>
        <button onClick={sumar} className='botonControl'>+</button>
    </div>
    <button className='botonAgregar' onClick={()=>onAdd(count)}>Agregar Al Carrito</button>
</div>
   )

    };
