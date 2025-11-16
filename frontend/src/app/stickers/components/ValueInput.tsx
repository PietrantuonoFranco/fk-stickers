'use client'

import { useState } from 'react'

type Props = {
  placeholder?: string
}

export default function ValueInput({ placeholder = '' }: Props) {
  const [max, setMax] = useState<string>('')

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="number"
          min={0}
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-md px-3 py-2 text-fk-dark-gray border-1 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md"
        />
      </div>
    </div>
  )
}
