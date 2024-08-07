'use client'
import ProductList from '@/app/components/catalogo/ProductList';
import React from 'react'
import mockApi from '../../utils/mockApi.json'


// export const metadata = {
//     title: "Catálogo - Kivara",
//     description: "Explora nuestro catálogo de productos tecnológicos en Kivara. Encuentra las mejores ofertas en móviles, laptops, accesorios y más.",
//     keywords: "Kivara, catálogo, productos tecnológicos, móviles, laptops, accesorios, ofertas",
//     author: "Kivara",
// };


export default function Catalogo() {

    const products = mockApi

    return (
        <main className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
            {!products ? (
                <div>Loading...</div>
            ) : (
                <ProductList products={products} />
            )}
        </main>
    )
}
