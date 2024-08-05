'use client'
import React, { useEffect, useState } from 'react'
import ProductDetail from '@/app/components/catalogo/ProductDetail'
import { useParams} from 'next/navigation';
import mockApi from "@/app/utils/mockApi.json";


export default function Detail() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productFind = mockApi.find((item) => item.id === id);
    setProduct(productFind);
  }, [id]);

  return (
    <div>
      {!product ? (
        <div>Loading...</div>
      ) : (
        <ProductDetail product={product} />
      )}
    </div>
  )
}
