import ProductList from '@/app/components/catalogo/ProductList';
import Header from '@/app/components/header/Header';

export default async function Novedad() {

    const novedad = await fetch("http://localhost:3000/api/catalogo/novedad")
        .then(r => r.json())

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
