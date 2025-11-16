"use client"

import type React from "react"

import { useState } from "react"


export default function UploadSticker() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("9.99")
  const [description, setDescription] = useState("")
  const [tagInput, setTagInput] = useState("")
  const [tags, setTags] = useState(["sticker", "design", "art", "creative"])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const [errorMessage, setErrorMessage] = useState("")

  const MAX_IMAGES = 4;

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (files) {
    const remainingSlots = MAX_IMAGES - uploadedImages.length;
    const newImages = Array.from(files)
      .slice(0, remainingSlots)
      .map((file) => URL.createObjectURL(file));
    
    setUploadedImages([...uploadedImages, ...newImages]);

    if (files.length > remainingSlots) {
      setErrorMessage(`Solo puedes subir ${MAX_IMAGES} imágenes como máximo. Se agregarán ${remainingSlots}.`);
    }
  }
};

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 py-6 px-42">
      <div className="mx-auto">
        <div className="text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm py-8 px-12">
          <div className="text-center pb-8">
            <h2 className="text-3xl font-bold text-fk-dark-gray">
              Upload Sticker
            </h2>
            <p className="text-muted-foreground mt-2">Create and share your custom sticker design</p>
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
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Column - Form Fields */}
              <div className="space-y-6">
                {/* Name Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Sticker Name
                  </label>
                  <input
                    id="name"
                    placeholder="Enter sticker name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md pl-3 pr-12 py-2 text-fk-dark-gray border-2 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md transition-colors"
                  />
                </div>

                {/* Price Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="price" className="text-sm font-medium">
                    Price
                  </label>
                  <div className="relative">
                    {/* Dollar Sign icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.417 8.148C18.417 5.858 15.544 4 12 4S5.583 5.857 5.583 8.148s1.75 3.556 6.417 3.556s7 1.185 7 4.148S15.866 20 12 20s-7-1.857-7-4.148M12 2v20" />
                    </svg>

                    <input
                      id="price"
                      type="number"
                      step="0.01"
                      value={price}
                      min={1}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-32 pl-9 pr-3 rounded-md py-2 text-fk-dark-gray border-2 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md transition-colors"
                    />
                  </div>
                </div>

                {/* Description Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    id="description"
                    placeholder="Write a description for your sticker..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[120px] w-full rounded-md pl-3 pr-12 py-2 text-fk-dark-gray border-2 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md transition-colors resize-none"
                  />
                </div>

                {/* Tags Section */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Tags</label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center gap-2">
                      {/* Monocle icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground text-gray-500">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor" />
                      </svg>

                      <input
                        placeholder="Add tags..."
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="pl-9 pr-3 rounded-md py-2 text-fk-dark-gray border-2 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md transition-colors"
                      />
                    </div>

                    <button
                      onClick={addTag}
                      className="main-button flex justify-center items-center w-10 h-10 rounded-md duration-300 transition-all"
                    >
                      {/* Plus icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>

                  {/* Tag Display */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <div
                        key={index}
                        className="tag px-3 py-1 flex items-center"
                      >
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-2 hover:text-purple-900 transition-colors">
                          {/* x icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="group">
                              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
 className="group-hover:stroke-[2]" d="M19 5L5 19M5 5l14 14" />
                            </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Image Upload */}
              <div className="space-y-6">
                {/* Upload Area */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">Sticker Images</label>
                  <div className="relative h-77 hover:drop-shadow-sm transition-all duration-200">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      disabled={uploadedImages.length >= MAX_IMAGES}
                    />
                    <div className={`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center h-full flex items-center justify-center
                      ${uploadedImages.length >= MAX_IMAGES 
                        ? 'border-gray-200 bg-gray-50 cursor-not-allowed' 
                        : 'border-gray-300 hover:bg-gray-50 cursor-pointer'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-4 ">
                        <div className="p-4 bg-purple-100 rounded-full">
                          {/* Image icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                              <circle cx="7.5" cy="7.5" r="1.5" />
                              <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                              <path d="M5 21c4.372-5.225 9.274-12.116 16.498-7.458" />
                            </g>
                          </svg>
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-700">Upload Images</p>
                          <p className="text-sm text-muted-foreground">Drag & drop or click to browse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Previews */}
                {uploadedImages.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preview</label>
                    <div className="grid grid-cols-4 gap-3">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group aspect-square">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg border-2 border-gray-200"
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-fk-red border-2 border-fk-red text-white rounded-full p-1 opacity-0 hover:bg-fk-white hover:text-fk-red group-hover:opacity-100 transition-all"
                          >
                            {/* x icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 5L5 19M5 5l14 14"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Upload Button */}
            <div className="flex justify-end pt-6">
              <button
                className="main-button px-6 py-3 rounded-2xl flex items-center font-semibold gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M12 4.5v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 4.5c.7 0 2.008 1.994 2.5 2.5m5.5 9.5c0 2.482-.518 3-3 3H7c-2.482 0-3-.518-3-3" />
                </svg>
                Upload Sticker
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
