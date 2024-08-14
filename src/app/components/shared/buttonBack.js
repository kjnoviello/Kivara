// import React from 'react'

// const Button = ({ text, clase, funcion }) => {

//     function classNames(...classes) {
//         return classes.filter(Boolean).join(' ')
//     }

//     const primary = "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900";

//     const secondary = "hover:text-gray-900 border border-white hover:bg-gray-100 focus:ring-gray-400";

//     return (
//         <button onClick={funcion} className={classNames(clase? primary : secondary, "inline-flex justify-center items-center sm:mx-4 py-3 px-5 text-base font-medium text-center text-white rounded-lg focus:ring-4")}>
//             {text}
//         </button>
//     )
// }

// export default Button

'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoArrowBack } from 'react-icons/io5';

const ButtonBack = () => {

    const router = useRouter();

    return (
        <button
            onClick={() => {
                router.back();
            }}
            className="sm:w-[130px] w-full m-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-lg"
        >
            <p className="m-auto flex items-center">
                <IoArrowBack className="rtl:rotate-180 w-4 h-4 me-2" />
                Volver
            </p>
        </button>
    )
}

export default ButtonBack