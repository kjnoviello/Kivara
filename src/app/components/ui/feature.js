import Image from "next/image"

const features = [
    { name: 'Procesadores', description: 'Los celulares modernos cuentan con procesadores potentes de múltiples núcleos y arquitecturas eficientes, con chipsets avanzados para inteligencia artificial y gráficos de alto rendimiento. Los modelos recientes usan tecnología de 5nm para mejorar la eficiencia y el rendimiento.' },
    { name: 'Material', description: 'Los celulares modernos usan materiales de alta calidad como vidrio templado en la parte delantera y trasera, y aluminio o acero inoxidable en el marco. Algunos modelos también utilizan cerámica o policarbonato de alta resistencia.' },
    { name: 'Pantalla', description: 'Las pantallas de los celulares modernos suelen ser OLED o AMOLED, ofreciendo colores vivos y negros profundos. Muchos tienen resoluciones Full HD o 4K y soportan altas tasas de refresco (90Hz, 120Hz o más) para una experiencia más fluida.' },
    { name: 'Batería', description: 'Las baterías de los celulares modernos varían entre 4000mAh y 6000mAh, proporcionando autonomía para un uso intensivo durante todo el día. Además, muchos dispositivos cuentan con tecnologías de carga rápida e inalámbrica.' },
    { name: 'Funciones', description: 'Los celulares modernos incluyen funciones avanzadas como reconocimiento facial, lector de huellas dactilares, asistentes de voz integrados, conectividad 5G, resistencia al agua y al polvo (IP67/68) y capacidades de realidad aumentada.' },
    { name: 'Diseños', description: 'El diseño de los celulares modernos es elegante y minimalista, con biseles reducidos y bordes curvados. Muchos modelos tienen cámaras perforadas o emergentes, y priorizan la ergonomía para asegurar comodidad durante el uso prolongado.' },
]

const images = [
    { id: "01", route: "/tech/tech-imagen01.jpg"},
    { id: "02", route: "/tech/tech-imagen02.jpg"},
    { id: "03", route: "/tech/tech-imagen03.jpg"},
    { id: "04", route: "/tech/tech-imagen04.jpg"},
    { id: "05", route: "/tech/tech-imagen05.jpg"},
    { id: "06", route: "/tech/tech-imagen06.jpg"}
]

const Feature = () => {
    return (
        <div className="bg-white py-20" id="tech">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-10 sm:px-2 sm:py-2 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Comprometidos con la mayor calidad</h2>
                    <p className="mt-4 text-gray-500">
                        Todos los productos poseen la mas alta calidad de grado militar. Como estos equipos, es de esperar que veamos muchos más en el futuro cercano. Las nuevas tecnologías ya no se limitarán a ser objeto de prueba y admiración por parte de expertos, sino que irán expandiéndose de forma progresiva hasta transformar los hogares y la forma en la que los humanos realizamos las tareas del día a día.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 bg-amber-50 rounded-lg items-center">
                    {images.map((img) => (
                        <Image
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            key={img.id}
                            src={img.route}
                            className="rounded-lg bg-gray-100 mx-auto"
                            width={160}
                            height={300}
                            >
                        </Image>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature