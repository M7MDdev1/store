import { Iproduct } from "@/app/interfaces/Iproduct";
import React from "react";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://fakestoreapi.com";
  const url = `${API_BASE}/products/${id}`;
  const response = await fetch(url, { cache: "no-store" });
  const product: Iproduct = await response.json();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-[#F3F5F7] rounded-lg p-6 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-96 object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            {product.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
              {product.category}
            </span>
            <span className="text-2xl font-bold text-emerald-700">
              ${product.price}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-4">
            <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-md hover:opacity-95 transition">
              Add to Cart
            </button>

          </div>

          <div className="text-sm text-gray-500 mt-4">
            Free shipping on orders over $50
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://fakestoreapi.com";
  const res = await fetch(`${API_BASE}/products/${params.id}`, { cache: "no-store" });
  const product: Iproduct = await res.json();

  return {
    title: `${product.title} — Ebra Store`,
    description: product.description?.slice(0, 160) ?? "Product details from Ebra Store",
  };
}
