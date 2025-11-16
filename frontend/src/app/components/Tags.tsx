"use client"

import { useState } from "react"
import tags from "../../mock/tags.json"

export default function Tags() {
  const [currentPage, setCurrentPage] = useState(0)
  const tagsPerPage = 24 // 3 rows × 8 tags
  const totalPages = Math.ceil(tags.length / tagsPerPage)

  const getCurrentTags = () => {
    const startIndex = currentPage * tagsPerPage
    return tags.slice(startIndex, startIndex + tagsPerPage)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="min-h-86 w-full max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md my-16 flex flex-col">
      {/* Header (igual que antes) */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">TAGS</h2>
        
        {/* Pagination dots */}
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentPage ? "bg-purple-500" : index === 1 ? "bg-gray-400" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Contenedor flexible para los tags */}
      <div className="flex-1 mb-3 px-6">
        {/* Tags Grid - mantiene tu formato original */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {getCurrentTags().map((tag, index) => (
            <button
              key={`${tag}-${index}`}
              className="tag px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows (posición fija en la parte inferior del contenedor) */}
      <div className="flex justify-center space-x-14">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="rounded-full bg-fk-lila hover:bg-purple-400 hover:text-fk-violet w-12 h-12 flex justify-center items-center cursor-pointer disabled:cursor-default disabled:opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 12h16M9 17s-5-3.682-5-5s5-5 5-5" color="currentColor" />
          </svg>
          <span className="sr-only">Previous page</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="rounded-full bg-fk-lila hover:bg-purple-400 hover:text-fk-violet w-12 h-12 flex justify-center items-center cursor-pointer disabled:cursor-default disabled:opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4m11 5s5-3.682 5-5s-5-5-5-5" color="currentColor" />
          </svg>
          <span className="sr-only">Next page</span>
        </button>
      </div>
    </div>
  )
}
