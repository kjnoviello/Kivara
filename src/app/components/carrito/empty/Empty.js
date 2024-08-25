import ButtonBack from "../../shared/buttonBack"

export default function Empty() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-12 md:py-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <ShoppingCartIcon className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold">Tu carrito está vacío</h3>
                <p className="text-muted-foreground">Todavía no has agregado ningún producto.</p>
            </div>
            <div className=" flex justify-center w-1/2 self-center">
                <ButtonBack />
            </div>
        </div>
    )
}

function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}