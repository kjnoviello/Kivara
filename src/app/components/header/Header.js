import React from 'react';
import SearchMarca from './SearchMarca';
import Search from './Search';

const Header = async () => {


    //!----------------------------------------------//
    const getFetch = async () => {
        const res = await fetch('https://66af1becb05db47acc590364.mockapi.io/celulars')
        if (!res.ok) {
            throw new Error("No se pudieron obtener los datos. Revisar url de la api")
        }
        const data = await res.json()
        return data
    }
    const products = await getFetch()


    //!----------------------------------------------//

    // Esto es lo que tengo en dev que si funciona

    // const products = await fetch("http://localhost:3000/api/catalogo", { cache: "no-store" })
    //     .then(r => r.json())

    //-----------------------------------------------//

    return (
        <header className="bg-white">
            <nav className="mx-auto flex flex-col max-w-7xl items-start justify-between p-6 lg:px-8  sm:items-center">

                {/* Barra de búsqueda */}
                <Search products={products} />

                {/* Busqueda por marcas o novedades */}
                <SearchMarca products={products} />

            </nav>
        </header>
    );
}

export default Header;
