"use client"

import React from 'react'
import { useCartStore } from '../../lib/stores/cartStore'
import CartProduct from './components/product'

export default function CartClient() {
  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const clear = useCartStore((s) => s.clear)
  const totalItems = useCartStore((s) => s.totalItems())
  const totalPrice = useCartStore((s) => s.totalPrice())

  if (items.length === 0) {
    return <div className="p-6">Your cart is empty.</div>
  }

  return (
    <div className="p-6">
      <div className="space-y-4">
        {items.map((it) => (
          <CartProduct key={it.id} item={it} onChangeQuantity={updateQuantity} onRemove={removeItem} />
        ))}
      </div>

      <div className="mt-6 border-t pt-4 flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-600">Items: {totalItems}</div>
          <div className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => clear()} className="px-4 py-2 bg-red-500 text-white rounded">
            Clear
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Checkout</button>
        </div>
      </div>
    </div>
  )
}
