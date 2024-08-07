'use client'
import React, { useEffect, useState } from 'react'
import mockApi from '../../../utils/mockApi.json'
import ProductList from '@/app/components/catalogo/ProductList';

const Novedad = () => {

    const [products, setProducts] = useState(null);

    // Funcion para obtener las novedades
    const novedad = mockApi.filter(product => product.novedad === true);

    useEffect(() => {
        setProducts(novedad)
    }, [])

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

export default Novedad