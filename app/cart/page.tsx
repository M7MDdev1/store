"use client"
import dynamic from 'next/dynamic'

const CartClient = dynamic(() => import('./CartClient'), { ssr: false })

export default function CartPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold p-6">Shopping Cart</h1>
      <CartClient />
    </main>
  )
}
