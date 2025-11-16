"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import Product from "@/lib/interfaces/Product"
import CartItemData from "@/lib/interfaces/CartItemData"

import Offers from "../components/Offers"

import cartData from "../../mock/cartData.json"
import products from "../../mock/products.json"
import stickerFinishes from "../../mock/stickerFinishes.json"
import stickerSizes from "../../mock/stickerSizes.json"


export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartInfo, setCartInfo] = useState<CartItemData[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>();


  //_____________UseEffects________________________________________
  useEffect(() => {
    setCartInfo(cartData);
  }, []);

  useEffect(() => {
    const productsInCart = cartData
      .map(data => products.find(product => product.id === data.idProduct))
      .filter(Boolean) as Product[];
      
    setCartItems(productsInCart);
  }, [cartData, products]);

  useEffect(() => {
    setTotalItems(cartInfo.reduce((sum, item) => sum + item.quantity, 0));
  }, [cartItems, cartInfo]);

  useEffect(() => {
    setTotalPrice( cartInfo.reduce((sum, item) => {
      const product = cartItems.find(p => p.id === item.idProduct);

      return sum + (product ? product.salePrice * item.quantity : 0);
    }, 0));
  }, [cartItems, cartInfo]);


  //_____________ArrowFunctions________________________________________
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartInfo((items) => items.map((item) => (item.idProduct === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const updateFinish = (id: number, finish: string) => {
    setCartInfo((items) => items.map((item) => (item.idProduct === id ? { ...item, finish: finish } : item)))
  }

  const updateSize = (id: number, size: string) => {
    setCartInfo((items) => items.map((item) => (item.idProduct === id ? { ...item, size: size } : item)))
  }


  return (

    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full flex justify-center pt-6 pb-9 px-42">
        <div className="flex gap-6 w-full mx-auto">
          {/* Cart Items Section */}
          <div className="flex-1 space-y-4">
            {cartInfo.map((data) => {
              const product = cartItems.find(p => p.id === data.idProduct);
              if (!product) return null;

              return (
                <div key={data.idProduct} className="text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-2">
                  <div className="p-6">
                    <div className="flex gap-4">
                      {/* Product Preview */}
                      <div className="w-40 h-40 rounded flex items-center justify-center bg-gray-50">
                        <div className="text-gray-400">
                          <Image
                            src={`/images/${data.idProduct}.jpg`}
                            alt="FK Stickers logo"
                            width={500}
                            height={500}
                            className="cover h-28 w-28"
                          />
                  {/*      
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 5L35 35M5 35L35 5" />
                          </svg>
                          <div className="text-xs mt-1 text-center">preview</div>
                  */}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex flex-col mb-2">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">
                              {product.name}
                            </h3>
                            <button
                              onClick={() => removeItem(data.idProduct)}
                              className="text-fk-red cursor-pointer hover:drop-shadow-md"
                            >
                              {/* Trash icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6" color="currentColor" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-sm italic">Created by <span className="text-fk-violet">
                            {product.author}
                          </span></p>
                        </div>

                        <div className="flex justify-between">
                          <div className="flex flex-col">
                            {/* Finish Options */}
                            <div className="my-1">
                              <span className="text-sm font-medium mr-2">Finish:</span>
                              <div className="inline-flex gap-1">
                                {stickerFinishes.map((finish) => (
                                  <button
                                    key={`${data.idProduct}-${finish}`}
                                    className={`py-1 px-2 text-xs shadow-sm rounded-full border-1 border-gray-300 cursor-pointer hover:border-fk-dark-gray hover:bg-gray-200 hover:shadow-md ${finish === data.finish ? "border-gray-400 bg-gray-300" : ""}`}
                                    onClick={() => updateFinish(data.idProduct, finish)}
                                  >
                                    {finish}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Size Options */}
                            <div className="my-1">
                              <span className="text-sm font-medium mr-2">Size:</span>
                              <div className="inline-flex gap-1">
                                {stickerSizes.map((size) => (
                                  <button
                                    key={`${data.idProduct}-${size}`}
                                    className={`py-1 px-2 text-xs shadow-sm rounded-full border-1 border-gray-300 cursor-pointer hover:border-fk-dark-gray hover:bg-gray-200 hover:shadow-md ${size === data.size ? "border-gray-400 bg-gray-300" : ""}`}
                                    onClick={() => updateSize(data.idProduct, size)}
                                  >
                                    {size}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center my-1 gap-2">
                              <span className="text-sm font-medium mr-2">Quantity:</span>
                              <button
                                className="main-button flex items-center justify-center shadow-sm rounded-md h-6 w-6 p-1 hover:shadow-md"
                                onClick={() => updateQuantity(data.idProduct, data.quantity - 1)}
                              >
                                {/* Minus icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" color="currentColor" />
                                </svg>
                              </button>
                              <input
                                type="number"
                                value={data.quantity}
                                onChange={(e) => updateQuantity(data.idProduct, Number.parseInt(e.target.value) || 1)}
                                className="w-10 h-6 text-center rounded-md border-b-2 border-transparent hover:border-gray-300 focus:border-fk-lila focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                min="1"
                              />
                              <button
                                className="main-button flex items-center justify-center shadow-sm rounded-md h-6 w-6 p-1 hover:shadow-md"
                                onClick={() => updateQuantity(data.idProduct, data.quantity + 1)}
                              >
                                {/* Plus icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m-8-8h16" color="currentColor" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Price Row */}
                          <div className="flex items-center ">
                            <div className="h-full flex flex-col justify-between">
                              <div className="text-right mb-auto">
                                <div className="flex items-center gap-2 mb-1">
                                  <div className="bg-green-100 text-green-800 text-xs py-1 px-2 rounded-full">
                                    {product.discount}
                                  </div>
                                  <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                                </div>
                                        
                                <div className="text-2xl font-bold">{product.salePrice.toFixed(2)}</div>
                              </div>

                              <button className="main-button w-full rounded-lg h-8 px-4">Buy now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary Section */}
          <div className="w-80">
            <div className="sticky top-5 w-80 text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-2">
              <div className="p-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Order summary</h2>
                  
                  <div className="w-full h-px bg-black mb-4"></div>

                  <div className="mb-2">
                    <span className="">Products ({totalItems})</span>
                  </div>

                  <button className="text-blue-600 underline mb-10 cursor-pointer hover:text-blue-800">
                    What is the shipping cost?
                  </button>

                  <div className="mb-6 flex items-center justify-between">
                    <div className="text-xl font-semibold">TOTAL</div>
                    {totalPrice && (
                      <div className="text-2xl font-bold">${totalPrice.toFixed(2)}</div>
                    )}
                  </div>

                  <button className="main-button w-full rounded-lg h-8">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

      <Offers/>
    </div>
  )
}
