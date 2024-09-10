'use client'
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import DeleteProductBtn from "./DeleteProductBtn";
import getProductos from "@/app/api/getProductos";
import Loader from "@/app/pages/catalogo/loading";

const ProductsTable = () => {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [loading, setLoading] = useState(true)

  // Funcion que trae los productos
  const fetchProducts = async () => {
    const allProducts = await getProductos();
    setProducts(allProducts);
    setLoading(false)
  };

  // Para traer los datos desde un componente del lado del cliente
  useEffect(() => {
    fetchProducts();
  }, []);

  // funcion para la busqueda de productos dentro de la tabla
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setSearchPerformed(true);

    if (term.length > 0) {
      const results = products.filter(product =>
        product.marca.toLowerCase().includes(term) ||
        product.nombre.toLowerCase().includes(term)
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
      setSearchPerformed(false);
    }
  };

 // Función para refrescar la lista de productos
  const refreshProducts = async () => {
  setLoading(true);
  await fetchProducts();
};

  return (
    <>
      <div className="overflow-x-auto mt-6 mx-4">
        {/* Botones de navegacion */}
        <div className="space-x-2 flex">
          <Link
            href="admin/create"
            className="bg-[#1a56db] hover:bg-[#1e429f] py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
          >
            Cargar producto
          </Link>
          <Link
            href="admin/orders"
            className="bg-[#1a56db] hover:bg-[#1e429f] py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
          >
            Ordenes
          </Link>
          <Link
            href="admin/login"
            className="bg-[#1a56db] hover:bg-[#1e429f] py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <header className="bg-white">
        <nav className="mx-auto flex flex-col max-w-7xl items-start justify-between p-6 lg:px-8  sm:items-center">
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
          </form>
        </nav>
      </header>

      {/* tabal de productos */}
      <div className="overflow-x-auto mx-4">
        <table className="w-full mt-5 rounded-md bg-white text-xs lg:text-sm text-left text-gray mx-4">
          <thead className="text-base text-gray uppercase">
            <tr>
              <th scope="col" className="px-2 py-2 text-center">Id</th>
              <th scope="col" className="px-2 py-2">Nombre</th>
              <th scope="col" className="px-2 py-2 text-center">Precio</th>
              <th scope="col" className="px-2 py-2 text-center">Stock</th>
              <th scope="col" className="px-2 py-2 text-center">Marca</th>
              <th scope="col" className="px-2 py-2 text-center">Imagen</th>
              <th scope="col" className="px-2 py-2">Descripción</th>
              <th scope="col" className="px-2 py-2">Características</th>
              <th scope="col" className="px-2 py-2">SO</th>
              <th scope="col" className="px-2 py-2">Procesador</th>
              <th scope="col" className="px-2 py-2">Memoria</th>
              <th scope="col" className="px-2 py-2">Batería</th>
              <th scope="col" className="px-2 py-2">Color</th>
              <th scope="col" className="px-2 py-2">Valoraciones</th>
              <th scope="col" className="px-2 py-2">Stock</th>
              <th scope="col" className="px-2 py-2">Novedad</th>
              <th scope="col" className="px-2 py-2">Estado</th>
              <th scope="col" className="px-2 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ?
                <tr>
                  <td colSpan="5" className="text-center p-5"><Loader /></td>
                </tr>
                :
                <>
                  {(searchPerformed ? filteredResults : products).map((product, index) => (
                    <tr key={product.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                      <td className="p-2 text-center">{product.id}</td>
                      <td className="p-2">{product.nombre}</td>
                      <td className="p-2 truncate text-center">$ {product.precio}</td>
                      <td className="p-2 text-center">{product.stock}</td>
                      <td className="p-2 text-center">{product.marca}</td>
                      <td className="p-2 text-center">
                        {product.imagen ? (
                          <Image
                            src={product.imagen}
                            alt={product.nombre}
                            width={40}
                            height={40}
                          />
                        ) : (
                          <p className="text-gray">no image</p>
                        )}
                      </td>
                      <td className="p-2 truncate max-w-64">{product.descripcion}</td>
                      <td className="p-2 truncate max-w-64">{product.caracteristicas}</td>
                      <td className="p-2 truncate max-w-prose">{product.data.so}</td>
                      <td className="p-2">{product.data.procesador}</td>
                      <td className="p-2 truncate max-w-prose">{product.data.memoria}</td>
                      <td className="p-2 truncate max-w-prose">{product.data.bateria}</td>
                      <td className="p-2 truncate max-w-prose">{product.data.color}</td>
                      <td className="p-2 text-center">{product.valoraciones}</td>
                      <td className="p-2 text-center">{product.stock}</td>
                      <td className="p-2 truncate max-w-prose">{
                        product.novedad ? "Nuevo" : ""
                      }</td>
                      <td className="p-2 truncate max-w-prose">{
                        product.estado ? "Visible" : "Oculto"
                      }</td>
                      <td className="m-auto flex h-[55px] gap-4 justify-center">
                        <Link href={`/pages/catalogo/producto/${product.id}`} className="content-center">
                          <LuEye className="text-gray text-xl" />
                        </Link>
                        <Link href={`/pages/admin/edit/${product.id}`} className="content-center">
                          <FaRegEdit className="text-gray text-xl" />
                        </Link>
                        <DeleteProductBtn id={product.id} onDelete={() => refreshProducts()}  />
                      </td>
                    </tr>
                  ))}
                </>
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsTable;