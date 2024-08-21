// import React from 'react'

// const getPageById = async (id) => {

//     const res = await fetch(`https://66af1becb05db47acc590364.mockapi.io/celulars/${id}`)
//     if (!res.ok) {
//         throw new Error("no se pudo obtener los datos de la url")
//     }
//     return await res.json()

// }

// const PageID = async ({ params }) => {

//     const { id } = params;

//     const data = await getPageById(id);


//     return (
//         <div className='container m-auto w-full'>
//             <li>Articulo: {data.id}</li>
//             <p>{data.nombre}</p>
//             <p>{data.marca}</p>
//             <p>{data.descripcion}</p>

//         </div>
//     )
// }

// export default PageID






export async function getFetch(id) {
    const res = await fetch(`https://66af1becb05db47acc590364.mockapi.io/celulars/${id}`);
    if (!res.ok) {
        throw new Error("error en la obtencion de datos, vuelva más tarde")
    }
    return await res.json()

}

export default async function Page({ params }) {

    const { id } = params

    const data = await getFetch(id)

    return (
        <div className="container mx-auto">
            <li>{data.nombre}</li>
            <p>{data.descripcion}</p>
        </div>
    )
}

