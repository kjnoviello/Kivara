import Link from 'next/link';
import React from 'react'
import { IoHome, IoCaretBackCircle } from "react-icons/io5";

const NotFound = () => {
    return (
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Página no encontrada</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Volvé para encontrar los mejores productos y seguir comprando!</p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">

                {/*//TODO REEMPLAZAR POR COMPONENTE BOTON */}
                <Link href={"/"} className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <IoHome className="me-3 w-7 h-7"/>
                    <div className="text-left rtl:text-right">
                        <div className="-mt-1 font-sans text-sm font-semibold">Ir al home</div>
                    </div>
                </Link>
                <Link href={"#"} className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <IoCaretBackCircle className="me-3 w-7 h-7" />
                    <div className="text-left rtl:text-right">
                        <div className="-mt-1 font-sans text-sm font-semibold">Volver atrás</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NotFound