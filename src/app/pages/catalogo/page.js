import ProductList from '@/app/components/catalogo/ProductList';
import Header from '@/app/components/header/Header';

export default async function Catalogo() {
    const products = await fetch("http://localhost:3000/api/catalogo", { cache: "no-store" })
        .then(r => r.json())

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
