export interface IProduct {
  id: string
  title: string
  description?: string
  price: number
  image?: string
  // quantity is managed by the cart store; optional on the product itself
  quantity?: number
}
