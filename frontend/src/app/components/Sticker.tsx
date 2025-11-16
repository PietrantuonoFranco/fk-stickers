"use client"

import { useState } from "react"
import Product from "@/lib/interfaces/Product"
import Image from "next/image"

export default function Sticker({ product }: { product: Product }) {
  const [isFavourite, setIsFavourite] = useState(false);


  return (
    <div  className="text-fk-dark-gray shadow-md rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-2">
      <div className="relative p-4">
        {/* Product Image Placeholder */}
        <div className="mb-4 h-32 bg-gray-50 flex items-center justify-center">
          <div className="flex justify-center items-center">
            <Image 
              src={`/images/${product.id}.jpg`}
              alt="FK Stickers logo"
              width={500}
              height={500}
              className="cover h-32 w-32"
            />
          </div>
        </div>

        <button onClick={() => setIsFavourite(!isFavourite)} className="absolute secondary-button top-2 right-2 p-1 rounded-full cursor-pointer hover:shadow-md duration-300 transition-all">
          {isFavourite ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074" />
            </svg> 
          : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
            </svg>
          )}
        </button>

        {/* Product Info */}
        <h3 className="font-medium text-fk-dark-gray mb-3 hover:text-fk-blue leading-6">{product.name}</h3>

        <div>
          <span className="text-sm text-gray-500 line-through block">{product.originalPrice}</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-fk-dark-gray text-2xl">{product.salePrice}</span>
            <span className="px-2 py-1 rounded-full bg-green-200 text-xs text-green-600 font-semibold">{product.discount}</span>
          </div>

          <p className="text-sm mt-4 text-green-700">
            Free shipping <span className="text-fk-dark-gray ml-1">for your first purchase</span>
          </p>
        </div>
      </div>
    </div>
  )
}