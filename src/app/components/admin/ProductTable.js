import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import DeleteProductBtn from "./DeleteProductBtn";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";


const getAllProducts = async () => {
  const productRef = collection(db, 'productos');
  const querySnapshot = await getDocs(productRef);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}

const ProductsTable = async () => {
  const items = await getAllProducts();

  return (
    <div className="overflow-x-auto">
      <div className="space-x-2 flex">
        <Link
          href="admin/create"
          className="bg-cyan-500 py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
        >
          Create new
        </Link>
        <Link
          href="admin/orders"
          className="bg-cyan-500 py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
        >
          Orders
        </Link>
        <Link
          href="prueba/login"
          className="bg-cyan-500 py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
        >
          Login
        </Link>
      </div>
      <table className="w-full mt-5 rounded-md bg-white text-xs lg:text-sm text-left text-gray ">
        <thead className="text-base text-gray uppercase ">
          <tr>
            <th scope="col" className="px-3 py-2">
              Nombre
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Precio
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Stock
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Marca
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Imagen
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Id
            </th>
            <th scope="col" className="px-3 py-2">
              Descripción
            </th>
            <th scope="col" className="px-3 py-2">
              Caracteristicas
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="p-2 truncate"> {item.nombre}</td>
              <td className="p-2 text-center">$ {item.precio}</td>
              <td className="p-2 text-center">{item.stock}</td>
              <td className="p-2 text-center">{item.marca}</td>
              <td className="p-2 text-center">
                {item.image ? (
                  <Image
                    src={item.imagen}
                    alt={item.nombre}
                    width={80}
                    height={80}
                  />
                ) : (
                  <>
                    <p className="text-gray">no image </p>
                  </>
                )}
              </td>
              <td className="p-2 text-center">{item.id}</td>
              <td className="p-2 truncate max-w-prose">{item.descripcion}</td>
              <td className="p-2 truncate max-w-prose">{item.caracteristicas}</td>
              <td className="flex space-x-3 justify-center">
                <Link href={`/admin/edit/${item.id}`}>
                  <FaRegEdit className="text-gray text-xl " />
                </Link>
                <DeleteProductBtn id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;