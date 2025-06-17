"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import HeroButton from "@/components/hero-button"

const backgroundImages = [
  "/images/welcome_image.jpg",
  "/images/welcome_image_2.jpg",
  "/images/welcome_image_3.jpg",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
      />

      {/* Solid or gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-white mb-6">
              Welcome to Church of God, Githurai 45
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Join us as we grow in faith, serve our community, and experience God's love together. Everyone is welcome at Church of God, Githurai 45.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <HeroButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
