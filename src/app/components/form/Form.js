'use client'
import React from 'react'

const Form = () => {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
        >
            <div>
                <label className="font-medium">
                    Nombre completo *
                </label>
                <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
            </div>
            <div>
                <label className="font-medium">
                    Email *
                </label>
                <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
            </div>
            <div>
                <label className="font-medium">
                    Empresa
                </label>
                <input
                    type="text"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
            </div>
            <div>
                <label className="font-medium">
                    Mensaje *
                </label>
                <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
            </div>
            <button
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
                Enviar
            </button>
        </form>
    )
}

export default Form