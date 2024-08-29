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

    const addToCart = (item) => {
        const found = cart.find(product => product.id === item.id)
        if (found == undefined) {
            const result = item.stock - quantity
            if (result >0) {
                setCart([...cart, item])
            } else {
                alert("no hay unidades disponibles")
            }
            //TODO agregar libreria de NOTIFICACION que se agregó
        } else {
            alert("ya se encuentra el producto")
            //TODO agregar libreria de NOTIFICACIONque ya esta el producto
        }
    }

    // 2. Funcion para eliminar productos del carrito
    const emptyCart = () => {

        
        setCart([])
        //TODO agregar libreria de NOTIFICACION que se va a elimiar todo
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