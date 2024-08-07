import { IoLogoWhatsapp } from "react-icons/io";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const FrontCardLink = () => {
    return (
        <section className="w-full sm:max-w-sm p-8 bg-white mx-auto border-r-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Desea hacer un regalo?</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Nuestros asesores están encantados de poder ayudarle</p>
            
            {/*//TODO REEMPLAZAR POR COMPONENTE BOTON */}
            <Link href={"https://wa.me/3416851106"} >
                <p className="cursor-pointer inline-flex pb-2 font-medium items-center text-blue-600 hover:underline">
                    Comuniquese por whatsapp
                    <IoLogoWhatsapp className="w-5 h-5 ms-2 "/>
                </p>
            </Link>
            <Image
                src={"/image04.jpg"}
                width={300}
                height={300}
                className='w-full rounded-lg'
                alt="hombre hablando por telefono"
            >
            </Image>
        </section>
    )
}

export default FrontCardLink