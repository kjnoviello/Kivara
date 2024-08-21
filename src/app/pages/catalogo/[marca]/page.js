import ProductList from '@/app/components/catalogo/ProductList'
import Header from '@/app/components/header/Header';

export default async function Marca({ params }) {

    // Tengo que obtener del params sino "marca" da undefined
    const { marca } = params;


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
    const products =  productos.filter((item) => (item.marca.toLocaleLowerCase() === marca.toLocaleLowerCase()))


    //!----------------------------------------------//

    // Esto es lo que tengo en dev que si funciona

    // const products = await fetch(`http://localhost:3000/api/catalogo/${marca}`)
    //     .then(r => r.json())


    //-----------------------------------------------//

    return (
        <>
            <Header />
            <main className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
                {!products ? (
                    <p>loading</p>
                ) : (
                    <ProductList products={products} />
                )}
            </main>
        </>
    )
}
