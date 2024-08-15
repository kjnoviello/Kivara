'use client'
import React from 'react'
import { LiaTrashRestoreSolid } from 'react-icons/lia';

const ButtonEmpty = () => {


    return (
        <button
            onClick={() => { }}
            className="w-[130px] m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800 bg-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-lg border border-gray-800 border-4"
        >
            <p className="m-auto flex items-center">
                Vaciar
                <LiaTrashRestoreSolid className="rtl:rotate-180 w-5 h-5 ms-2" />
            </p>
        </button>
    )
}

export default ButtonEmpty