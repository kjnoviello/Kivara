"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const ProductDetail = ({product}) => {
    const router = useRouter();

    return (
        <div className="flex flex-col p-8 items-center bg-white border border-gray-200 rounded-lg shadow md:px-16 md:flex-row md:w-auto dark:border-gray-700 dark:bg-gray-800 h-auto">
            <Image
                className="object-cover w-46 rounded-t-lg h-auto md:h-[600px] md:w-[50%] md:rounded-none md:rounded-s-lg"
                src={product.imagen}
                alt={product.nombre}
                width={600}
                height={600}
            />
            <div className="flex flex-col md:pr-8 justify-between p-4 leading-normal">
                <h5 className="mb-2 justify-end flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.marca}
                </h5>
                <h5 className="my-8 text-5xl font-bold text-gray-900 dark:text-white text-center">
                    ${product.precio}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                </ul>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.descripcion}
                </p>
                <div className="gap-5 flex justify-between">
                    <button
                        onClick={() => {
                            router.back();
                        }}
                        className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-lg"
                    >
                        <p className="m-auto flex items-center">
                            Volver
                            <IoArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                        </p>
                    </button>
                    <button className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <p className="m-auto flex items-center">
                            Agregar
                            <FaShoppingCart className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
