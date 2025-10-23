"use client"

import React from 'react'
import type { Iproduct } from '../interfaces/Iproduct'
import { useCartStore } from '../../lib/stores/cartStore'

interface Props {
  product: Iproduct
  quantity?: number
  className?: string
}

export default function AddToCart({ product, quantity = 1, className }: Props) {
  const addItem = useCartStore((s) => s.addItem)

  const handleAdd = React.useCallback(() => {
    // map the app's Iproduct shape to the cart store's expected product shape
    const payload = {
      id: String(product.id),
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
    }

    addItem(payload, quantity)
  }, [addItem, product, quantity])

  return (
    <button
      onClick={handleAdd}
      className={
        className ||
        'w-full sm:w-auto bg-black text-white px-6 py-3 rounded-md hover:text-black hover:bg-white hover:border transition cursor-pointer'
      }
      aria-label={`Add ${product.title} to cart`}
    >
      Add to Cart
    </button>
  )
}
