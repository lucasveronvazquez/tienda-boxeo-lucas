import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=> {
    const [productosCarrito, setProductosCarrito] = useState([]);

    const isInCart = (id)=>{
        const productExists = productosCarrito.some((element)=>element.id === id);
        return productExists;
    }

    const addProduct = (item, quantity)=>{
        const productosCarritoCopy = [...productosCarrito];

        if (isInCart(item.id)){
          
          const posProduct = productosCarritoCopy.findIndex((element)=>element.id === item.id);
          productosCarritoCopy[posProduct].quantity += quantity;
          productosCarritoCopy[posProduct].quantityPrice = productosCarritoCopy[posProduct].quantity* productosCarritoCopy[posProduct].price;
          setProductosCarrito(productosCarritoCopy);

        }else{
            const newProduct = {
                ...item,
                quantity:quantity,
                quantityPrice:quantity*item.price,
            };
            
            productosCarritoCopy.push(newProduct);
            setProductosCarrito(productosCarritoCopy);
        }

    }

    const getTotalPrice = ()=>{
        const precioTotal = productosCarrito.reduce((acc, curr)=>acc + curr.quantityPrice,0);
        return precioTotal;
    }

    const getTotalProducts = ()=>{
        const totalProducts = productosCarrito.reduce((acc, curr)=>acc+curr.quantity,0);
        return totalProducts;
    }

    const removeItem = (id)=>{
        const newProducts = productosCarrito.filter((element)=>element.id !== id);
        setProductosCarrito(newProducts) ;
    }

    return(
        <CartContext.Provider value={{productosCarrito, addProduct, getTotalPrice, getTotalProducts, removeItem}}>
          {children}
        </CartContext.Provider>
    )
}