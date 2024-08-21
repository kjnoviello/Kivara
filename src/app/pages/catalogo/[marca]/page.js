import ProductList from '@/app/components/catalogo/ProductList'
import Header from '@/app/components/header/Header';

export default async function Marca({ params }) {

    // Tengo que obtener del params sino "marca" da undefined
    const { marca } = params;

    const products = await fetch(`http://localhost:3000/api/catalogo/${marca}`)
        .then(r => r.json())

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
