import Carrito from '@/app/components/carrito/Carrito'
import Header from '@/app/components/header/Header';
import React from 'react'

export const metadata = {
  title: "Carrito - Kivara",
  description: "Revisa y gestiona los productos en tu carrito de compras en Kivara. Listo para finalizar tu compra? Hazlo aquí.",
  keywords: "Kivara, carrito de compras, productos, finalizar compra",
  author: "Kivara",
};

const carrito = () => {
  return (
    <main>
      <Header />
      <Carrito />
    </main>
  )
}

export default carrito