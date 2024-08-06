import { IoArrowForward } from "react-icons/io5";

import Link from 'next/link'
import React from 'react'
import Button from "../shared/button";

const FrontSection = () => {
    return (
        <section className="bg-center bg-fixed bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Potenciamos el futuro del mundo.</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">Descubre el <strong className='text-white'>celular</strong> perfecto para tu estilo de vida entre una amplia gama de opciones.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

                    <Link href={"/#tech"} className="inline-flex justify-center sm:mx-4  items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Quiero saber más
                        <IoArrowForward className="font-bold w-4 h-4 ms-2 rtl:rotate-180"/>
                    </Link>
                    <Link href="/pages/nosotros">
                        <Button text="Quienes somos?" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FrontSection