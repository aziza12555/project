"use client"

import { create } from "zustand"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { carouselImg } from "@/constants"
import Card from "./card"
import LanguageSwitcher from "@/i18next/lngSwitch"



type CarouselState = {
  current: number
  next: () => void
  prev: () => void
  goTo: (index: number) => void
}

const useCarouselStore = create<CarouselState>((set, get) => ({
  current: 0,
  next: () =>
    set({
      current: (get().current + 1) % Object.keys(carouselImg).length,
    }),
  prev: () =>
    set({
      current:
        (get().current - 1 + Object.keys(carouselImg).length) %
        Object.keys(carouselImg).length,
    }),
  goTo: (index) => set({ current: index }),
}))

export default function Carousel() {
  const { current, next, prev, goTo } = useCarouselStore()
  const images = Object.values(carouselImg)

  return (
   <>
   <LanguageSwitcher/>
    <div className="relative  w-full max-w-7xl mt-5 mx-auto">
      <div className="overflow-hidden rounded-3xl shadow-lg">
        <img
          src={images[current]}
          alt="carousel"
          className="w-full h-75 object-cover transition-all duration-500"
        />
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
    <Card/>
   </>
  )
}
