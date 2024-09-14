'use client'
import React from 'react'
import FormCheck from '@/app/components/carrito/formCheck/page'
import ButtonBack from '@/app/components/shared/buttonBack'
import { useCartContext } from '@/app/context/CartContext'

const CheckSummary = () => {

    const { cart, valueCart } = useCartContext()

    return (
        <main className='flex flex-col justify-center m-4 mb-8'>
                <h1 className='pb-8 pt-4 m-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl'>Completa tus datos para la compra:</h1>
                <section className='flex flex-col md:flex-row justify-center gap-4'>
                    <aside className='mx-auto'>
                        <ul role="list " className="divide-y divide-gray-100 md:px-20 m-4 md:m-8">
                            {cart.map((product) => (
                                <li key={product.id} className="flex justify-between gap-x-6 py-5">
                                    <div className="flex  min-w-0 gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">{product.nombre}</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className="shrink-0 pr-2 sm:flex sm:flex-col sm:items-end">
                                            <p className="text-sm leading-6 text-gray-900"><strong>{product.quantity}u.</strong></p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            <li className='flex justify-center'>
                                <p className="px-8 py-1 text-sm sm:text-lg font-semibold leading-6 text-gray-900 flex justify-start">
                                    ${valueCart()}
                                </p>
                            </li>
                        </ul>
                        <div className='m-auto text-center'>
                            <ButtonBack />
                        </div>
                    </aside>
                    <div className='m-auto border border-gray-200 shadow p-6 rounded-lg'>
                        <FormCheck />
                    </div>
                </section>
            </main>
    )
}

export default CheckSummary