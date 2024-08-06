'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoClose, IoMenu, IoMail, IoLogoFacebook, IoArrowDown, IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import styles from '../../styles.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header/Header';


const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '/pages/catalogo' },
    { name: 'Nosotros', href: '/pages/nosotros' },
    { name: 'Admin', href: '/pages/admin' },
    { name: '404', href: '/not-found' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const pathname = usePathname();

    return (
        <>
            <Disclosure as="nav" className={styles.navbarBg}>
                <div className="flex flex-1 h-16 items-center px-20 px-50 justify-center gap-5 sm:items-stretch sm:justify-between">
                    <div className='text-white items-center gap-1 sm:flex m-auto'>
                        <div className='items-center gap-1 flex m-auto'>
                            <IoMail />
                            <a href='mailto:shop@kivara' className='text-white pr-2'>shop@kivara.com</a>
                        </div>
                        <div className='items-center gap-1 flex m-auto'>
                            <IoLogoWhatsapp />
                            <a href='https://wa.me/3416851106' target='_blank' className='text-white'>341-4557700</a>
                        </div>
                    </div>
                    <div className='text-white items-center gap-2 text-xl flex m-auto'>
                        <Link href={"https://www.instagram.com/"} target='_blank'>
                            <RiInstagramFill className='cursor-pointer' />
                        </Link>
                        <Link href={"https://www.facebook.com/"} target='_blank'>
                            <IoLogoFacebook className='cursor-pointer' />
                        </Link>
                    </div>
                </div>
                <div className='mx-auto mx-10'>
                    <hr className="border-gray-200 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" />
                </div>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-32 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">

                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Abrir menu</span>
                                <IoMenu aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <IoClose aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center md:items-stretch md:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link href={"/"}>
                                    <Image
                                        alt="Your Company"
                                        src="/logo.svg"
                                        className="h-16 w-auto text-white ml-12 md:ml-0"
                                        width={16}
                                        height={16}
                                    >
                                    </Image>
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 md:block self-center">
                                <div className="flex space-x-4">

                                    {navigation.map((item) => (
                                        <Link href={item.href} key={item.name}>
                                            <p
                                                className={classNames(
                                                    pathname === item.href ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                            >
                                                {item.name}
                                            </p>
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <Link href={"/pages/carrito"}>
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Ver notificaciones</span>
                                    <IoCartOutline  aria-hidden="true" className="h-6 w-6" />
                                </Link>
                                
                            </button>
                            <button
                                type="button"
                                className="ml-3 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Ver notificaciones</span>
                                <FaRegBell aria-hidden="true" className="h-6 w-6" />
                                
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Abrir menu usuario</span>
                                        <Image
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt='imagen usuario'
                                            width={100}
                                            height={100}
                                            className="h-8 w-8 rounded-full"
                                        >
                                        </Image>
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                            Mi perfil
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                            Configuración
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                            Cerrar sesión
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link href={item.href} key={item.name}>
                                <DisclosureButton
                                    className={classNames(
                                        pathname === item.href ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            </Link>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>

            {/* Header de marcas */}
            <Header />

        </>
    )
}


export default Navbar