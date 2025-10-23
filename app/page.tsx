import Product from "./components/product";
import { Iproduct } from "./interfaces/Iproduct";

export const metadata = {
  title: "Home — Ebra Store",
  description: "Browse featured products from the Fake Store API. Fast, responsive demo storefront built with Next.js.",
};

export default async function page() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://fakestoreapi.com";
  const response = await fetch(`${API_BASE}/products`, { cache: "no-store" });
  const products: Iproduct[] = await response.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section className="bg-linear-to-r from-emerald-50 to-white rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold">Shop the latest products</h2>
          <p className="text-gray-600 mt-2">Hand-picked items from the Fake Store API — fast shipping and easy returns.</p>
          <div className="mt-4 flex gap-3">
            <a href="#products" className="inline-block bg-emerald-700 text-white px-4 py-2 rounded-md">Browse products</a>
          </div>
        </div>

      </section>

      <h3 id="products" className="text-xl font-semibold mb-4">Featured products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
