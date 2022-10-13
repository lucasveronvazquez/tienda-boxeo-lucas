import './ItemListContainer.css'

import {ItemList} from '../ItemList/ItemList'
import { products } from '../../dataBase/products';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const {categoryId} = useParams();

    const [productos, setProductos] = useState([]);


    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
    useEffect(()=>{
        promesa.then((response)=>{
           if (categoryId){

            const productsFiltered = response.filter(elm => elm.category === categoryId);
            setProductos(productsFiltered);

           }else{
             setProductos(response);
          }
        })
    },[categoryId])

    return(
        <div className="container">
            <ItemList items={productos}/>
            Lista de productos
            
        </div>
        
    )
}
  