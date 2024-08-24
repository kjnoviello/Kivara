import ProductDetail from '@/app/components/catalogo/ProductDetail'
import Header from '@/app/components/header/Header';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/app/firebase/config'


export async function generateStaticParams() {
  
  try {
    const productRef = collection(db, 'productos');
    const querySnapshot = await getDocs(productRef);
    const paths = querySnapshot.docs.map(doc => {
      return { id: doc.data().id.toString() };
    });
    return paths;

  } catch (error) {
    console.error("Error fetching product IDs: ", error);
    return [];

  }
}

export const revalidate = 3600


// Funcion para obtener el detalle de cada producto segun su id desde firestore
const getDetalle = async (item) => {

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
  const product = await getDetalle(id)

  return (
    <>
      <Header />
      <main>
        <ProductDetail product={product}/>
      </main>
    </>
  )
}