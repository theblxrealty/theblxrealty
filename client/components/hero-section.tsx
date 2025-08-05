"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Search, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PropertySearch from "@/components/property-search"

export default function HeroSection() {

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
          <source src="/home-banner2.mp4" type="video/mp4" />
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
              <h1 className="font-bold mb-6 font-serif" style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '50px', fontWeight: '400' }}>
                Find your dream property
              </h1>

              {/* Search Form */}
              <motion.div 
                className="max-w-4xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <PropertySearch 
                  placeholder="Search by location, property type, or bedrooms..."
                  className="max-w-5xl mx-auto"
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-8 justify-center"
              >
                <Link href="/properties">
                  <Button 
                    size="lg" 
                    variant="ghost"
                    className="text-lg px-8 py-4 h-auto text-white hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105 relative group"
                  >
                    <span className="relative">
                      Buy Properties
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/properties">
                  <Button 
                    size="lg" 
                    variant="ghost"
                    className="text-lg px-8 py-4 h-auto text-white hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105 relative group"
                  >
                    <span className="relative">
                      Sell Properties
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
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
