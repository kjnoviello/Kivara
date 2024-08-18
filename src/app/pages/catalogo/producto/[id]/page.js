import ProductDetail from '@/app/components/catalogo/ProductDetail'

export default async function Detail({params}) {
  const {id} = params;

  const products = await fetch(`http://localhost:3000/api/catalogo/producto/${id}`, { cache: "no-store" })
  .then(r => r.json())

  return (
    <main>
      {!products ? (
        <p>loading...</p>
      ) : (
        <ProductDetail product={products} />
      )}
    </main>
  )
}
