import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ButtonBack from './components/shared/buttonBack';
import { IoArrowForward, IoHome, IoCart } from "react-icons/io5";
import { BiSolidError } from "react-icons/bi";
import { GiOpenBook } from "react-icons/gi";
import Header from './components/header/Header';


export default function NotFound() {

    const navigations = [
        {
            icon:
                <IoHome />,
            title: "Home",
            desc: "Descubre lo que es Kivara",
            href: "/"
        },
        {
            icon:
                <GiOpenBook />,
            title: "Catálogo",
            desc: "Visita todos nuestros productos",
            href: "/pages/catalogo"
        },
        {
            icon:
                <IoCart />,
            title: "Mi carrito",
            desc: "Vuelve al tu carrito para seguir comprando   ",
            href: "/pages/carrito",
        }
    ]

    return (
        <>
            <Header />
            <main>
                <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start py-4 md:px-8">
                    <div className="md:flex gap-16 mx-auto text-gray-600">
                        <div className="space-y-3 text-center content-center">
                            <Image
                                src={"/404.png"}
                                width={120}
                                height={160}
                                alt='404 image'
                                className='mx-auto content-center'
                            />
                            <div className='flex text-md text-indigo-600 font-semibold justify-center gap-2 '>
                                <BiSolidError className='self-center' />
                                <h3>
                                    Error
                                </h3>
                            </div>
                            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                                Página no encontrada
                            </p>
                            <p>
                                La página que está buscando no fue encontrada o se ha eliminado.
                            </p>
                            <ButtonBack />
                        </div>
                        <div className="my-12">
                            <ul className="divide-y">
                                {
                                    navigations.map((item, idx) => (
                                        <li key={idx} className="flex gap-x-4 py-6">
                                            <div className="flex-none w-14 h-14 bg-indigo-50 text-3xl rounded-full text-indigo-600 flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                            <div className="space-y-1">
                                                <Link href={item.href}>
                                                    <button className='text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1'>
                                                        <h4 >{item.title}</h4>
                                                        <IoArrowForward />
                                                    </button>
                                                </Link>
                                                <p>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
