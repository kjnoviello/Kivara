import React from 'react'
import ProductCard from './ProductCard'
// import mockApi from '../../utils/mockApi.json'

const ProductList = ({products}) => {

    console.log(products);
    return (
        <>
            {products.map((product)=>(
                <>
                    <section className="w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <ProductCard key={product.id} products={product}/>
                    </section>
                </>
            ))}
        </>
    )
}

export default ProductList