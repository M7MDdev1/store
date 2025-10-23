import React from 'react'
import { Iproduct } from '../interfaces/Iproduct'
import Link from 'next/link'


export default function product({id, image, title, price}: Iproduct) {
  return (
    <Link href={`/product/${id}`} className='w-64'>
      <div className='w-64 h-108 bg-[#F3F5F7] flex items-center justify-center'>
        <img src={image} alt={title} className='p-5 '/>
      </div>
        <h3 className='font-bold truncate'>{title}</h3>
        <p>${price}</p>
    </Link>
  )
}
