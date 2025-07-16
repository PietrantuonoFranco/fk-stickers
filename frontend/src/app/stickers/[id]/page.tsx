"use client"

import Image from "next/image"
import Link from "next/link"
import Offers from "@/app/components/Offers"
import { useState } from "react"

export default function Component() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const productImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ]

  const relatedTags = ["electronics", "gadgets", "tech", "mobile", "accessories", "premium", "wireless"]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full flex flex-col justify-center pt-6 pb-9 px-42">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
          <Link href="/" className="text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link href="#" className="text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors">
            Stickers
          </Link>
          <span>›</span>
          <span className="text-gray-900">Product name</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-8">
          {/* Product Images */}
          <div className="col-span-2 space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white  overflow-hidden">
              <Image
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt="Product main image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg border-2 overflow-hidden transition-all ${
                    selectedImage === index
                      ? "border-fk-dark-gray"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={`/images/${index + 1}.jpg`}
                    alt={`Product preview ${index + 2}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="col-span-3 space-y-4">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Product name</h1>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="text-gray-500 hover:text-fk-lila cursor-pointer"
                  >
                    {isWishlisted ?
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074" />
                      </svg> 
                    : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    )}
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                    {/* Add to cart icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175c-.229-.315-.624-.379-1.332-.392M9 6.5h8m-4 4v-8M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5" />
                        <circle cx="10.5" cy="20.5" r="1.5" />
                        <circle cx="17.5" cy="20.5" r="1.5" />
                      </g>
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                    {/* Share icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 6.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 5.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8.729 10.75l6.5-3m-6.5 5.5l6.5 3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Created by</span>
                <Link href="#" className="text-fk-violet hover:underline">
                  Username
                </Link>
              </div>

              {/* Rating */}
              {/*<div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (*/}
                    {/* Star icon */}
              {/*      <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.0)</span>
                <span className="text-sm text-gray-500">• 127 reviews</span>
              </div>*/}
            </div>

        {/*    <div className="w-full h-[1px] bg-gray-200"></div>   */}

            {/* Pricing */}
            <div className="space-y-3">
              <div className="flex flex-col justify-center items-start">
                <span className="text-lg text-gray-500 line-through">$119.99</span>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-900">$99.99</span>
                  <p className="bg-green-100 py-1 px-2 text-sm rounded-full text-green-800">17% OFF</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-green-700">
                {/* Truck icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    <path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" />
                    <path d="M14.5 17.5h-5M2 4h10c1.414 0 2.121 0 2.56.44C15 4.878 15 5.585 15 7v8.5m.5-9h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M2 13v2c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M2 7h6m-6 3h4" />
                  </g>
                </svg>
                Free shipping <span className="text-fk-dark-gray ml-1">for your first purchase</span>
              </div>
            </div>

        {/*    <div className="w-full h-[1px] bg-gray-200"></div>   */}

            {/* Description */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience premium quality with this exceptional product. Crafted with attention to detail and designed
                for modern lifestyles, this item combines functionality with style. Perfect for everyday use, it offers
                durability and performance that exceeds expectations. Whether you're looking for reliability or
                aesthetics, this product delivers on all fronts.
              </p>
            </div>

        {/*    <div className="w-full h-[1px] bg-gray-200"></div>   */}

            {/* Related Tags */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Related tags</h3>
              <div className="flex flex-wrap gap-2">
                {relatedTags.map((tag, index) => (
                  <div key={index} className="py-1 px-2 text-xs shadow-xs rounded-full border-1 bg-gray-100 border-gray-300">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Buy Button */}
            <div className="pt-12 flex justify-end items-end">
              <button className="rounded-xl py-3 px-12 text-white bg-fk-dark-gray font-semibold hover:bg-gray-700 cursor-pointer">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Offers/>
    </div>
  )
}
