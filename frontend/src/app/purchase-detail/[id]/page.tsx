"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import Product from "@/lib/interfaces/Product"
import CartItemData from "@/lib/interfaces/CartItemData"

import Offers from "../../components/Offers"

import cartData from "../../../mock/cartData.json"
import products from "../../../mock/products.json"


export default function PurchaseDetail() {
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


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full flex justify-center pt-6 pb-9 px-42">
        <div className="flex gap-6 w-full mx-auto">
          {/* Cart Items Section */}
          <div className="grid grid-cols-2 gap-4">
            {cartInfo.map((data) => {
              const product = cartItems.find(p => p.id === data.idProduct);
              if (!product) return null;

              return (
                <div key={data.idProduct} className="text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-2">
                  <div className="p-6">
                    <div className="w-full flex flex-col gap-4">
                      {/* Product Preview */}
                      <div className="w-full flex gap-4">
                        <div className="w-30 h-30 rounded flex items-center justify-center bg-gray-50">
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
                              <h3 className="text-xl font-semibold line-clamp-1">
                                {product.name}
                              </h3>
                            </div>
                            <p className="text-sm italic">Created by <span className="text-fk-violet">
                              {product.author}
                            </span></p>
                          </div>

                          <div className="flex justify-between">
                            <div className="flex flex-col">
                              {/* Finish */}
                              <div className="my-1">
                                <span className="text-sm font-medium mr-2">Finish:</span>
                                <div className="inline-flex gap-1">
                                  <p
                                    className="py-1 px-2 text-xs shadow-sm rounded-full border-1 border-gray-300 bg-gray-200"
                                  >
                                    {data.finish}
                                  </p>
                                </div>
                              </div>

                              {/* Size */}
                              <div className="my-1">
                                <span className="text-sm font-medium mr-2">Size:</span>
                                <div className="inline-flex gap-1">
                                  <p
                                    className="py-1 px-2 text-xs shadow-sm rounded-full border-1 border-gray-300 bg-gray-200"
                                  >
                                    {data.size}
                                  </p>
                                </div>
                              </div>

                              {/* Quantity */}
                              <div className="flex items-center my-1 gap-2">
                                <span className="text-sm font-medium mr-2">Quantity:</span>
                                <p
                                  className="text-center rounded-md"
                                >
                                  {data.quantity}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                      <div className="w-full h-px bg-gray-300 mb-2"></div>

                      {/* Price Row */}
                      <div className="flex items-center justify-end">
                        <div className="w-full flex justify-between">
                          <p className="flex items-end uppercase text-xl text-fk-dark-gray font-semibold">Subtotal</p>
                          <div className="text-right mb-auto">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="bg-green-100 text-green-800 text-xs py-1 px-2 rounded-full font-semibold ">
                                {product.discount}
                              </div>
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                            </div>
                                        
                            <div className="text-2xl font-bold">{product.salePrice.toFixed(2)}</div>
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
            <div className="sticky top-5 w-80 text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-white backdrop-blur-sm p-2">
              <div className="p-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Order summary</h2>
                  
                  <div className="w-full h-px bg-black mb-4"></div>

                  <div className="flex items-center gap-2 text-fk-dark-gray mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c-.818 0-1.6-.33-3.163-.99C4.946 19.366 3 18.543 3 17.16V7m9 15c.818 0 1.6-.33 3.163-.99C19.054 19.366 21 18.543 21 17.16V7m-9 15V11.355M8.326 9.691L5.405 8.278C3.802 7.502 3 7.114 3 6.5s.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2s1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5s-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11s-1.871-.436-3.674-1.309M6 12l2 1m9-9L7 9"></path>
                    </svg>
                    Products ({totalItems})
                  </div>

                  <div className="flex items-center gap-2 text-fk-dark-gray mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 2v2M6 2v2m-3.5 8.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756zM3 8h18"></path>
                    </svg>
                    12/08/2024
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold">TOTAL</div>
                    {totalPrice && (
                      <div className="text-2xl font-bold">${totalPrice.toFixed(2)}</div>
                    )}
                  </div>
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
