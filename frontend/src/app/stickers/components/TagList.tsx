'use client'

import { useState } from 'react'

export default function TagList() {
  const [selectedTags, setSelectedTags] = useState<number[]>([])
  const tags = ['tag', 'tag', 'tag', 'tag', 'tag', 'tag', 'tag']

  const toggleTag = (index: number) => {
    setSelectedTags((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }


  return (

    <div className="flex-1 mb-3">
      {/* Tags Grid - mantiene tu formato original */}
      <div className="flex flex-wrap items-center gap-1">
        {tags.map((tag, index) => (
          <button
            key={`${tag}-${index}`}
            onClick={() => toggleTag(index)}
            className={`
              ${selectedTags.includes(index) ? 
                'tag' 
              :
                'bg-gray-100 border border-fk-dark-gray rounded-full'
            } 
            px-2 py-0.5 text-xs transition-colors cursor-pointer`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
