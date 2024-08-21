import ProductList from '@/app/components/catalogo/ProductList';
import Header from '@/app/components/header/Header';

export default async function Novedad() {



        //!----------------------------------------------//
    // LO QUE ESTA ENTRE LO ROJO ES PARA EL DEPLOY PORQUE NO TOMA EL LOCALHOST


        const getFetch = async () =>{
            const res = await fetch ('https://66af1becb05db47acc590364.mockapi.io/celulars')
            if (!res.ok) {
                throw new Error("No se pudieron obtener los datos. Revisar url de la api")
            }
            const data = await res.json()
            return data
        }
        const productos = await getFetch()
        const novedad = productos.filter(product => product.novedad === true);
    
    
        //!----------------------------------------------//
    
        // Esto es lo que tengo en dev que si funciona

    // const novedad = await fetch("http://localhost:3000/api/catalogo/novedad")
    //     .then(r => r.json())

        //------------------------------------------------//


    return (
        <>
            <Header />
            <main className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
                {!novedad ? (
                    <p>loading...</p>
                ) : (
                    <ProductList products={novedad} />
                )}
            </main>
        </>
    )
}
