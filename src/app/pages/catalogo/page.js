import ProductList from '@/app/components/catalogo/ProductList';
import Header from '@/app/components/header/Header';
import getData from '@/app/api/getData';

export default async function Catalogo() {

    const products = await getData()

    return (
        <>
            <Header />
            <main className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
                <ProductList products={products} />
            </main>
        </>
    )
}
