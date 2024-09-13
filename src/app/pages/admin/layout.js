'use client'
import { useAuthContext } from "@/app/context/AuthContext"
import React from "react"


const AdminLayout = ({ children, login }) => {
    const { user } = useAuthContext()

    return (
        <>
            {
                user?.logged ?
                    React.Children.toArray(children)
                    :
                    login
            }
        </>
    )
}

export default AdminLayout
