'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Form = () => {

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        empresa: "",
        mensaje: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values);
        Swal.fire({
            icon: "success",
            title: "Mensaje enviado. Gracias",
            text: "Nos comunicaremos a la brevedad.",
            iconColor: "#1f2937",
            timer: 1500,
            showConfirmButton: false,
        });
        setValues({
            nombre: "",
            email: "",
            empresa: "",
            mensaje: ""
        })
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >
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
                    value={values.nombre}
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
                    value={values.email}
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
                    value={values.empresa}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="font-medium">
                    Mensaje *
                </label>
                <textarea
                    required
                    placeholder='Hola, me gustaría.....'
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    name='mensaje'
                    value={values.mensaje}
                    onChange={handleChange}
                />
            </div>
            <button
                type='submit'
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
                Enviar
            </button>
        </form>
    )
}

export default Form