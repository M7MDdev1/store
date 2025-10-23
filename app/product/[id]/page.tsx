import { Iproduct } from "@/app/interfaces/Iproduct";
import React from "react";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const API_BASE = process.env.API;
  const url = `${API_BASE}/products/${id}`;
  console.log(url);
  const response = await fetch(url, { cache: "no-store" });
  const product: Iproduct = await response.json();
  return (
    <div className="flex">
      <div className="w-136 h-180 bg-[#F3F5F7] flex items-center justify-center">
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h1 className="text-4xl font-medium">{product.title}</h1>
        <p className="font-normal text-[#6C7275]">{product.description}</p>
        <p className="text-3xl">${product.price}</p>
        <p>category: {product.category}</p>

        <button className="bg-black text-white px-6 py-3 mt-4 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
