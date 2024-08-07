'use client'
import React, { useState } from 'react'
import { IoArrowDown, IoSearchSharp  } from "react-icons/io5";
import { AiOutlineEnter } from "react-icons/ai";
import mockApi from '../../utils/mockApi.json'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const pathname = usePathname();

    // Función para obtener marcas únicas
    const listadoMarcas = (products) => {
        const marcas = products.map(product => product.marca);
        return [...new Set(marcas)];
    };
    const marcasUnicas = listadoMarcas(mockApi);

  

    // Funcion para mostrar/ocultar menu de marcas
    const [dropdown, setdropdown] = useState(false)
    const toggleDropdown = () => {
        setdropdown(!dropdown)
    }
    const showHeader = (pathname === "/" || pathname === "/pages/nosotros") ? "hidden" : ""

    return (
        <header className={classNames(showHeader, "bg-white")}
        >
            <nav className="mx-auto flex flex-col max-w-7xl items-start justify-between p-6 lg:px-8 sm:flex-row sm:items-center" aria-label="Global">
                <div className=" gap-x-3 sm:gap-x-12 justify-start flex">
                    <div className="relative">
                        <button type="button" className="cursor-pointer flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" onClick={() => toggleDropdown()} aria-expanded="false">
                            Marcas
                            <IoArrowDown />
                        </button>

                        {/* Menu */}
                        <div className={`${dropdown ? "" : "hidden"}` + " absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"}>
                            <div className="p-4">
                                {marcasUnicas.map((marca, index) => (
                                    <>
                                        <div key={index} className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <AiOutlineEnter className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 scale-x-[-1]"/>
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={`/pages/catalogo/${marca}`} className="block font-semibold text-gray-900">
                                                    <button onClick={() => toggleDropdown()}>
                                                        {marca}
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                ))}
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <AiOutlineEnter className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 scale-x-[-1]"/>
                                    </div>
                                    <div className="flex-auto">
                                        <Link href={"/pages/catalogo"} className="block font-semibold text-gray-900">
                                            <button onClick={() => toggleDropdown()}>
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
                <br></br>

                {/* Barra de busqueda */}
                <form className="w-full mx-auto pl-0 sm:pl-12">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IoSearchSharp className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar modelo o marca de celular..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                    </div>
                </form>
            </nav>
        </header>
    )
}

export default Header