'use client'
import { createContext, useContext, useState } from "react"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)
export const CartProvider = ({ children }) => {


    //Funcion para agregar la cantidad
    const [quantity, setCounter] = useState(1);

    const restCounter = () => {
        if (quantity > 1) {
            setCounter(quantity - 1);
        }
    };

    const addCounter = () => {
        return setCounter(quantity + 1)
    }


    //* FUNCIONES PARA EL CARRITO ***********************************************
    //* "CART" tiene los productos y dentro esta la prop quantity con la cantidad

    // 1. Agregar al carrito
    const [cart, setCart] = useState([])
    console.log(cart);

    const addToCart = (item) => {
        setCart([...cart, item])

        //TODO agregar libreria de NOTIFICACION que se agregó
    }

    // 2. Funcion para eliminar productos del carrito
    const emptyCart = () => {

        //TODO agregar libreria de NOTIFICACION que se va a elimiar todo

        setCart([])
        console.log("El carrito se vació");
    }

    // 3. Funcion para sacar un producto del carrito
    const removeProduct = (id) => {
        const delProduct = setCart( cart.filter(prod => prod.id !== id))
        return delProduct
    }


    // 4. Sumar los precios de los productos
    const valueCart = () => {
        const totalProductsValues = cart.reduce((valueCart, product) => valueCart + product.precio * product.quantity, 0)
        return totalProductsValues
    }
    

    //5. Sumar las cantidades de los productos
    const quantityCart = () => {
        const totalProductsQuantity = cart.reduce((quantityCart, product) => quantityCart + product.quantity, 0)
        return totalProductsQuantity
    }








    return (
        <CartContext.Provider
            value={{
                addToCart,
                quantity,
                restCounter,
                addCounter,
                cart,
                emptyCart,
                valueCart,
                quantityCart,
                removeProduct
            }}
        >
            {children}
        </CartContext.Provider>
    )
}