import React from 'react'
import { RiInstagramFill, RiTwitterFill } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";
import Link from 'next/link';

const FrontContact = () => {

    const contactMethods = [
        {
            icon: <RiInstagramFill />,
            title: "Visita nuestro Instagram",
            desc: "Explora nuestras últimas publicaciones, historias y mantente al día con nuestras novedades.",
            link: {
                name: "Visítanos en Instagram",
                href: "https://www.instagram.com/"
            },
        },
        {
            icon: <RiTwitterFill />,
            title: "Síguenos en Twitter",
            desc: "Únete a la conversación en Twitter para recibir actualizaciones rápidas y exclusivas.",
            link: {
                name: "Síguenos en Twitter",
                href: "https://x.com/?lang=es"
            },
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
                <div className="max-w-md">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Conectemos
                    </h3>
                    <p className="mt-3">
                        Estamos aquí para ayudarlo y responder cualquier pregunta que pueda tener. Esperamos tener noticias suyas.
                    </p>
                </div>
                <div>
                    <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx} className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                                    <div className="w-12 h-12 text-3xl rounded-full border flex items-center justify-center text-gray-700">
                                        {item.icon}
                                    </div>
                                    <Link href={item.link.href}>
                                        <h4 className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium">
                                            {item.title}
                                            <IoArrowForward />
                                        </h4>
                                    </Link>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default FrontContact