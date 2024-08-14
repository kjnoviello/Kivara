import React from 'react'

const FrontStats = () => {

    const stats = [
        {
            data: "23K+",
            title: "Clientes Satisfechos"
        },
        {
            data: "35K+",
            title: "Transacciones Exitosas"
        },
        {
            data: "95%",
            title: "Índice de Satisfacción"
        },
        {
            data: "10+",
            title: "Años en el Mercado"
        },
    ]

    return (
        <div className="py-8">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Nuestros clientes están contentos
                    </h3>
                    <p className="mt-3">
                        Nos enorgullece ofrecer productos y servicios de alta calidad que superan las expectativas de nuestros clientes. Con años de experiencia y un equipo dedicado, seguimos innovando y mejorando para garantizar la mejor experiencia de compra.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FrontStats
