'use client'

import { useState } from 'react'

export default function DiscountFilter() {
  const discounts = [
    'From 5% OFF',
    'From 10% OFF',
    'From 15% OFF',
    'From 20% OFF',
    'From 25% OFF',
  ]
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {discounts.map((discount, index) => (
        <label key={index} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="discount"
            checked={selected === index}
            onChange={() => setSelected(index)}
            className="w-4 h-4 accent-black cursor-pointer"
          />
          <span className="text-sm">{discount}</span>
        </label>
      ))}
    </div>
  )
}
