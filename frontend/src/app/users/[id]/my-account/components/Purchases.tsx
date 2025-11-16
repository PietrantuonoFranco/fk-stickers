"use client"

import { useState } from "react";
import tableData from "../../../../../mock/purchaseTableData.json"
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Purchases() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(tableData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = tableData.slice(startIndex, endIndex)


  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "processing":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-100 my-6 mx-8 border-1 border-gray-200 shadow-md bg-white rounded-2xl w-full py-10 px-12">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-fk-dark-gray">Purchases</h2>
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

        <div className="w-full mx-auto space-y-6">
          <div>
            <div>
              <div className="rounded-lg  overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-fk-violet-blue text-fk-violet">
                      <th className="font-semibold text-gray-700 py-4 px-4 text-left">
                        <div className="flex items-center gap-2">
                          {/* Calendar icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 2v2M6 2v2m-3.5 8.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756zM3 8h18"></path>
                          </svg>
                          Date
                        </div>
                      </th>
                      <th className="font-semibold text-gray-700 px-4 text-left">
                        <div className="flex items-center gap-2">
                          {/* Package icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c-.818 0-1.6-.33-3.163-.99C4.946 19.366 3 18.543 3 17.16V7m9 15c.818 0 1.6-.33 3.163-.99C19.054 19.366 21 18.543 21 17.16V7m-9 15V11.355M8.326 9.691L5.405 8.278C3.802 7.502 3 7.114 3 6.5s.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2s1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5s-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11s-1.871-.436-3.674-1.309M6 12l2 1m9-9L7 9"></path>
                          </svg>
                          Quantity
                        </div>
                      </th>
                      <th className="font-semibold text-gray-700 px-4 text-left">
                        <div className="flex items-center gap-2">
                          {/* Dollar coin icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                              <path d="M14 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M3.157 11A7.111 7.111 0 0 0 13 20.843"></path>
                              <path d="M15.771 8.205c-.216-.912-1.316-1.735-2.637-1.12c-1.321.616-1.531 2.598.467 2.808c.903.095 1.492-.11 2.03.471c.54.581.64 2.198-.738 2.634s-2.742-.245-2.891-1.212m1.984-5.782v.87m0 6.258v.872"></path>
                            </g>
                          </svg>
                          Total
                        </div>
                      </th>
                      <th className="font-semibold text-gray-700 px-4 text-left">
                        <div className="flex items-center gap-2">
                          {/* Package underlined icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 10.265V6h15v4.265c0 3.175 0 4.762-.976 5.749c-.977.986-2.548.986-5.69.986h-1.667c-3.143 0-4.714 0-5.69-.986c-.977-.986-.977-2.574-.977-5.749M4.5 6l.721-1.538c.56-1.194.84-1.79 1.406-2.126C7.194 2 7.92 2 9.375 2h5.25c1.454 0 2.181 0 2.748.336s.847.932 1.406 2.126L19.5 6m-9 3h3M4 22h8m8 0h-8m0 0v-2.5"></path>
                          </svg>
                          Status
                        </div>
                      </th>
                      <th className="font-semibold text-gray-700 px-4 text-right">
                        <div className="flex justify-end pr-3 items-center gap-2">
                          {/* Actions icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                              <path d="m8.533 13.653l1.967 1.72V6.5a1.5 1.5 0 0 1 3.001-.002l.004 4.764l2.636.427c1.702.26 2.553.389 3.152.753C20.283 13.044 21 14 21 15.266c0 .918-.224 1.534-.768 3.19c-.345 1.05-.518 1.575-.8 1.99a3.53 3.53 0 0 1-1.934 1.414c-.478.14-1.024.14-2.115.14h-.926c-1.452 0-2.177 0-2.824-.27a4 4 0 0 1-.339-.164c-.614-.338-1.072-.91-1.987-2.052l-2.963-3.698a1.57 1.57 0 0 1-.008-1.954a1.52 1.52 0 0 1 2.197-.21"></path>
                              <path d="M7 8h-.824C4.68 8 3.93 8 3.466 7.56C3 7.122 3 6.415 3 5s0-2.121.465-2.56S4.68 2 6.176 2h11.647c1.498 0 2.247 0 2.712.44C21 2.878 21 3.585 21 5s0 2.121-.465 2.56S19.32 8 17.823 8H17"></path>
                            </g>
                          </svg>
                          Actions
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* Table data */}
                    {tableData && tableData.map( purchase => (
                      <tr key={purchase.id} className="hover:bg-gray-50/50 transition-colors duration-150 border-b border-gray-100">
                        <td className="py-4 px-4">
                          <div className="text-gray-900">{purchase.date}</div>
                        </td>
                        <td className="px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-fk-dark-gray">{purchase.quantity}</span>
                            <span className="text-gray-500 text-sm">items</span>
                          </div>
                        </td>
                        <td className="px-4">
                          <span className="text-fk-dark-gray font-semibold">${purchase.total}</span>
                        </td>
                        <td className="px-4">
                          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm capitalize ${
                            purchase.status === "completed" ?
                              "bg-green-100 text-green-800"
                            : purchase.status === "pending" ?
                              "bg-yellow-100 text-yellow-800"
                            : purchase.status === "processing" ?
                              "bg-blue-100 text-fk-blue"
                            :
                              "bg-red-100 text-fk-red"
                          }`}>
                            {purchase.status}
                          </span>
                        </td>
                        <td className="px-4 text-right">
                          <div className="flex items-center justify-end gap-2 px-4">
                            {/* Cancel button */}
                            {purchase.status !== "canceled" && purchase.status !== "completed" && (
                              <button className="cancel-button w-8 h-8 p-1 rounded-md inline-flex justify-center items-center hover:shadow-md duration-300 transition-all cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5.75 5l14 14m3-7c0-5.523-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10"></path>
                                </svg>
                              </button>
                            )}

                            {/* View details button */}
                            <Link href="/" className="secondary-button w-8.6 h-8.5 p-1 rounded-md inline-flex justify-center items-center hover:shadow-md duration-300 transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd" strokeWidth={0.5} stroke="currentColor">
                                  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></path>
                                  <path d="M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56c-.267.605-.383 1.264-.383 2.152s.116 1.547.383 2.152c.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75s7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56c.267-.605.383-1.264.383-2.152s-.116-1.547-.383-2.152c-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25M3.87 9.162C5.498 7.045 8.15 4.75 12 4.75s6.501 2.295 8.13 4.412c.44.57.696.91.865 1.292c.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25s-6.501-2.295-8.13-4.412c-.44-.57-.696-.91-.865-1.292c-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292"></path>
                                </g>
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(endIndex, tableData.length)} of {tableData.length} results
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="main-button px-2 py-1 rounded-md flex items-center gap-1 hover:shadow-md duration-300 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 6s-6 4.419-6 6s6 6 6 6" />
                    </svg>
                    Previous
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className="w-8 h-8 p-0 text-fk-blue hover:text-fk-violet-blue hover:drop-shadow-md duration-300 transition-all"
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="main-button px-2 py-1 rounded-md flex items-center gap-1 hover:shadow-md duration-300 transition-all"
                  >
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 6s6 4.419 6 6s-6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
