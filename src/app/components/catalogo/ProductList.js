import React from 'react'
import ProductCard from './ProductCard'
// import mockApi from '../../utils/mockApi.json'

const ProductList = ({products}) => {

    // const products = mockApi;

    console.log(products);
    return (
        <>
            {products.map((product)=>(
                <>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <ProductCard key={product.id} products={product}/>
                    </div>
                </>
            ))}
        </>
    )
}

export default ProductList