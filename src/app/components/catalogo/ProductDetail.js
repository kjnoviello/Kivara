'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { IoArrowForward } from 'react-icons/io5'

const ProductDetail = () => {

    const router = useRouter();

    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-auto dark:border-gray-700 dark:bg-gray-800 h-auto">
                <Image
                    className="object-cover w-46 rounded-t-lg h-auto md:h-[600px] md:w-[50%] md:rounded-none md:rounded-s-lg" 
                    src="/catalogo/celular01.jpg" 
                    alt="imagen producto"
                    width={600}
                    height={600}
                    >
                </Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="my-8 text-5xl font-bold text-gray-900 dark:text-white text-center">$120.000</h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Celular Samsung Galaxy A15</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">LTE 4GB 128GB Blue Black</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">o odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut reru
                    </p>
                    <div className="gap-5 flex justify-between">

                        {/*//TODO REEMPLAZAR POR COMPONENTE BOTON */}
                        <button onClick={()=> { router.back() }} className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-lg">
                            <p className="m-auto flex items-center">
                                Volver
                                <IoArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
                            </p>
                        </button>
                        <button href="#" className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <p className="m-auto flex items-center">
                                Agregar 
                                <FaShoppingCart className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
                            </p>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail