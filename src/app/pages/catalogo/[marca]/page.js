import ProductList from '@/app/components/catalogo/ProductList'
import Header from '@/app/components/header/Header';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/app/firebase/config'

export function generateStaticParams() {
    return [
        { marca: "Samsung" },
        { marca: "Motorola" },
        { marca: "Huawei" },
        { marca: "Xiaomi" },
        { marca: "Iphone" },
        { marca: "TCL" },
    ]
}
export const revalidate = 3600

// Funcion para obtener los productos filtrado segun la marca desde firestore
const getMarca = async (item) => {

    try {
        const productRef = collection(db, 'productos');
        const q = query(productRef, where("marca", "==", item));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());

    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];

    }
}

export default async function Marca({ params }) {

    const { marca } = params;
    const products = await getMarca(marca)
    const productsLenght = products.length

    return (
        <>
            <Header marca={marca} productsLenght={productsLenght} />
            <main className='flex gap-5 flex-wrap p-5 mx-5 items-center justify-center'>
                <ProductList products={products} />
            </main>
        </>
    )
}
