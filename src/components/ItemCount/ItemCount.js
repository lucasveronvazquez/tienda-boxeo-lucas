import React, { useState } from 'react';


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
   <div>
    <p>{count}</p>
   <button onClick={sumar}>+</button>
   <button>agregar al carrito</button>
   <button onClick={restar}>-</button>
   </div>
   )

    };