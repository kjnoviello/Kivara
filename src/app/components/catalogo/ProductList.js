import React from 'react'
import ProductCard from './ProductCard'

const ProductList = async ({products}) => {

    return (
        <>
            {products.map((product) => (
                <ProductCard key={product.id} products={product} />
            ))}
        </>
    )
}

export default ProductList