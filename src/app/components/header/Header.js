'use client'
import React, { useState } from 'react';
import { IoArrowDown, IoSearchSharp } from "react-icons/io5";
import { AiOutlineEnter } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import mockApi from '../../utils/mockApi.json';
import Link from 'next/link';

const Header = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const pathname = usePathname();

    // Función para obtener marcas únicas
    const listadoMarcas = (products) => {
        const marcas = products.map(product => product.marca);
        return [...new Set(marcas)];
    };
    const marcasUnicas = listadoMarcas(mockApi);

    // Estado para manejar el menú de marcas
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    // Estados para la búsqueda en tiempo real
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);  // Estado para saber si se realizó una búsqueda

    // Función para manejar la búsqueda
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setSearchPerformed(true);  // Esto marca que se ha realizado una búsqueda

        if (term.length > 0) {
            const results = mockApi.filter(product => 
                product.marca.toLowerCase().includes(term) || 
                product.nombre.toLowerCase().includes(term)
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
            setSearchPerformed(false);  // Aca se reinicia el estado si no hay una búsqueda
        }
    };

    // Función para limpiar los resultados y reiniciar la busqueda
    const emptySearch = () => {
        setFilteredResults([]);
        setSearchPerformed(false);
    }

    // Condicional para que el header se muestre o no segun la pagina
    const showHeader = (pathname === "/" || pathname === "/pages/nosotros") ? "hidden" : "";

    return (
        <header className={classNames(showHeader, "bg-white")}>
            <nav className="mx-auto flex flex-col max-w-7xl items-start justify-between p-6 lg:px-8  sm:items-center" aria-label="Global">
                <div className="gap-x-3 sm:gap-x-12 justify-start flex">
                    <div className="relative">
                        <button type="button" className="cursor-pointer flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" onClick={toggleDropdown} aria-expanded="false">
                            Marcas
                            <IoArrowDown />
                        </button>

                        {/* Menú de marcas */}
                        <div className={`${dropdown ? "" : "hidden"} absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}>
                            <div className="p-4">
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

                {/* Barra de búsqueda */}
                <form className="w-full mx-auto pl-0 sm:pl-12" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IoSearchSharp className="w-5 h-5 text-gray-500" />
                        </div>
                        <input 
                            type="search" 
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                            placeholder="Buscar modelo o marca de celular..." 
                            value={searchTerm} 
                            onChange={handleSearch} 
                        />
                    </div>

                    {/* Resultados de búsqueda */}
                    {searchPerformed && filteredResults.length > 0 && (
                        <div className="bg-white shadow-lg rounded-lg w-full mt-2 z-10">
                            <ul>
                                {filteredResults.map((product, index) => (
                                    <li key={index} className="border-b last:border-b-0">
                                        <Link href={`/pages/catalogo/producto/${product.id}`} onClick={() => setSearchTerm('')}>
                                            <button onClick={emptySearch} className="block p-2 hover:bg-gray-100">
                                                {product.marca} - {product.nombre}
                                            </button>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Mensaje de "no hay resultados" */}
                    {searchPerformed && filteredResults.length === 0 && (
                        <p className="mt-2 text-md text-gray-500"><strong>No hay resultados</strong></p>
                    )}
                </form>
            </nav>
        </header>
    );
}

export default Header;


