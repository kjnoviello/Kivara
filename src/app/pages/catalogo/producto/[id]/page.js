import ProductDetail from '@/app/components/catalogo/ProductDetail'
import Header from '@/app/components/header/Header';

export default async function Detail({ params }) {
  const { id } = params;



  //!----------------------------------------------//
  const getFetch = async () => {
    const res = await fetch('https://66af1becb05db47acc590364.mockapi.io/celulars')
    if (!res.ok) {
      throw new Error("No se pudieron obtener los datos. Revisar url de la api")
    }
    const data = await res.json()
    return data
  }
  const productos = await getFetch()
  const products = productos.find((item) => item.id === id);


  //!----------------------------------------------//

  // Esto es lo que tengo en dev que si funciona


  // const products = await fetch(`http://localhost:3000/api/catalogo/producto/${id}`)
  //   .then(r => r.json())


  //--------------------------------------------//

  return (
    <>
      <Header />
      <main>
        {!products ? (
          <p>loading...</p>
        ) : (
          <ProductDetail product={products} />
        )}
      </main>
    </>
  )
}
