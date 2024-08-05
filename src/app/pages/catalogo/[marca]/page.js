'use client'
import ProductList from '@/app/components/catalogo/ProductList'
import React from 'react'
import mockApi from '../../../utils/mockApi.json'
import { useParams } from 'next/navigation';

export default function Marca() {

    const {marca} = useParams()
    console.log(marca);

    const data = mockApi;
    const products = data.filter((item) => (item.marca.toLocaleLowerCase() === marca.toLocaleLowerCase()))
    console.log(products);

    return (
        <section className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
            <ProductList products={products}/>
        </section>
    )
}