"use client"

import { useState } from "react"
import products from "../../../mock/products.json"
import Image from "next/image"
import Product from "@/lib/interfaces/Product"

export default function CreateOffer() {
  const [discount, setDiscount] = useState("0.99")
  const [searchInput, setSearchInput] = useState("")
  const [selected, setSelected] = useState<Product[]>([])

  const [errorMessage, setErrorMessage] = useState("")


  const handleAddSticker = (product: Product) => {
  setSelected(prevSelected => {
    const isAlreadySelected = prevSelected.some(item => item.id === product.id);
    return isAlreadySelected
      ? prevSelected.filter(item => item.id !== product.id)
      : [...prevSelected, product];
  });
};

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 py-6 px-42">
      <div className="mx-auto">
        <div className="text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm py-8 px-12">
          <div className="text-center pb-8">
            <h2 className="text-3xl font-bold text-fk-dark-gray">
              Create Offer
            </h2>
          </div>

          {errorMessage && (
            <div className="flex justify-center items-center mb-8">
              <div className="flex justify-center items-center pl-6 pr-4 py-2 bg-red-200 text-fk-red text-center rounded-2xl">
                <p className="">{errorMessage}</p>

                <button onClick={() => setErrorMessage("")} className="ml-6 hover:text-red-900 transition-colors">
                  {/* x icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="group">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="group-hover:stroke-[2]" d="M19 5L5 19M5 5l14 14" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          <div className="space-y-8">
            <div className="flex">
              {/* Left Column - Form Fields */}
              <div className="space-y-6">
                {/* Price Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="price" className="text-sm font-medium">
                    Discount
                  </label>
                  <div className="relative">
                    <input
                      id="discount"
                      type="number"
                      step="1"
                      value={discount}
                      min={0.99}
                      max={99.99}
                      onChange={(e) => setDiscount(e.target.value)}
                      className="w-28 pr-10 pl-3 rounded-md py-2 text-fk-dark-gray border-2 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md transition-colors"
                    />

                    {/* Percent icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="absolute left-20 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20L20 4m-11.732.732a2.5 2.5 0 1 1-3.536 3.536a2.5 2.5 0 0 1 3.536-3.536m11 11a2.5 2.5 0 1 1-3.536 3.536a2.5 2.5 0 0 1 3.536-3.536"></path>
                    </svg>
                  </div>
                </div>

               

                {/* Stickers Section */}
                <div className="w-110 space-y-3">
                  <label className="text-sm font-medium">Stickers</label>
                  <div className="w-full flex items-center gap-2">
                    <div className="relative flex items-center gap-2 w-full ">
                      {/* Monocle icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground text-gray-500">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor" />
                      </svg>

                      <input
                        placeholder="Search stickers..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full pl-9 pr-3 rounded-md py-2 text-fk-dark-gray border-2 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md transition-colors"
                      />
                    </div>

                    <button className="text-fk-violet-blue hover:text-fk-violet hover:drop-shadow-md duration-300 transition-all cursor-pointer">
                      {/* Filter icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.857 12.506C6.37 10.646 4.596 8.6 3.627 7.45c-.3-.356-.398-.617-.457-1.076c-.202-1.572-.303-2.358.158-2.866S4.604 3 6.234 3h11.532c1.63 0 2.445 0 2.906.507c.461.508.36 1.294.158 2.866c-.06.459-.158.72-.457 1.076c-.97 1.152-2.747 3.202-5.24 5.065a1.05 1.05 0 0 0-.402.747c-.247 2.731-.475 4.227-.617 4.983c-.229 1.222-1.96 1.957-2.888 2.612c-.552.39-1.222-.074-1.293-.678a196 196 0 0 1-.674-6.917a1.05 1.05 0 0 0-.402-.755" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stickers */}
            <div className="w-full h-150 rounded-2xl border-1 border-gray-300 shadow-md p-4 grid grid-cols-6 gap-4">
              {products.map(product => (
                <div  className="h-60 text-fk-dark-gray shadow-md rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-2">
                  <div className="relative p-4">
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
                
                    <button onClick={() => handleAddSticker(product)} className="absolute secondary-button top-2 right-2 p-1 rounded-full cursor-pointer hover:shadow-md duration-300 transition-all">
                      {selected.includes(product) ?
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 14l3.5 3.5L19 6.5"></path>
                        </svg>
                      : (
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"></path>
                        </svg>
                      )}
                    </button>
                
                    {/* Product Name */}
                    <h3 className="font-medium text-center text-fk-dark-gray hover:text-fk-blue leading-6">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Upload Button */}
            <div className="flex justify-end pt-6">
              <button
                className="main-button px-6 py-3 rounded-2xl flex items-center font-semibold gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Create Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
