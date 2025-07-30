"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bed, Bath, Maximize, Heart, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
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
}

export default function PropertyCard({ property }: { property: Property }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section - Fixed Height */}
      <div className="relative h-64">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
        </motion.div>

        {property.isNew && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white border-0">
            New Listing
          </Badge>
        )}



        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 dark:bg-slate-700/90 text-navy-800 dark:text-white">
            {property.type}
          </Badge>
          <button
            className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
              isFavorite ? "bg-red-500 text-white" : "bg-white/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600"
            }`}
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>

        {property.rating && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="h-3 w-3 text-gold-400 fill-current" />
            <span className="text-white text-xs">{property.rating}</span>
          </div>
        )}
      </div>

      {/* Content Section - Structured Layout */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title and Location - Fixed Height */}
        <div className="mb-4 min-h-[60px]">
          <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white line-clamp-2">{property.title}</h3>
          <p className="text-slate-600 dark:text-slate-300 flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-gold-600 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </p>
        </div>

        {/* Property Specifications - Fixed Height */}
        <div className="mb-4 min-h-[24px]">
          <div className="flex justify-between">
            {property.beds && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-1" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{property.beds} BHK</span>
              </div>
            )}
            {property.baths && (
              <div className="flex items-center">
                <Bath className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-1" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{property.baths}</span>
              </div>
            )}
            <div className="flex items-center">
              <Maximize className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-1" />
              <span className="text-sm text-slate-600 dark:text-slate-300">{property.sqft} sqft</span>
            </div>
          </div>
        </div>

        {/* Amenities Section - Fixed Height */}
        <div className="mb-6 min-h-[60px]">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-navy-900 dark:text-white">Key Amenities</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {property.amenities?.slice(0, 2).map((amenity: string, i: number) => (
              <Badge key={i} variant="secondary" className="bg-navy-50 dark:bg-navy-900 text-navy-700 dark:text-navy-200 text-xs">
                {amenity}
              </Badge>
            ))}
            {property.amenities && property.amenities.length > 2 && (
              <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs">
                +{property.amenities.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        {/* Button Section - Always at Bottom */}
        <div className="mt-auto">
          <Link href={`/properties/${property.id}`}>
            <Button variant="navy" className="w-full">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
