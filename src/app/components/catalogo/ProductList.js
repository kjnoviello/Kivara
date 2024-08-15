import React from 'react'
import ProductCard from './ProductCard'
// import mockApi from '../../utils/mockApi.json'

const ProductList = ({ products }) => {

    return (
        <>
            {products.map((product) => (
                    <ProductCard key={product.id} products={product} />
            ))}
        </>
    )
}

export default ProductList