import Product from "./components/product"
import { Iproduct } from "./interfaces/Iproduct"
export default async function page() {
  const response = await fetch("https://fakestoreapi.com/products",{cache:"no-store"})
  const products = await response.json()
  console.log(products)
  return (
    <div>
      <h1>Products Page</h1>
      <div>
        {products.map((item: Iproduct) => (
          <Product
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            id={item.id}          />
        ))}
      </div>
    </div>
  )
}
