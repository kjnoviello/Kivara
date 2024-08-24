import getData from "@/app/api/getData";

// export async function getFetch(id) {
//     const res = await fetch(`https://66af1becb05db47acc590364.mockapi.io/celulars/${id}`);
//     if (!res.ok) {
//         throw new Error("error en la obtencion de datos, vuelva más tarde")
//     }
//     return await res.json()

// }

export default async function Page({ params }) {

    const { id } = params

    const data = await getData(id)

    return (
        <div className="container mx-auto">
            <li>{data.nombre}</li>
            <p>{data.descripcion}</p>
        </div>
    )
}

