import { IoArrowForward } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image
                        alt="imagen"
                        src="/catalogo/celular01.jpg"
                        className= "h-[250px] w-auto align-center m-auto"
                        width={200}
                        height={200}
                        >
                    </Image>
                </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Celular Samsung Galaxy A15</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">LTE 4GB 128GB Blue Black</p>
                <h5 className="my-8 text-3xl font-bold text-gray-900 dark:text-white text-center">$120.000</h5>
                <div className="gap-5 flex justify-between">

                    {/*//TODO REEMPLAZAR POR COMPONENTE BOTON */}
                    <a href="#" className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-lg">
                        <p className="m-auto flex items-center">
                            Ver detalles
                            <IoArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
                        </p>
                    </a>
                    <a href="#" className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <p className="m-auto flex items-center">
                            Agregar 
                            <FaShoppingCart className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
                        </p>
                    </a>
                    
                </div>
            </div>
        </div>

    )
}

export default ProductCard