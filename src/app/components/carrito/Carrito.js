'use client'
import React from 'react'
import { FaCheck } from "react-icons/fa";
import ButtonBack from '../shared/buttonBack'
import ButtonEmpty from '../shared/buttonEmpty';
import { useCartContext } from '@/app/context/CartContext';
import Empty from './empty/Empty';


const Carrito = () => {

    const { cart, emptyCart, valueCart, quantityCart } = useCartContext()

    const deliverValue = valueCart()
    console.log(deliverValue);


    return (
        <section>

            {cart.length > 0 ?

                <>
                    <ul role="list " className="divide-y divide-gray-100 md:px-20 m-8">
                        {cart.map((product) => (
                            <li key={product.id} className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img alt="" src={product.imagen} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{product.nombre}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.caracteristicas}</p>
                                    </div>
                                </div>
                                <div className="shrink-0 pr-2 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900"><strong>${product.precio}</strong></p>
                                    <p className="text-sm leading-6 text-gray-900"><strong>{product.quantity}u.</strong></p>
                                    <p className="mt-1 text-xs leading-5 text-gray-500">{product.marca}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <div className='flex flex-col sm:flex-row justify-end p-8'>
                        <div className="flex flex-row sm:flex-col justify-between my-8 gap-5">
                            <ButtonBack />
                            <ButtonEmpty emptyCart={emptyCart} />
                        </div>

                        <div>
                            <div className=' my-4 flex justify-end'>
                                <div className='w-[180px]'>
                                    <p className="pl-8 py-1 text-sm sm:text-lg font-semibold leading-6 text-gray-900 flex justify-end">Cantidad total:</p>
                                    <p className="pl-8 py-1 text-sm sm:text-lg font-semibold leading-6 text-gray-900 flex justify-end">Subtotal:</p>
                                    <p className="pl-8 py-1 text-sm sm:text-lg font-semibold leading-6 text-gray-900 flex justify-end">Gastos de envío:</p>
                                </div>
                                <div className='w-[180px] flex flex-col justify-start text-left'>
                                    <p className="px-8 py-1 text-sm sm:text-lg font-semibold leading-6 text-gray-900 flex justify-start">{quantityCart()}u.</p>
                                    <p className="px-8 py-1 text-sm sm:text-lg font-semibold leading-6 text-gray-900 flex justify-start">
                                        ${valueCart()}
                                    </p>

                                    {
                                        deliverValue < 1 ?
                                            <p className="px-8 py-1 text-sm sm:text-lg font-semibold leading-6 text-gray-900 flex justify-start">$0</p>
                                            :
                                            <p className="px-8 py-1 text-sm sm:text-lg font-semibold leading-6 text-gray-900 flex justify-start"><strike>$1500,00</strike></p>
                                    }

                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='h-0.5 bg-black w-[340px] mx-8 '></div>
                            </div>
                            <div className='mx-8 my-4 flex justify-end'>
                                <div className='w-[180px]'>
                                    <h2 className="pl-8 py-1 text-2xl font-semibold leading-6 text-gray-900 flex justify-end">Total:</h2>
                                </div>
                                <div className='w-[180px] flex flex-col justify-start text-left'>
                                    <h2 className="px-8 py-1 text-lg font-semibold leading-6 text-gray-900 flex justify-start">${valueCart()}</h2>
                                </div>
                            </div>
                            <div className='mx-8 my-4 flex justify-end'>
                                <button href="#" className="w-full  h-12 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <p className="m-auto flex items-center animate-bounce">
                                        Confirmar
                                        <FaCheck className="rtl:rotate-180 w-5 h-5 ms-2" />
                                    </p>
                                </button>
                            </div>
                        </div>

                    </div>
                </>
                :
                <Empty />
            }
        </section>
    )
}

export default Carrito