import { Iproduct } from '@/app/interfaces/Iproduct';
import React from 'react'

export default async function ProductDetails({params}: {params: Promise<{ id: string }>;}) 
  {
  const { id } = await params; 
    
    const url = `https://fakestoreapi.com/products/${id}`
    console.log(url)
    const response = await fetch(url,{cache:"no-store"})
    const product: Iproduct = await response.json();
  return (
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} width={200} height={200} />
        <p>Price: ${product.price}</p>
        <p>category: ${product.category}</p>
    </div>
  )
}
