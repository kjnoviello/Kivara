import getProductos from '@/app/api/getProductos';
import ProductList from '@/app/components/catalogo/ProductList';
import Header from '@/app/components/header/Header';

// Revalidate seteado en 5 min
export const revalidate = 300 

export default async function Catalogo() {

    const products = await getProductos()

    return (
        <>
            <Header />
            <main className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
                <ProductList products={products}/>
            </main>
        </>
    )
}




