'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoClose, IoMenu, IoMail, IoLogoFacebook, IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import styles from '../../styles.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useCartContext } from '@/app/context/CartContext';
import ButtonEmpty from './buttonEmpty';
import { useAuthContext } from '@/app/context/AuthContext';

const navigation = [
    { name: 'Inicio', href: '/', id: 1 },
    { name: 'Catálogo', href: '/pages/catalogo', id: 2 },
    { name: 'Nosotros', href: '/pages/nosotros', id: 3 },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const { quantityCart, emptyCart, valueCart } = useCartContext()
    const valueQuantityCart = quantityCart()

    const pathname = usePathname();

    const { user, logoutUser } = useAuthContext()

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
                            <RiInstagramFill className='cursor-pointer animate-bounce hover:animate-[0]' />
                        </Link>
                        <Link href={"https://www.facebook.com/"} target='_blank'>
                            <IoLogoFacebook className='cursor-pointer animate-bounce hover:animate-[0]' />
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
                                        priority="false"
                                    >
                                    </Image>
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 md:block self-center">
                                <div className="flex space-x-4">

                                    {navigation.map((item) => (
                                        <Link href={item.href} key={item.id}>
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

                                    {/* Si hay un usuario muestra el boton de Admin */}
                                    {
                                        user.logged ?
                                            <Link href="/pages/admin" key="4">
                                                <p
                                                    className={classNames(
                                                        pathname === "/pages/admin" ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium',
                                                    )}>
                                                    Admin
                                                </p>
                                            </Link>
                                            :
                                            ""
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">

                            {/* Carrito dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <div className='flex'>
                                        <MenuButton
                                            type="button"
                                            className="p-1 relative rounded-full bg-gray-800 text-gray-400 hover:text-white outline-none ring-2 ring-white ring-offset-2 ring-offset-gray-800 hover:scale-110"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Ver notificaciones</span>

                                            {
                                                valueQuantityCart > 0 ?
                                                    <Image
                                                        src="/shop_cart.jpg"
                                                        alt='carrito lleno'
                                                        width={100}
                                                        height={100}
                                                        className="h-12 w-12 rounded-full"
                                                    >
                                                    </Image>
                                                    :
                                                    <IoCartOutline aria-hidden="true" className="h-6 w-6" />
                                            }

                                        </MenuButton>

                                        <p className='text-white text-xl animate-bounce'>
                                            <sup>
                                                {
                                                    valueQuantityCart > 0 ?
                                                        valueQuantityCart
                                                        :
                                                        ""
                                                }
                                            </sup>
                                        </p>

                                    </div>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <Link href={"/pages/carrito"} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 hover:text-indigo-600">
                                            <span>Ver mi carrito</span>
                                            <p><strong><i>${valueCart()} - {quantityCart()}u.</i></strong></p>
                                        </Link>
                                    </MenuItem>
                                    <hr />
                                    <>
                                        {
                                            valueQuantityCart > 0 ?
                                                <MenuItem>
                                                    <div>
                                                        <ButtonEmpty inNavbar="ok" />
                                                    </div>
                                                </MenuItem>
                                                :
                                                ""
                                        }
                                    </>
                                </MenuItems>
                            </Menu>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="p-1 relative text-[#9ca3af] flex rounded-full bg-gray-800 hover:text-white text-sm outline-none ring-2 ring-white ring-offset-2 ring-offset-gray-800 hover:scale-110">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Abrir menu usuario</span>

                                        {/* Si hay usuario muestra su foto */}
                                        {
                                            user.logged ?
                                                <Image
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt='imagen usuario'
                                                    width={100}
                                                    height={100}
                                                    className="h-12 w-12 rounded-full"
                                                >
                                                </Image>
                                                :
                                                <FaRegUser aria-hidden="true" className=" rounded-full h-6 w-6" />
                                        }

                                    </MenuButton>
                                </div>

                                {/* Si hay usuario se muestra el menu desplegable */}
                                {
                                    user.logged ?
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <MenuItem>
                                                <button href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    Mi perfil
                                                </button>
                                            </MenuItem>
                                            <MenuItem>
                                                <button href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    Configuración
                                                </button>
                                            </MenuItem>
                                            <MenuItem>
                                                <button
                                                    onClick={() => { logoutUser() }}
                                                    className="block px-4 py-2 text-sm text-[#e02424] data-[focus]:bg-gray-100">
                                                    <strong>
                                                        Cerrar sesión
                                                    </strong>
                                                </button>
                                            </MenuItem>
                                        </MenuItems>
                                        :
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <MenuItem>
                                                <Link href="/pages/admin" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    Iniciar Sesión
                                                </Link>
                                            </MenuItem>
                                        </MenuItems>
                                }

                            </Menu>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="md:hidden">
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

                        {/* Si hay un usuario muestra el boton de Admin */}
                        <Link href="/pages/admin" key="4">
                            <DisclosureButton
                                className={classNames(
                                    pathname === "/pages/admin" ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                Admin
                            </DisclosureButton>
                        </Link>

                    </div>
                </DisclosurePanel>
            </Disclosure>

        </>
    )
}


export default Navbar