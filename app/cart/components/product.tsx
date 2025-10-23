"use client"

import React from 'react'
import type { IProduct } from '../interfaces/Iproduct'

interface Props {
  item: IProduct & { quantity: number }
  onChangeQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export default function CartProduct({ item, onChangeQuantity, onRemove }: Props) {
  return (
    <div className="flex items-center gap-4 p-4 border-b">
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
      ) : (
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center">No Image</div>
      )}
      <div className="flex-1">
        <div className="font-medium">{item.title}</div>
        <div className="text-sm text-gray-600">${item.price.toFixed(2)}</div>
      </div>
      <div className="flex items-center gap-2">
        <input
          aria-label={`Quantity for ${item.title}`}
          type="number"
          min={1}
          value={item.quantity}
          onChange={(e) => onChangeQuantity(item.id, Math.max(1, Number(e.target.value || 1)))}
          className="w-16 p-1 border rounded"
        />
        <button
          onClick={() => onRemove(item.id)}
          className="text-sm text-red-600 hover:underline"
          aria-label={`Remove ${item.title}`}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
