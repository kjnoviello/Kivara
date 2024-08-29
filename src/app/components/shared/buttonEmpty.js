'use client'
import React from 'react'
import { LiaTrashRestoreSolid } from 'react-icons/lia';

const ButtonEmpty = ({emptyCart, inNavbar}) => {

    const btnInNavbar =  inNavbar ? "w-full text-gray-700 hover:bg-gray-100 hover:text-indigo-600" : "w-[130px] hover:text-white border border-4 border-gray-800 hover:bg-gray-900 text-center justify-center rounded-lg text-gray-800 bg-white border-gray-800"

    return (
        <button
            onClick={()=>emptyCart()}
            className= {`${btnInNavbar}  m-auto inline-flex items-center px-3 py-2 text-sm font-medium   focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 `}
        >
            <p className="flex items-center">
                Vaciar
                <LiaTrashRestoreSolid className="rtl:rotate-180 w-5 h-5 ms-2" />
            </p>
        </button>
    )
}

export default ButtonEmpty