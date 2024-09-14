import React from 'react';
import SearchMarca from './SearchMarca';
import Search from './Search';
import getProductos from '@/app/api/getProductos';

const Header = async ({marca}) => {

    const products = await getProductos()

    return (
        <header className="bg-white">
            <nav className="mx-auto flex flex-col max-w-7xl items-start justify-between p-6 lg:px-8  sm:items-center">

                {/* Barra de búsqueda */}
                <Search products={products} />

                {/* Busqueda por marcas o novedades */}
                <SearchMarca products={products} marca={marca}/>

            </nav>
        </header>
    );
}

export default Header;
