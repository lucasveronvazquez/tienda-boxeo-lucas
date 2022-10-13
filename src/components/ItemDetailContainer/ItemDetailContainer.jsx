import { useState, useEffect } from "react";
import { products } from "../../dataBase/products";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";




export const ItemDetailContainer = ()=>{
     
    const {id} = useParams();
    const [item , setItem] = useState({});

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })

    useEffect(()=>{
        const getProduct = async()=>{
           const productos = await promesa;
           const producto = productos.find(elm=>elm.id === parseInt(id));
           setItem(producto);

    }
    getProduct();
},[id])

return(
      <div>
        <ItemDetail item={item}/>
      </div>
)

}