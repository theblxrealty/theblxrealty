"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bed, Bath, Maximize, Heart, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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

        <div className="absolute bottom-4 left-4">
          <Badge variant="outline" className="bg-black/50 text-white border-0 backdrop-blur-sm">
            {property.price}
          </Badge>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 text-navy-800">
            {property.type}
          </Badge>
          <button
            className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
              isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-slate-600 hover:bg-white"
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

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-navy-900">{property.title}</h3>
        <p className="text-slate-600 mb-4 flex items-center">
          <MapPin className="h-4 w-4 mr-1 text-gold-600" />
          {property.location}
        </p>

        <div className="flex justify-between mb-6">
          {property.beds && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 text-slate-500 mr-1" />
              <span className="text-sm text-slate-600">{property.beds} BHK</span>
            </div>
          )}
          {property.baths && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 text-slate-500 mr-1" />
              <span className="text-sm text-slate-600">{property.baths}</span>
            </div>
          )}
          <div className="flex items-center">
            <Maximize className="h-4 w-4 text-slate-500 mr-1" />
            <span className="text-sm text-slate-600">{property.sqft} sqft</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-navy-900">Key Amenities</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {property.amenities?.slice(0, 2).map((amenity, i) => (
              <Badge key={i} variant="secondary" className="bg-navy-50 text-navy-700 text-xs">
                {amenity}
              </Badge>
            ))}
            {property.amenities?.length > 2 && (
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                +{property.amenities.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        <Link href={`/properties/${property.id}`}>
          <Button className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
