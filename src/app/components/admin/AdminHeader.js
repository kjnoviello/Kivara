'use client'
import { useAuthContext } from '@/app/context/AuthContext'
import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {

    const {logoutUser} = useAuthContext()

    const adminLinks = [
        {
            id: 1,
            href: "admin/create",
            title: "Cargar producto"
        },
        {
            id: 2,
            href: "admin/orders",
            title: "Ordenes"
        },
    ]

    return (
        <div className="mt-6 mx-4 flex ">
            {/* Botones de navegacion */}
            <div className="space-x-2 flex">
                {
                    adminLinks.map((link) =>
                        <Link
                            key={link.id}
                            href={link.href}
                            className="bg-[#1a56db] hover:bg-[#1e429f] py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
                        >
                            {link.title}
                        </Link>
                    )
                }
            </div>
            <button
                onClick={() => logoutUser()}
                className="bg-[red] hover:bg-[#e02424] mx-2 space-x-2-2 py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center">
                Cerrar sesion
            </button>
        </div>
    )
}

export default AdminHeader