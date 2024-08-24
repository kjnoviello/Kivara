import ProductDetail from '@/app/components/catalogo/ProductDetail'
import Header from '@/app/components/header/Header';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/app/firebase/config'

const getData = async (item) => {

  try {
    const productRef = collection(db, 'productos');
    const q = query(productRef, where("id", "==", parseInt(item)));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();

    } else {
      return [];
    }

  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];

  }
}

export default async function Detail({ params }) {

  const { id } = params;
  const product = await getData(id)

  return (
    <>
      <Header />
      <main>
        <ProductDetail product={product} />
      </main>
    </>
  )
}