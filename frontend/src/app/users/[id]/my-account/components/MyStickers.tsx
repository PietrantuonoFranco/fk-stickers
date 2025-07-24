"use client"

import Image from "next/image";
import products from "../../../../../mock/products.json"
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function MyStickers() {

  return (
    <div className="min-h-110 my-6 mx-8 border-1 border-gray-200 shadow-md bg-white rounded-2xl w-full py-10 px-12">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-fk-dark-gray">My stickers</h2>
            <Link href="/stickers/upload" className="main-button flex justify-center items-center w-8 h-8 rounded-md duration-300 transition-all">
              {/* Plus icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </Link>
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
          {products.map((product) => (
            <div key={product.id} className="text-fk-dark-gray shadow-md rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-2">
              <div className="p-4">
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

                {/* Product Info */}
                <h3 className="font-medium text-lg text-fk-dark-gray mb-2 hover:text-fk-blue">{product.name}</h3>

                <div>
                  <span className="text-sm text-gray-500 line-through block">{product.originalPrice}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-fk-dark-gray text-xl">{product.salePrice}</span>
                    <span className="text-green-600 font-medium">{product.discount}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 my-4 mb-6">
                {/* View details button */}
                <Link href="/" className="border-2 border-fk-blue bg-fk-white text-fk-blue hover:bg-fk-blue hover:text-fk-white p-1 rounded-md inline-flex justify-center items-center hover:shadow-md duration-300 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd" strokeWidth={1} stroke="currentColor">
                      <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></path>
                      <path d="M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56c-.267.605-.383 1.264-.383 2.152s.116 1.547.383 2.152c.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75s7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56c.267-.605.383-1.264.383-2.152s-.116-1.547-.383-2.152c-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25M3.87 9.162C5.498 7.045 8.15 4.75 12 4.75s6.501 2.295 8.13 4.412c.44.57.696.91.865 1.292c.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25s-6.501-2.295-8.13-4.412c-.44-.57-.696-.91-.865-1.292c-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292"></path>
                    </g>
                  </svg>
                </Link>

                {/* Edit button */}
                <Link href="/" className="secondary-button p-1 rounded-md inline-flex justify-center items-center hover:shadow-md duration-300 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.172 19.828L19.828 8.172c.546-.546.818-.818.964-1.112a2 2 0 0 0 0-1.776c-.146-.295-.418-.567-.964-1.112c-.545-.546-.817-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.566.418-1.112.964L4.172 15.828c-.579.578-.868.867-1.02 1.235C3 17.43 3 17.839 3 18.657V21h2.343c.818 0 1.226 0 1.594-.152c.367-.152.656-.442 1.235-1.02M12 21h6M14.5 5.5l4 4" />
                  </svg>
                </Link>

                {/* Delete button */}
                <button className="cancel-button p-1 rounded-md inline-flex justify-center items-center hover:shadow-md duration-300 transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6" color="currentColor" />
                  </svg>
                </button>
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
