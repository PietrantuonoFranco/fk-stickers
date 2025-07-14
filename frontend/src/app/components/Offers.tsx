"use client"

import products from "../../mock/products.json"
import Image from "next/image"

export default function Offers() {
  return (
    <>
      {/* Most Sold Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fk-dark-gray text-center mb-4 tracking-wide">OFFERS</h2>

          {/* Product Grid */}
          <div className="relative">
            {/* Left Navigation Circle */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-fk-lila hover:bg-purple-400 hover:text-fk-violet w-12 h-12 flex justify-center items-center cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 12h16M9 17s-5-3.682-5-5s5-5 5-5" color="currentColor" />
              </svg>
            </button>

            {/* Right Navigation Circle */}
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-fk-lila hover:bg-purple-400 hover:text-fk-violet w-12 h-12 flex justify-center items-center cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4m11 5s5-3.682 5-5s-5-5-5-5" color="currentColor" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto cursor-pointer">
              {products.map((product) => (
                <div key={product.id} className="text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-2">
                  <div className="p-4">
                    {/* Product Image Placeholder */}
                    <div className="mb-4 h-32 bg-gray-50 flex items-center justify-center">
                      <div className="flex justify-center items-center">
                        <Image
                          src={`/images/${product.id}.jpg`}
                          alt="FK Stickers logo"
                          width={500}
                          height={500}
                          className="cover h-28 w-28"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <h3 className="font-medium text-fk-dark-gray text-sm mb-2 hover:text-fk-blue">{product.name}</h3>

                    <div className="mb-2">
                      <span className="text-xs text-gray-500 line-through block">{product.originalPrice}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-fk-dark-gray text-lg">{product.salePrice}</span>
                        <span className="text-xs text-green-600 font-medium">{product.discount}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600">Free shipping for your first purchase</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
