"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/home-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay - removed blue tint */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Main Heading */}
              <h1 className="font-bold mb-6 font-serif" style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '50px' }}>
                Find your dream property
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                Search from top properties across India with premium locations and modern amenities
              </p>

              {/* Search Form */}
              <motion.form 
                onSubmit={handleSearch}
                className="max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="flex-1 flex items-center px-6 py-4">
                      <MapPin className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Enter location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent text-white placeholder-slate-300 outline-none text-lg"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gray-800/80 hover:bg-gray-700/80 text-white px-8 py-4 transition-all duration-300 flex items-center gap-2"
                    >
                      <Search className="h-5 w-5" />
                      <span className="font-medium">Search</span>
                    </button>
                  </div>
                </div>
              </motion.form>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/properties">
                  <Button 
                    size="lg" 
                    variant="outlineWhite"
                    className="text-lg px-8 py-4 h-auto mr-4 "
                  >
                    Buy Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/properties">
                  <Button 
                    size="lg" 
                    variant="outlineWhite"
                    className="text-lg px-8 py-4 h-auto "
                  >
                    Sell Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
