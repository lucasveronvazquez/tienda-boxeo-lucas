import './ItemListContainer.css';
import {ItemList} from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


export const ItemListContainer = () => {

    const {categoryId} = useParams();

    const [productos, setProductos] = useState([]);

    const  [loading, setLoading] = useState(true);


   
    useEffect(()=>{
       
    const queryRef = categoryId ? query (collection(db,"items"), where("category","==", categoryId)):collection(db, "items");
    getDocs(queryRef).then((response)=>{
        const results = response.docs;
        const docs = results.map(doc=>{
            return{
                ...doc.data(),
                id:doc.id
             }
            })
            setProductos(docs);
            setLoading(false);
    });
    

    },[categoryId])

    return(
        <div className="container">
            
            {
                loading ?
                <p>cargando..</p> :

            <ItemList items={productos}/>
            
            }
            
        </div>
        
    )
}
  