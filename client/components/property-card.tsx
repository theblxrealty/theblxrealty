"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatPropertyType } from "@/lib/utils"

interface Property {
  id: string
  title: string
  location: string
  images: string[]
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  return (
    <Link href={`/properties/${property.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col lg:flex-row h-80">
          {/* Left Side - Property Info */}
          <div className="lg:w-1/2 px-4 lg:px-6 flex flex-col justify-between">
            {/* Title and Location */}
            <div className="mb-4">
              <h3 className="text-2xl lg:text-3xl font-tiempos text-amber-600 mb-2 leading-tight">
                {property.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span className="font-suisse font-medium text-sm">{property.location}</span>
              </div>
                             <div className="text-xl lg:text-2xl font-tiempos font-bold text-gray-900 mb-4" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '500'}}>
                  Starting from INR {property.priceRange || property.price || "Price on Application"}
                </div>
            </div>

            {/* Property Details */}
            <div className="space-y-3">
              {/* Property Type */}
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-amber-600 font-suisse text-sm font-medium">Property Type</span>
                <span className="text-gray-900 font-suisse font-semibold text-sm">
                  {formatPropertyType(property.type)}
                </span>
              </div>
              
              
              
              {/* Area */}
              <div className={`flex items-center justify-between py-2 ${(property.beds !== undefined && property.beds > 0) || (property.baths !== undefined && property.baths > 0) ? '' : 'border-b border-gray-100'}`}>
                <span className="text-amber-600 font-suisse text-sm font-medium">Area</span>
                <span className="text-gray-900 font-suisse font-semibold text-sm">{property.sqft} sq ft</span>
              </div>

              {/* Unit Types - Only show for properties with bedrooms/bathrooms */}
              {(property.beds !== undefined && property.beds > 0) || (property.baths !== undefined && property.baths > 0) ? (
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-amber-600 font-suisse text-sm font-medium">Unit Types</span>
                  <span className="text-gray-900 font-suisse font-semibold text-sm">
                    {property.beds !== undefined && property.beds > 0 && property.baths !== undefined && property.baths > 0 
                      ? `${property.beds}, ${property.beds + 1} & ${property.beds + 2} Bed Apartment`
                      : property.beds !== undefined && property.beds > 0 
                      ? `${property.beds} Bed Apartment`
                      : property.baths !== undefined && property.baths > 0 
                      ? `${property.baths} Bath Apartment`
                      : 'Studio Apartment'}
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          {/* Right Side - Two Images */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 h-full gap-2 px-2">
              {/* Left Image - Exterior View */}
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image 
                  src={property.images?.[0] || "/placeholder.svg"} 
                  alt={`${property.title} - Exterior View`} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/10" />
                
                {/* Clickable Arrow Overlay */}
                {/* <div className="absolute bottom-3 right-3 bg-amber-600 text-white p-2 rounded-lg shadow-lg hover:bg-amber-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div> */}
              </div>
              
              {/* Right Image - Interior View */}
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image 
                  src={property.images?.[1] || property.images?.[0] || "/placeholder.svg"} 
                  alt={`${property.title} - Interior View`} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/10" />
                
                {/* Clickable Arrow Overlay */}
                <div className="absolute bottom-3 right-3 bg-amber-600 text-white p-2 rounded-lg shadow-lg hover:bg-amber-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Image Navigation Arrows */}
            {property.images && property.images.length > 2 && (
              <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 hover:opacity-100 transition-opacity">
                {/* <button 
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    prevImage()
                  }}
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button 
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    nextImage()
                  }}
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button> */}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
