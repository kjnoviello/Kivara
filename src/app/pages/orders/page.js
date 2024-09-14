'use client'
import ButtonConfirm from '@/app/components/shared/buttonConfirm'
import { useCartContext } from '@/app/context/CartContext'
import React from 'react'

export default function Orders() {

    const {orderRef} = useCartContext()

    return (
        <div className="flex flex-col items-center justify-center gap-4 py-12 md:py-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <iframe src="https://lottie.host/embed/1f5752db-7698-47f9-9bc8-547e5ae8a6d6/mQPAoAAvjb.json"></iframe>
            </div>
            <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold typeAnimation">Tu compra fue exitosa!</h3>
                <p className="text-muted-foreground">Gracias por confiar en nosotros.</p>
                <p className="text-muted-foreground">Tu numero de ticket es: <strong><i>{orderRef}</i></strong></p>
            </div>
            <div className=" flex justify-center w-1/2 self-center">
                <ButtonConfirm />
            </div>
        </div>
    )
}