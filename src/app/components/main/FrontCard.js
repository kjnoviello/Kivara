import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const FrontCard = () => {
    return (
        <section className="w-full text-center bg-white sm:border-r sm:border-r-gray-400 p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">La tecnología móvil más avanzada.</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Nos destacamos por nuestra atención al cliente personalizada, asegurándonos de que cada compra no solo cumpla con tus expectativas, sino que las supere. Con una entrega rápida y eficiente, garantizamos que tu nuevo celular llegue a ti en el menor tiempo posible. </p>
            <div className='flex flex-col gap-2 xl:flex-row'>
                <Image
                    src={"/image02.jpg"}
                    width={400}
                    height={250}
                    className='mx-auto rounded-lg'
                    alt='image'
                >
                </Image>
                <Image
                    src={"/image03.jpg"}
                    width={400}
                    height={250}
                    className='mx-auto rounded-lg'
                    alt='image'
                >
                </Image>
            </div>
        </section>
    )
}

export default FrontCard