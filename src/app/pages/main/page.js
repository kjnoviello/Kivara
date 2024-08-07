import FrontCard from '@/app/components/main/FrontCard'
import FrontCardLink from '@/app/components/main/FrontCardLink'
import FrontSection from '@/app/components/main/FrontSection'
import Feature from '@/app/components/ui/feature'
import Link from 'next/link'
import React from 'react'
import { GrCatalog } from "react-icons/gr";


export const metadata = {
  title: "Kivara - La Mejor Tienda de Celulares",
  description: "Bienvenido a Kivara, tu tienda en línea para los últimos productos tecnológicos. Descubre nuestras ofertas en móviles.",
  keywords: "Kivara, tienda de tecnología, móviles, laptops, ofertas",
  author: "Kivara",
};

export default function Main() {

  return (
    <main>
      <FrontSection />
      <div className='flex flex-col sm:flex-row pt-20'>
        <FrontCard />
        <hr />
        <hr />   
        <FrontCardLink />
        <hr />
      </div>
      <div className='w-full mt-5 flex justify-center'>
        <Link href={"/pages/catalogo"} className="animate-bounce hover:animate-[0] inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Visite nuestro catalgo
        <GrCatalog className="font-bold w-5 h-5 ms-2 rtl:rotate-180"/>
        </Link>
      </div>
      <Feature />
    </main>
  )
}