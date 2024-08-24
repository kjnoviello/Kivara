'use client'
import React, { Suspense, useState } from 'react';
import { IoArrowDown } from "react-icons/io5";
import { AiOutlineEnter } from "react-icons/ai";
import Link from 'next/link';

const SearchMarca = ({ products }) => {

    // Función para obtener marcas únicas
    const listadoMarcas = (item) => {
        const marcas = item.map(product => product.marca);
        return [...new Set(marcas)];
    };
    const marcasUnicas = listadoMarcas(products);

    // Estado para manejar el menú de marcas
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className="gap-x-3 sm:gap-x-12 mt-4 justify-start flex pl-0 sm:pl-12">
            <div className="relative">
                <button type="button" className="cursor-pointer flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" onClick={toggleDropdown} aria-expanded="false">
                    Marcas
                    <IoArrowDown />
                </button>

                {/* Menú de marcas */}
                <div className={`${dropdown ? "" : "hidden"} absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}>
                    <div className="p-4">

                        <Suspense fallback={<h1>Cargando marcas</h1>} >
                            {marcasUnicas.map((marca, index) => (
                                <div key={index} className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <AiOutlineEnter className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 scale-x-[-1]" />
                                    </div>
                                    <div className="flex-auto">
                                        <Link href={`/pages/catalogo/${marca}`} className="block font-semibold text-gray-900">
                                            <button onClick={toggleDropdown}>
                                                {marca}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Suspense>

                        <hr className='my-2' />
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <AiOutlineEnter className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 scale-x-[-1]" />
                            </div>
                            <div className="flex-auto">
                                <Link href={"/pages/catalogo"} className="block font-semibold text-gray-900">
                                    <button onClick={toggleDropdown}>
                                        Todas las marcas
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link href="/pages/catalogo/novedad" >
                <button className="text-sm font-semibold leading-6 text-gray-900">Novedades</button>
            </Link>
        </div>
    )
}

export default SearchMarca