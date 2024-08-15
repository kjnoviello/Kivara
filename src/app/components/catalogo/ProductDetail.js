"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";
import Counter from "../counter/counter";
import { FaStar } from "react-icons/fa";

const ProductDetail = ({ product }) => {
    const router = useRouter();

    return (
        <section className="flex flex-col p-8 items-center bg-white border border-gray-200 rounded-lg shadow md:px-16 md:flex-row md:w-auto dark:border-gray-700 dark:bg-gray-800 h-auto">

            {/*//TODO Implementar un carousel */}
            <Image
                className="object-cover w-46 rounded-t-lg h-auto md:h-[600px] md:w-[50%] md:rounded-none md:rounded-s-lg"
                src={product.imagen}
                alt={product.nombre}
                width={600}
                height={600}
                priority="true"
            />
            {/* <Fade triggerOnce="true" direction="right"> */}
            <div className="flex flex-col md:pr-8 justify-between p-4 leading-normal">
                <div>
                    {product.novedad ?
                        <p className="animate-bounce bg-green-100 w-[90px] dark:bg-green-900 dark:text-green-300 text-green-800 text-2xl font-medium me-2 px-2.5 py-0.5">
                            <span>Nuevo</span>
                        </p>
                        :
                        ""}
                </div>
                <h5 className="mb-2 justify-end flex text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <i><u>{product.marca}</u></i>
                </h5>
                <h5 className="my-8 text-5xl font-bold text-gray-900 dark:text-white text-center">
                    ${product.precio}
                </h5>
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.nombre}
                </h5>
                <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <li>
                        <strong>Sistema operativo: </strong>
                        {product.data.so}
                    </li>
                    <li>
                        <strong>Procesador: </strong>
                        {product.data.procesador}
                    </li>
                    <li>
                        <strong>Almacenamiento: </strong>
                        {product.data.memoria}
                    </li>
                    <li>
                        <strong>Batería: </strong>
                        {product.data.bateria}
                    </li>
                    <li>
                        <strong>Color: </strong>
                        {product.data.color}
                    </li>
                    <div className="flex gap-1">
                        <li>
                            <strong>Valoracion: </strong>
                            {product.valoraciones}
                        </li>
                        <FaStar className="self-center text-yellow-400"/>
                    </div>

                </ul>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.descripcion}
                </p>
                <div className="gap-5 flex flex-col sm:flex-row justify-between">
                    <Counter />
                    <div className="w-1/2 gap-5 flex flex-col sm:flex-row justify-between self-center sm:self-end md:flex-col lg:flex-row">
                        <button
                            onClick={() => {
                                router.back();
                            }}
                            className="sm:w-[130px] w-full m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-lg"
                        >
                            <p className="m-auto flex items-center">
                                <IoArrowBack className="rtl:rotate-180 w-4 h-4 me-2" />
                                Volver
                            </p>
                        </button>
                        <button className="w-full sm:w-[130px] md:[130px] lg:w-full m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <p className="m-auto flex items-center">
                                Agregar
                                <FaShoppingCart className="rtl:rotate-180 w-4 h-4 ms-2" />
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            {/* </Fade> */}
        </section>
    );
};

export default ProductDetail;
