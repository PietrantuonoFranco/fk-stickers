"use client"

import Slider from "./components/Slider"
import MostSold from "./components/MostSold"
import Offers from "./components/Offers"
import Tags from "./components/Tags"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Slider/>

      <MostSold/>

      <Offers/>

      <Tags/>
    </div>
  )
}
