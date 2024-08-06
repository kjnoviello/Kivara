import React from 'react'

const Button = ({ text, clase, funcion }) => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const primary = "bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 dark:focus:ring-blue-900";

    const secondary = "hover:text-gray-900  border border-white hover:bg-gray-100  focus:ring-gray-400";

    return (
        <button onClick={funcion} className={classNames(clase? primary : secondary, "inline-flex justify-center items-center sm:mx-4 py-3 px-5 text-base font-medium text-center text-white rounded-lg focus:ring-4")}>
            {text}
        </button>
    )
}

export default Button
