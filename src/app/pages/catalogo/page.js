import ProductCard from '@/app/components/catalogo/ProductCard'
import ProductDetail from '@/app/components/catalogo/ProductDetail'
import React from 'react'

const Catalogo = () => {
    return (
        <section className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductDetail />
            
        </section>
    )
}

export default Catalogo