import React from 'react';
import SearchMarca from './SearchMarca';
import Search from './Search';
import getProductos from '@/app/api/getProductos';

const Header = async ({marca, productsLength}) => {

    const products = await getProductos()

    return (
        <header className="bg-white">
            <nav className="mx-auto flex flex-col max-w-7xl items-start justify-between p-6 lg:px-8  sm:items-center">

                {/* Barra de búsqueda */}
                <Search products={products} />

                {/* Busqueda por marcas o novedades */}
                <SearchMarca products={products} marca={marca} productsLength={productsLength}/>

            </nav>
        </header>
    );
}

export default Header;
