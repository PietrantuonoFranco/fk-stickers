"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface SearchSuggestion {
  id: string
  text: string
  type: "recent" | "trending" | "suggestion"
}

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export default function SearchBar({
  placeholder = "Search for stickers, designs, categories...",
  onSearch,
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Mock data - in a real app, this would come from an API
  const [suggestions] = useState<SearchSuggestion[]>([
    { id: "1", text: "vinyl stickers", type: "trending" },
    { id: "2", text: "custom decals", type: "trending" },
    { id: "3", text: "laptop stickers", type: "suggestion" },
    { id: "4", text: "car decals", type: "recent" },
    { id: "5", text: "waterproof stickers", type: "suggestion" },
    { id: "6", text: "holographic stickers", type: "recent" },
  ])

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.text.toLowerCase().includes(query.toLowerCase()),
  )

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim())
      setIsOpen(false)
      setQuery(searchQuery)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0) {
          handleSearch(filteredSuggestions[selectedIndex].text)
        } else {
          handleSearch(query)
        }
        break
      case "Escape":
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const clearSearch = () => {
    setQuery("")
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getSuggestionIcon = (type: SearchSuggestion["type"]) => {
    switch (type) {
      case "recent":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l2 2" />
            </g>
          </svg>
        )
      case "trending":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="text-fk-orange" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
              <path d="M20 13V8h-5" />
              <path d="m20 8l-5 5c-.883.883-1.324 1.324-1.865 1.373q-.135.012-.27 0c-.541-.05-.982-.49-1.865-1.373s-1.324-1.324-1.865-1.373a1.5 1.5 0 0 0-.27 0c-.541.05-.982.49-1.865 1.373l-3 3" />
            </g>
          </svg>
        )
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor" />
          </svg>
        )
    }
  }

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
            setSelectedIndex(-1)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full py-2 px-10 bg-white-50 text-gray-900 border-1 border-gray-200 rounded-full hover:shadow-sm hover:ring-1 hover:ring-gray-400 focus:outline-none focus:ring-1 focus:ring-fk-lila duration-300 transition-all"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 5L5 19M5 5l14 14" color="currentColor" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && (query || filteredSuggestions.length > 0) && (
        <div className="absolute w-full rounded-3xl overflow-hidden shadow-lg bg-fk-white top-full left-0 right-0 mt-2 shadow-lg border z-50 max-h-80 overflow-y-auto">
          {query && (
            <div
              className={`px-4 py-2 cursor-pointer hover:bg-[#E2E3E0] flex items-center gap-3 ${
                selectedIndex === -1 ? "bg-[#E2E3E0]" : ""
              }`}
              onClick={() => handleSearch(query)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor" />
              </svg>
              <span>Search for "{query}"</span>
            </div>
          )}

          {filteredSuggestions.length > 0 && (
            <>
              {query && <div className="border-t" />}
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={suggestion.id}
                  className={`px-4 py-2 cursor-pointer hover:bg-[#E2E3E0] flex items-center gap-3 ${
                    selectedIndex === index ? "bg-[#E2E3E0]" : ""
                  }`}
                  onClick={() => handleSearch(suggestion.text)}
                >
                  {getSuggestionIcon(suggestion.type)}
                  <span>{suggestion.text}</span>
                  {suggestion.type === "trending" && (
                    <span className="ml-auto text-xs text-fk-orange font-medium">Trending</span>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}
