import { IoArrowForward } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
// import { Fade } from "react-awesome-reveal";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";


//! La libreria Fade es con la directiva USE CLIENT

const ProductCard = ({ products }) => {

    return (
        <section className="w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* <Fade triggerOnce="true"> */}
                <section className=" h-[517px] content-end">
                    {products.novedad ?
                        <p className="bg-green-100 w-[90px] dark:bg-green-900 dark:text-green-300 text-green-800 text-2xl font-medium me-2 px-2.5 py-0.5">
                            <span>Nuevo</span>
                        </p>
                        :
                        ""}
                    <Image
                        alt="imagen"
                        src={products.imagen}
                        className="h-[250px] w-auto align-center m-auto"
                        width={200}
                        height={200}
                    >
                    </Image>

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{products.nombre}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{products.caracteristicas}</p>
                        <h5 className="my-8 text-3xl font-bold text-gray-900 dark:text-white text-center">${products.precio}</h5>
                        <div className="gap-5 flex justify-between">

                            <Link href={`/pages/catalogo/producto/${products.id}`} className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-lg">
                                <p className="m-auto flex items-center">
                                    Ver detalles
                                    <IoArrowForward className="rtl:rotate-180 w-4 h-4 ms-2" />
                                </p>
                            </Link>
                            <button href="#" className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <p className="m-auto flex items-center">
                                    Agregar
                                    <FaShoppingCart className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                                </p>
                            </button>

                        </div>
                    </div>
                </section>
            {/* </Fade> */}
        </section>
    )
}

export default ProductCard
