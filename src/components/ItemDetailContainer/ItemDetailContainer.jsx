import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { doc, getDoc} from "firebase/firestore";



export const ItemDetailContainer = ()=>{
     
    const {id} = useParams();
    const [item , setItem] = useState({});

   

    useEffect(()=>{
        const getProduct = async()=>{
           

        const queryRef = doc(db, "items", id);
        const response =await getDoc(queryRef);    
        const newDoc = {
          ...response.data(),
          id:response.id
        }
        setItem(newDoc);
    }
    getProduct();
},[id])

return(
      <div>
        <ItemDetail item={item}/>
      </div>
)

}