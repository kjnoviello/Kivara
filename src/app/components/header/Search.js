'use client'
import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import mockApi from '../../utils/mockApi.json';
import Link from 'next/link';
import SearchResult from './Search';

const Search = () => {

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

    return (
        <>
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

                <SearchResult />

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
        </>
    )
}

export default Search