"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bed, Bath, Maximize, MapPin, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Property {
  id: number
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
        className="bg-white transition-all duration-300 border border-gray-200 cursor-pointer h-[400px] flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section - Fixed Height */}
        <div className="relative h-48 flex-shrink-0">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          </motion.div>

          {property.isNew && (
            <Badge className="absolute top-3 left-3 bg-red-500 text-white border-0 text-xs">
              New
            </Badge>
          )}

          {/* Image dots indicator */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>

        {/* Content Section - Fixed Layout */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title and Location - Fixed Height */}
          <div className="mb-3 h-12">
            <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 leading-tight">
              {property.title}
            </h3>
            <p className="text-xs text-gray-600 flex items-center">
              <MapPin className="h-3 w-3 mr-1 text-red-500 flex-shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </p>
          </div>

          {/* Property Type and Size - Fixed Height */}
          <div className="mb-3 h-6">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">
                {property.development ? "Development" : property.type}
              </span>
              <span className="text-xs text-gray-600">
                {property.sqft} sqft
              </span>
            </div>
          </div>

          {/* Property Details Icons - Fixed Height */}
          <div className="mb-3 h-6">
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              {property.beds && (
                <div className="flex items-center">
                  <Bed className="h-3 w-3 mr-1" />
                  <span>{property.beds} beds</span>
                </div>
              )}
              {property.baths && (
                <div className="flex items-center">
                  <Bath className="h-3 w-3 mr-1" />
                  <span>{property.baths} baths</span>
                </div>
              )}
              <div className="flex items-center">
                <Maximize className="h-3 w-3 mr-1" />
                <span>1-4 reception</span>
              </div>
            </div>
          </div>

          {/* Price - Fixed at Bottom */}
          <div className="mt-auto pt-2 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900">
              {property.priceRange || property.price || "Price on Application"}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
