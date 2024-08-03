import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto px-4 pt-4 pb-1 md:pt-8 md:pb-2">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image
                            alt="Your Company"
                            src="/logo.svg"
                            className="h-16 w-auto text-white"
                            width={16}
                            height={16}
                            >
                        </Image>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Politica de privacidad</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contacto</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">KIVARA™</a>. Todos los derechos reservados</span>
            </div>
        </footer>
    )
}

export default Footer