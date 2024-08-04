import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const navigationFooter = [
        { label: "Nosotros", href: "#" },
        { label: "Politica de privacidad", href: "#" },
        { label: "Contacto", href: "#" }
    ]

    return (
        <footer className="bg-gray-800 rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto px-4 pt-4 pb-1 md:pt-8 md:pb-2">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={"/"}>
                        <Image
                            alt="Your Company"
                            src="/logo.svg"
                            className="h-16 w-auto text-white"
                            width={16}
                            height={16}
                        >
                        </Image>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {navigationFooter.map((link)=>(
                            <li>
                                <Link href={link.href}>
                                    <p className="hover:underline me-4 md:me-6">{link.label}</p>
                                </Link>
                            </li> 
                        ))}
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Desarrollado por:&nbsp;
                    <Link href={"https://www.linkedin.com/in/kevinjoelnoviello/"}>
                        <span className="cursor:pointer hover:underline">
                            Kevin Joel Noviello
                        </span>
                    </Link>
                    . Todos los derechos reservados
                </span>
            </div>
        </footer>
    )
}

export default Footer