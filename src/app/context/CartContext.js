'use client'
import { createContext, useContext, useState } from "react"
import Swal from "sweetalert2"

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
            if (result > 0) {
                setCart([...cart, item])
                Swal.fire({
                    position: "top-end",
                    toast: "true",
                    icon: "success",
                    iconColor: "#1f2937",
                    title: "Producto agregado!",
                    showConfirmButton: false,
                    timer: 1500,
                })
            } else {
                Swal.fire({
                    position: "center",
                    toast: "true",
                    icon: "error",
                    iconColor: "#1f2937",
                    title: "No hay suficientes unidades disponibles!",
                    showConfirmButton: false,
                    timer: 1500,
                })
            }
        } else {
            Swal.fire({
                position: "center",
                toast: "true",
                icon: "warning",
                iconColor: "#1f2937",
                title: "Ya agregaste el producto!",
                showConfirmButton: false,
                timer: 1500,
            })
        }
    }

    // 2. Funcion para eliminar productos del carrito
    const emptyCart = () => {
        Swal.fire({
            icon: "warning",
            title: "Eliminar todos los productos del carrito?",
            confirmButtonText: "Delete",
            confirmButtonColor: "#d90429",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "Carrito vacío",
                    text: "Se quitaron los productos del carrito",
                    iconColor: "#1f2937",
                    timer: 1500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
                try {
                    setCart([])
                    console.log("El carrito se vació");
                } catch (error) {
                    console.error("Error deleting product:", error);
                }
            }
        });
    }

    // 3. Funcion para sacar un producto del carrito
    const removeProduct = (id) => {
        const delProduct = setCart(cart.filter(prod => prod.id !== id))
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