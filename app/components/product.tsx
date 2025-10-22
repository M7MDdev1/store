import React from 'react'
import { Iproduct } from '../interfaces/Iproduct'
import Link from 'next/link'


export default function product({id, image, title, price}: Iproduct) {
  return (
    <Link href={`/product/${id}`}>
    <div>
        <img src={image} alt={title} width={200} height={200} />
        <h2>{title}</h2>
        <p>${price}</p>
    </div>
    </Link>
  )
}
