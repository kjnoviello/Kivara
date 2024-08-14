import Form from "@/app/components/form/Form"
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";


export default () => {


    const faqsList = [
        {
            q: "¿Cómo encuentro las mejores ofertas en tecnología?",
            a: "En Kivara, te ofrecemos una amplia selección de productos tecnológicos al mejor precio. Utiliza nuestros filtros avanzados y revisa nuestras recomendaciones para encontrar justo lo que necesitas."
        },
        {
            q: "¿Cómo puedo estar seguro de la calidad de los productos?",
            a: "Todos nuestros productos pasan por un riguroso control de calidad. Además, puedes revisar las reseñas de otros clientes para asegurarte de que estás tomando la mejor decisión de compra."
        },
        {
            q: "¿Kivara ofrece envíos rápidos?",
            a: "¡Sí! Nos enorgullecemos de ofrecer envíos rápidos en todos nuestros productos. Dependiendo de tu ubicación, podrás recibir tu pedido en un tiempo récord."
        },
        {
            q: "¿Qué métodos de pago aceptan?",
            a: "Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito y débito, transferencias bancarias y otras opciones seguras para tu comodidad."
        },
        {
            q: "¿Cómo puedo contactar con el servicio de atención al cliente?",
            a: "Nuestro equipo de atención al cliente está disponible para ayudarte en cualquier momento. Puedes contactarnos a través de nuestro chat en vivo, correo electrónico o redes sociales."
        },
        {
            q: "¿Kivara tiene políticas de devolución?",
            a: "¡Por supuesto! Si no estás satisfecho con tu compra, puedes devolver el producto dentro de los primeros 30 días. Consulta nuestras políticas de devolución para más detalles."
        },
    ];

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "shop@kivara.com"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+11 (341) 455-7700"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Rosario, Santa Fe."
        },
    ]

    const logoImage = [
        {
            src: "/logo/apple.svg",
            alt: "logo de apple"
        },
        {
            src: "/logo/huawei.svg",
            alt: "logo de huawei"
        },
        {
            src: "/logo/motorola.svg",
            alt: "logo de motorola"
        },
        {
            src: "/logo/nokia.svg",
            alt: "logo de nokia"
        },
        {
            src: "/logo/tcl.svg",
            alt: "logo de tcl"
        },
        {
            src: "/logo/xiaomi.svg",
            alt: "logo de xiaomi"
        },
    ]


    return (
        <>
            <section className="pt-12">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Más de 200 transacciones exitosas
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Ayudamos a los entusiastas de la tecnología a encontrar lo mejor al mejor precio
                        </h2>
                        <p>
                            En Kivara, nos dedicamos a ofrecer productos de alta calidad y un servicio al cliente excepcional, asegurando que siempre obtengas lo que necesitas, cuando lo necesitas.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link href={"/pages/catalogo"}>
                                <p className="animate-bounce block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                    ¡Comencemos!
                                </p>
                            </Link>
                            <Link href={"/login"}>
                                <p className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                    Obtener acceso
                                    <IoArrowForward />
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <Image
                            src={"https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"}
                            className=" md:rounded-tl-[108px]"
                            width={576}
                            height={385}
                            alt="imagen de un grupo de personas hablando"
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">Empresas que confían en nosotros</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        {
                            logoImage.map((item, index) => (
                                <Image
                                    key={index}
                                    src={item.src}
                                    width={100}
                                    height={40}
                                    alt={item.alt}
                                    className="object-fill"
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
                <div className="space-y-3 text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        Preguntas Frecuentes
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto text-lg">
                        Resolvemos todas tus preguntas frecuentes. ¿Aún tienes dudas? No dudes en ponerte en contacto con nosotros.
                    </p>
                </div>
                <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                    {
                        faqsList.map((item, idx) => (
                            <div
                                className="space-y-3 mt-5"
                                key={idx}
                            >
                                <h4 className="text-xl text-gray-700 font-medium">
                                    {item.q}
                                </h4>
                                <p className="text-gray-500">
                                    {item.a}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Formulario section */}
            <section className="py-12">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                        <div className="max-w-lg space-y-3">
                            <h3 className="text-indigo-600 font-semibold">
                                Contacto
                            </h3>
                            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Cuéntanos cómo podemos ayudarte
                            </p>
                            <p>
                                Estamos aquí para ayudarte y responder cualquier pregunta que puedas tener. ¡Esperamos saber de ti! Por favor, completa el formulario o utiliza la información de contacto que se encuentra a continuación.
                            </p>
                            <div>
                                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                    {
                                        contactMethods.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-x-3">
                                                <div className="flex-none text-gray-400">
                                                    {item.icon}
                                                </div>
                                                <p>{item.contact}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}