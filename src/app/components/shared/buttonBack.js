'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoArrowBack } from 'react-icons/io5';

const ButtonBack = ({ btnLogin, newRoute }) => {

    const router = useRouter();

    const classLogin = btnLogin ? "" : "m-auto sm:w-[130px] w-full"

    return (
        
        <button
            onClick={() => {
                router.back();
            }}
            className={`${classLogin} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-lg`}
        >
            <p className="m-auto flex items-center">
                <IoArrowBack className="rtl:rotate-180 w-4 h-4 me-2" />
                Volver
            </p>
        </button>
    )
}

export default ButtonBack