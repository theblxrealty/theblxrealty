"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Property {
  id: string
  title: string
  location: string
  image: string
  beds?: number
  baths?: number
  sqft: number
  amenities?: string[]
  isNew?: boolean
  featured?: boolean
  type: string
  rating?: number
  price?: string
  priceRange?: string
  development?: boolean
}

export default function PropertyCard({ property }: { property: Property }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/properties/${property.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 transition-all duration-300  cursor-pointer flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Title and Location - ABOVE the image */}
        <div className="p-4 pb-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
            {property.title}
          </h3>
          <p className="text-sm text-amber-700 font-medium">
            {property.location}
          </p>
        </div>

        {/* Image Section - BELOW the title */}
        <div className="relative h-64 flex-shrink-0 overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          </motion.div>

          {/* Starting Price Overlay - Top Right */}
          <div className="absolute top-4 right-4 bg-white/95 rounded-full px-4 py-2">
            <p className="text-xs text-gray-600 font-medium">STARTING PRICE</p>
            <p className="text-sm font-bold text-amber-700">
              {property.priceRange || property.price || "Price on Application"}
            </p>
          </div>

          {/* Image Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 hover:opacity-100 transition-opacity">
            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {property.isNew && (
            <Badge className="absolute top-4 left-4 bg-red-500 text-white border-0 text-xs">
              New
            </Badge>
          )}
        </div>

        {/* Property Details Icons - At the bottom */}
        <div className="p-4 pt-2">
          <div className="flex items-center justify-between text-sm text-gray-600">
            {property.beds !== undefined && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-2 text-gray-500" />
                <span>{property.beds} Bed</span>
              </div>
            )}
            {property.baths && (
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-2 text-gray-500" />
                <span>{property.baths} Bath</span>
              </div>
            )}
            <div className="flex items-center">
              <Maximize className="h-4 w-4 mr-2 text-gray-500" />
              <span>{property.sqft} SQ. FT</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
