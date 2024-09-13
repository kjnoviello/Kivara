'use client'
import { createContext, useContext, useState } from "react"
import Swal from "sweetalert2"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)
export const CartProvider = ({ children }) => {


     //* FUNCIONES PARA LA CANTIDAD ***********************************************
    //Funcion para agregar la cantidad
    const [quantity, setQuantity] = useState(1);

    const restQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }


    //* FUNCIONES PARA EL CARRITO ***********************************************
    //* "CART" tiene los productos y dentro esta la prop quantity con la cantidad

    // 1. Agregar al carrito
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const found = cart.find(product => product.id === item.id)
        if (found == undefined) {
            const result = item.stock - quantity
            if (result >= 0) {
                try {
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
                    setQuantity(1)
                } catch (error) {
                    console.error("Error agregando el producto:", error);
                }
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
                    console.error("Error vaciando el carrito:", error);
                }
            }
        });
    }

    // 3. Funcion para sacar un producto del carrito
    const removeProduct = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Quitar del carrito?",
            confirmButtonText: "Delete",
            confirmButtonColor: "#d90429",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    toast: "true",
                    position: "top-end",
                    text: "Se quitó el producto del carrito",
                    iconColor: "#1f2937",
                    timer: 1500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
                try {
                    const delProduct = setCart(cart.filter(prod => prod.id !== id))
                    return delProduct
                } catch (error) {
                    console.error("Error quitando el producto del carrito:", error);
                }
            }
        });
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



    //* FUNCIONES PARA LA COMPRA ***********************************************
    // Funcion para confirmar la compra
    // 1- Que se muestre un loading
    // 2- Que reste el stock del producto y actualice el stock del mismo.
    // 3- Que se grabe un comprobante con el detalle de la compra (nombre, cantidad, fecha??, n° ticket)
    // 4- Que se dirija a la pagina de orders donde muestre el n° ticket, ponga el carrito en 0 y ponga el loading en false
    // 5-





    return (
        <CartContext.Provider
            value={{
                addToCart,
                quantity,
                restQuantity,
                addQuantity,
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