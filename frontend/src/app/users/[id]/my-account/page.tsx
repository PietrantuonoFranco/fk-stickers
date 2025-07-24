"use client"

import { useState } from "react"
import PersonalInformation from "./components/PersonalInformation"
import SideBar from "./components/SideBar"
import MyStickers from "./components/MyStickers";
import Favourites from "./components/Favourites";
import Purchases from "./components/Purchases";

export default function MyAccount() {
  const [option, setOption] = useState("Personal information");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar option={option} setOption={setOption}/>

      {/* Options */}
      {option === "Personal information" && (
        <PersonalInformation/>
      )}

      {option === "My stickers" && (
        <MyStickers/>
      )}

      {option === "Favourites" && (
        <Favourites/>
      )}

      {option === "Purchases" && (
        <Purchases/>
      )}
    </div>
  )
}
