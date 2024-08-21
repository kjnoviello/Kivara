import ProductList from '@/app/components/catalogo/ProductList';
import Header from '@/app/components/header/Header';

export default async function Catalogo() {



    //!----------------------------------------------//
    const getFetch = async () => {
        const res = await fetch('https://66af1becb05db47acc590364.mockapi.io/celulars')
        if (!res.ok) {
            throw new Error("No se pudieron obtener los datos. Revisar url de la api")
        }
        const data = await res.json()
        return data
    }
    const products = await getFetch()


    //!----------------------------------------------//

    // Esto es lo que tengo en dev que si funciona

    // const products = await fetch("http://localhost:3000/api/catalogo", { cache: "no-store" })
    //     .then(r => r.json())

    //----------------------------------------------//

    return (
        <>
            <Header />
            <main className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
                {!products ? (
                    <p>loading...</p>
                ) : (
                    <ProductList products={products} />
                )}
            </main>
        </>
    )
}
