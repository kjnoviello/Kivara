'use client'
import { useCartContext } from '@/app/context/CartContext'
import React, { useState } from 'react'

const FormCheck = () => {

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        empresa: "",
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const { confirmOrder } = useCartContext()

    return (
        <>
            <form
                className="space-y-5">
                <div>
                    <label className="font-medium">
                        Nombre completo *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder='John Doe'
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        name='nombre'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="font-medium">
                        Email *
                    </label>
                    <input
                        type="email"
                        required
                        placeholder='johndoe@example.com'
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        name='email'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="font-medium">
                        Empresa
                    </label>
                    <input
                        type="text"
                        placeholder='Personal TI Corps'
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        name='empresa'
                        onChange={handleChange}
                    />
                </div>
            </form>
            <hr />
            <button
            onClick={()=>confirmOrder(values)}
                className="mt-10 w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
                Realizar compra
            </button>
        </>
    )
}

export default FormCheck
