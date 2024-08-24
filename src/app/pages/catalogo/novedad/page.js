import ProductList from '@/app/components/catalogo/ProductList';
import Header from '@/app/components/header/Header';
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '@/app/firebase/config'

const getData = async () => {
    
    try {
        const productRef = collection(db, 'productos');
        const q = query(productRef, where("novedad", "==", true));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());

    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];

    }
}

export default async function Novedad() {

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
