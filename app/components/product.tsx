import React from 'react'
import { Iproduct } from '../interfaces/Iproduct'
import Link from 'next/link'

export default function Product({ id, image, title, price }: Iproduct) {
  return (
    <Link
      href={`/product/${id}`}
      aria-label={`View details for ${title}`}
      className="group block w-full max-w-xs mx-auto"
    >
      <div className="rounded-lg overflow-hidden bg-[#F3F5F7] shadow-sm hover:shadow-md transition-shadow duration-200">
  <div className="aspect-4/3 flex items-center justify-center p-4 bg-linear-to-b from-white to-transparent">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-900 truncate" title={title}>
            {title}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-bold text-slate-900">${price}</p>
            <button
              className="ml-3 inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-1 text-xs font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-hidden
            >
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
