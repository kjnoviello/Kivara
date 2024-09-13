import ButtonBack from '@/app/components/shared/buttonBack'
import React from 'react'

export default function Orders() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-12 md:py-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                {/* <ShoppingCartIcon className="h-10 w-10 text-muted-foreground" /> */}
            </div>
            <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold">Tu compra fue exitosa!</h3>
                <p className="text-muted-foreground">Gracias por confiar en nosotros.</p>
            </div>
            <div className=" flex justify-center w-1/2 self-center">
                <ButtonBack />
            </div>
        </div>
    )
}