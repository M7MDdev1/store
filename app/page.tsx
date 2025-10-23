import Product from "./components/product";
import { Iproduct } from "./interfaces/Iproduct";
export default async function page() {
  const API_BASE =
    process.env.API ?? "https://fakestoreapi.com";
  const response = await fetch(`${API_BASE}/products`, { cache: "no-store" });
  const products = await response.json();
  console.log(products);
  return (
    <div>
      <img src="header.png" alt="header" />
      <div className="grid grid-cols-3 justify-items-center">
        {products.map((item: Iproduct) => (
          <Product
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
