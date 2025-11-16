"use client"

import Image from "next/image";
import products from "../../../../../mock/products.json"
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

import Product from "@/lib/interfaces/Product"

export default function Favourites() {
  const [favouriteStickers, setFavouritesStickers] = useState<Product[]>([])

  useEffect(() => {
    setFavouritesStickers(products);
  }, [])

  const removeFavourite = (id: number) => {
    setFavouritesStickers((stickers) => stickers.filter((sticker) => sticker.id !== id))
  }

  return (
    <div className="min-h-110 my-6 mx-8 border-1 border-gray-200 shadow-md bg-white rounded-2xl w-full py-10 px-12">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-fk-dark-gray">Favourites</h2>
          </div>

          <div className="w-105 flex items-center gap-4">
            <button className="text-fk-violet-blue hover:text-fk-violet hover:drop-shadow-md duration-300 transition-all cursor-pointer">
              {/* Filter icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.857 12.506C6.37 10.646 4.596 8.6 3.627 7.45c-.3-.356-.398-.617-.457-1.076c-.202-1.572-.303-2.358.158-2.866S4.604 3 6.234 3h11.532c1.63 0 2.445 0 2.906.507c.461.508.36 1.294.158 2.866c-.06.459-.158.72-.457 1.076c-.97 1.152-2.747 3.202-5.24 5.065a1.05 1.05 0 0 0-.402.747c-.247 2.731-.475 4.227-.617 4.983c-.229 1.222-1.96 1.957-2.888 2.612c-.552.39-1.222-.074-1.293-.678a196 196 0 0 1-.674-6.917a1.05 1.05 0 0 0-.402-.755" />
              </svg>
            </button>

            <SearchBar/>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto cursor-pointer">
          {favouriteStickers.map((product) => (
            <div key={product.id} className="text-fk-dark-gray shadow-md rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-2">
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

                <button onClick={() => removeFavourite(product.id)} className="absolute secondary-button top-2 right-2 p-1 rounded-full cursor-pointer hover:shadow-md duration-300 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074" />
                  </svg> 
                </button>

                {/* Product Info */}
                <h3 className="font-medium text-lg text-fk-dark-gray mb-2 hover:text-fk-blue">{product.name}</h3>

                <div>
                  <span className="text-sm text-gray-500 line-through block">{product.originalPrice}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-fk-dark-gray text-xl">{product.salePrice}</span>
                    <span className="text-green-600 font-medium">{product.discount}</span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2 text-green-700">
                    {/* Truck icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" />
                        <path d="M14.5 17.5h-5M2 4h10c1.414 0 2.121 0 2.56.44C15 4.878 15 5.585 15 7v8.5m.5-9h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M2 13v2c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M2 7h6m-6 3h4" />
                    </g>
                    </svg>

                    <p className="text-sm">
                      Free shipping <span className="text-fk-dark-gray ml-1">for your first purchase</span>
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length > 16 && (
          <div className="mx-auto mt-20">
            <div className="flex items-center gap-8 text-fk-dark-gray">
              <button className="flex items-center justify-center p-1 rounded-full bg-fk-lila hover:bg-fk-violet-blue hover:text-fk-white hover:drop-shadow-md duration-300 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 6s-6 4.419-6 6s6 6 6 6" />
                </svg>
              </button>

              <nav className="flex items-center gap-4 text-lg">
                <Link href="/" className="text-fk-blue hover:text-fk-violet-blue hover:drop-shadow-md duration-300 transition-all">1</Link>
                <Link href="/" className="text-fk-blue hover:text-fk-violet-blue hover:drop-shadow-md duration-300 transition-all">2</Link>
                <Link href="/" className="text-fk-blue hover:text-fk-violet-blue hover:drop-shadow-md duration-300 transition-all">3</Link>
              </nav>

              <button className="flex items-center justify-center p-1 rounded-full bg-fk-lila hover:bg-fk-violet-blue hover:text-fk-white hover:drop-shadow-md duration-300 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 6s6 4.419 6 6s-6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
