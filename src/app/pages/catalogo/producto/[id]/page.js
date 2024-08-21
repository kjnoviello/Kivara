import ProductDetail from '@/app/components/catalogo/ProductDetail'
import Header from '@/app/components/header/Header';

export default async function Detail({ params }) {
  const { id } = params;

  const products = await fetch(`http://localhost:3000/api/catalogo/producto/${id}`)
    .then(r => r.json())

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
