'use client'
import React from 'react'
import { ProgressBar } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='h-[40vh] flex flex-col justify-center w-full'>
            <ProgressBar
                visible={true}
                height="90"
                width="160"
                barColor='#1f2937'
                color=""
                borderColor='#374151'
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="self-center w-full"
            />
            <h2 className='align-center text-center pt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Cargando...</h2>
        </div>
    )
}

export default Loader