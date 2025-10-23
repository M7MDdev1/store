"use client"
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { IProduct } from '../../app/cart/interfaces/Iproduct'

type CartItem = IProduct & { quantity: number }

interface CartState {
  items: CartItem[]
  addItem: (product: IProduct, quantity?: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clear: () => void
  totalItems: () => number
  totalPrice: () => number
}

const isClient = typeof window !== 'undefined'

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addItem: (product: IProduct, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id)
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
              ),
            }
          }
          return { items: [...state.items, { ...product, quantity }] }
        })
      },
      removeItem: (id: string) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQuantity: (id: string, quantity: number) =>
        set((state) => ({ items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)) })),
      clear: () => set({ items: [] }),
      totalItems: () => get().items.reduce((s, i) => s + i.quantity, 0),
      totalPrice: () => get().items.reduce((s, i) => s + i.quantity * i.price, 0),
    }),
    {
      name: 'cart-storage',
  storage: createJSONStorage(() => (isClient ? localStorage : (undefined as unknown) as Storage)),
    }
  )
)
