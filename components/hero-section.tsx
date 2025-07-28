"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, Play, MapPin, Bed, Bath, Maximize, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Featured properties for hero carousel
const heroProperties = [
  {
    id: 1,
    title: "Luxury Villa in Koramangala",
    location: "Koramangala 5th Block, Bangalore",
    price: "₹2.5 Crores",
    image: "/placeholder.svg?height=800&width=1200&text=Luxury+Villa+Koramangala",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "Villa",
    description: "Stunning luxury villa with modern amenities and prime location",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Premium Office Space",
    location: "Outer Ring Road, Bangalore",
    price: "₹1.2 Crores",
    image: "/placeholder.svg?height=800&width=1200&text=Premium+Office+Space",
    beds: null,
    baths: 4,
    sqft: 3500,
    type: "Commercial",
    description: "Modern office space in IT corridor with excellent connectivity",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Residential Plot in Whitefield",
    location: "Whitefield, Bangalore",
    price: "₹85 Lakhs",
    image: "/placeholder.svg?height=800&width=1200&text=Residential+Plot+Whitefield",
    beds: null,
    baths: null,
    sqft: 2400,
    type: "Plot",
    description: "BMRDA approved residential plot in gated community",
    rating: 4.7,
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProperties.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroProperties.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroProperties.length) % heroProperties.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={heroProperties[currentSlide].image || "/placeholder.svg"}
            alt={heroProperties[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-800/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white border-0">
                  {heroProperties[currentSlide].type}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-gold-400 fill-current" />
                  <span className="text-gold-400 font-medium">{heroProperties[currentSlide].rating}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Buy & Sell{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  Premium
                </span>{" "}
                Properties in Bangalore
              </h1>

              <p className="text-lg md:text-xl text-slate-200 mb-6">{heroProperties[currentSlide].description}</p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center text-slate-300">
                  <MapPin className="h-5 w-5 mr-2 text-gold-400" />
                  <span className="text-sm">{heroProperties[currentSlide].location}</span>
                </div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  {heroProperties[currentSlide].price}
                </div>
              </div>

              {/* Property Details */}
              <div className="flex items-center gap-6 mb-8">
                {heroProperties[currentSlide].beds && (
                  <div className="flex items-center text-slate-300">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="text-sm">{heroProperties[currentSlide].beds} BHK</span>
                  </div>
                )}
                {heroProperties[currentSlide].baths && (
                  <div className="flex items-center text-slate-300">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">{heroProperties[currentSlide].baths} Baths</span>
                  </div>
                )}
                <div className="flex items-center text-slate-300">
                  <Maximize className="h-4 w-4 mr-1" />
                  <span className="text-sm">{heroProperties[currentSlide].sqft} sq ft</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="premium">
                  View Property <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outlineWhite">
                  <Play className="mr-2 h-5 w-5" />
                  Virtual Tour
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Property Card */}
            <motion.div
              key={`card-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={heroProperties[currentSlide].image || "/placeholder.svg"}
                    alt={heroProperties[currentSlide].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-gold-500 to-gold-600 text-white border-0">Premium</Badge>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{heroProperties[currentSlide].title}</h3>
                <p className="text-slate-200 mb-4">{heroProperties[currentSlide].description}</p>
                <Button variant="navy" className="w-full">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex space-x-2">
            {heroProperties.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-gold-400 w-8" : "bg-white/50 w-3"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                500+
              </div>
              <div className="text-xs text-slate-300">Properties</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                200+
              </div>
              <div className="text-xs text-slate-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                50+
              </div>
              <div className="text-xs text-slate-300">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
