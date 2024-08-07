'use client'
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const Counter = () => {

    const [counter, setCounter] = useState(1);

    const restCounter = () => {
        const realCounter = counter<1 ? 1: counter
        return setCounter(realCounter - 1)
    }
    
    const addCounter = () => {
        return setCounter(counter + 1)
    }

    return (
        <form className="max-w-xs mx-auto">
            <label htmlFor="quantity-input" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"><strong>Cantidad:</strong></label>
            <div className="relative flex items-center max-w-[8rem]">
                <button onClick={()=>restCounter()} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <FaMinus className="w-4 h-4 text-gray-900 dark:text-white"/>
                </button>
                <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={counter} required />
                <button onClick={()=>addCounter()} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <FaPlus className="w-4 h-4 text-gray-900 dark:text-white"/>
                </button>
            </div>
            {/* <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a 5 digit number from 0 to 9.</p> */}
        </form>
    )
}

export default Counter