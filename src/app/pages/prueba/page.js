// import Link from "next/link";

// export async function Data () {
//     const res = await fetch('https://66af1becb05db47acc590364.mockapi.io/celulars', 
//         {cache: "no-store"});
//     if (!res.ok) {
//         throw new Error ("error en la obtencion de datos, vuelva más tarde")
//     }
//     return await res.json()

// }

// export default async function Page () {

//     const data = await Data()

//     return(
//         <div className="container mx-auto">
//             {
//                 data.map((item) => (
//                     <Link href={`/pages/prueba/${item.id}`}>
//                         <li>{item.nombre} - ${item.precio}</li>
//                     </Link>
//                 ))
//             }
//         </div>
//     )
// }

 //*---------------------------------------------------------------------------------

import Link from "next/link";
import getData from '../../api/getProductos'

export default async function Page () {

    const products = await getData()
    
    console.log(products);
    // const novedad = data.filter(product => product.novedad === true)
    

    return(
        <div className="container mx-auto">
            {
                products.map((item) => (
                    <Link href={`/pages/prueba/${item.id}`}>
                        <li>{item.nombre} - ${item.precio}</li>
                    </Link>
                ))
            }
        </div>
    )
}











// import React from 'react'

// const getData = async () => {
    
//     const res = await fetch('https://66af1becb05db47acc590364.mockapi.io/celulars');
//     if (!res.ok) {
//         throw new Error("error en la obtencion de datos")
//     };
//     return await res.json()

// }

// const Prueba = async () => {

//     const data = await getData();

//     return (
//         <div className='container mx-auto'>
//             {
//                 data.map((item) => (
//                     <li>{item.marca} - {item.nombre}</li>
//                 ))
//             }
//         </div>
//     )
// }
// export default Prueba