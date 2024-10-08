'use client'
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { createContext, useContext, useState } from "react"
import Swal from "sweetalert2"
import { db } from "../firebase/config"

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
                    console.log(cart);
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

    // Estado para el numero de comprobante 
    const [orderRef, setOrderRef] = useState(null);
    const router = useRouter()
    
    // Funcion para confirmar la compra
    const confirmOrder = async (values) => {
        const { nombre, email, empresa, fecha, detalle } = values;

        if (cart.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "No hay nada para comprar",
                text: "",
                iconColor: "#1f2937",
                timer: 1500,
                showConfirmButton: false,
            });
            return;
        }

        if (!nombre || !email) {
            Swal.fire({
                icon: "warning",
                title: "Por favor completa todos los campos obligatorios",
                text: "Nombre y email son requeridos",
                iconColor: "#1f2937",
                timer: 1500,
                showConfirmButton: false,
            });
            return;
        }

        try {
            Swal.fire({
                icon: "warning",
                title: "Realizando la compra...",
                text: "Por favor espere mientras procesamos la compra",
                iconColor: "#1f2937",
                timer: 1500,
                showConfirmButton: false,
            });

            // Ajusta el stock de cada producto y lo actualiza
            for (const item of cart) {
                const docRef = doc(db, 'productos', item.id.toString())
                const productDoc = await getDoc(docRef)
                const currentStock = productDoc.data().stock

                if (currentStock >= item.stock) {
                    await updateDoc(docRef, {
                        stock: currentStock - item.quantity
                    });
                } else {
                    console.error(`Stock insuficiente para el producto con ID: ${item.id}`);
                }
                
            }
            Swal.fire({
                icon: "success",
                title: "Compra realizada exitosamente",
                text: "Gracias por comprar con nosotros",
                iconColor: "#1f2937",
                timer: 1500,
                showConfirmButton: false,
            });


            // Si el stock baja a 0 el estado se vuelve false y se oculta del catalogo
            for (const item of cart) {
                const docRef = doc(db, 'productos', item.id.toString())
                const productDoc = await getDoc(docRef)
                const currentStock = productDoc.data().stock

                if (currentStock < 1) {
                    await updateDoc(docRef, {
                        estado: false
                    });
                } else {
                    console.error(`No se pudo cambiar esl estado del producto con ID: ${item.id}`);
                }
            }


            // Se crea una orden en firebase con los detalles de la compra
            const dbRef = collection(db, 'ordenes')
            const order = {
                nombre: values.nombre,
                email: values.email,
                empresa: values.empresa,
                fecha: Timestamp.now(),
                detalle: cart
            }
            const newOrderRef = await addDoc(dbRef, order)
            const newOrderRefID = newOrderRef.id

            setCart([]);
            setOrderRef(newOrderRefID);
            router.push(`/pages/orders`);

        } catch (error) {
            console.error("Error procesando la orden:", error);
            Swal.fire({
                icon: "error",
                title: "Hubo un error en el proceso de la compra",
                text: "Por favor intente más tarde",
                iconColor: "#1f2937",
                timer: 1500,
                showConfirmButton: false,
            });
        }
    };


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
                removeProduct,
                confirmOrder,
                orderRef
            }}
        >
            {children}
        </CartContext.Provider>
    )
}


