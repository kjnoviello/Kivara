'use client'
import React, { useState } from 'react'
import { IoArrowDown } from "react-icons/io5";
import mockApi from '../../utils/mockApi.json'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const pathname = usePathname();
    console.log(pathname);

    // Funcion para mostrar/ocultar menu de marcas
    const [dropdown, setdropdown] = useState(false)
    const toggleDropdown = () => {
        setdropdown(!dropdown)
    }
    const showHeader = (pathname === "/" || pathname === "/pages/nosotros") ? "hidden" : ""

    return (
        <header className={classNames(showHeader, "bg-white")}
        >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className=" lg:flex lg:gap-x-12">
                <div className="relative">
                    <button type="button" className="cursor-pointer flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" onClick={() => toggleDropdown()} aria-expanded="false">
                        Marcas
                        <IoArrowDown />
                    </button>

                    {/* Menu */}
                    <div className={`${dropdown ? "" : "hidden"}` + " absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"}>
                        <div className="p-4">
                            {mockApi.map((item) => (
                                <>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <Link href="#" className="block font-semibold text-gray-900">
                                                    {item.marca}
                                            </Link>
                                        </div>

                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>

                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Samsung</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Motorola</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Otra</a>
            </div>
        </nav>
    </header>
    )
}

export default Header