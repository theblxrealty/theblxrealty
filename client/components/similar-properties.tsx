"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/property-card"

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

interface SimilarPropertiesProps {
  currentPropertyId: string
  currentPropertyType?: string
  currentPropertyLocation?: string
}

export default function SimilarProperties({ 
  currentPropertyId, 
  currentPropertyType, 
  currentPropertyLocation 
}: SimilarPropertiesProps) {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [visibleProperties, setVisibleProperties] = useState<Property[]>([])
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Fetch similar properties from the database
  useEffect(() => {
    const fetchSimilarProperties = async () => {
      setLoading(true)
      try {
        // Build query parameters to find similar properties
        const params = new URLSearchParams()
        if (currentPropertyType && currentPropertyType !== 'any') {
          params.append('type', currentPropertyType)
        }
        if (currentPropertyLocation) {
          params.append('search', currentPropertyLocation.split(',')[0]) // Get city/area name
        }
        params.append('limit', '12') // Get more properties to choose from
        params.append('exclude', currentPropertyId) // Exclude current property

        const response = await fetch(`/api/properties?${params.toString()}`)
        const data = await response.json()

        console.log('Similar properties API response:', data)
        console.log('Query params:', params.toString())

        if (data.properties && Array.isArray(data.properties)) {
          // Transform the properties to match our interface
          const transformedProperties = data.properties
            .filter((p: any) => p.id && p.id !== currentPropertyId) // Double-check exclusion and ensure id exists
            .map((property: any) => ({
              id: property.id,
              title: property.title || "Property",
              location: property.location || "Location not specified",
              image: property.images?.[0] || "/placeholder.svg?height=600&width=800",
              beds: property.bedrooms || 0,
              baths: property.bathrooms || 0,
              sqft: property.area || 0,
              amenities: ["Security", "Parking", "Power Backup"], // Default amenities
              isNew: true,
              featured: true,
              type: property.propertyType || "residential",
              rating: 4.8,
              price: property.price ? `₹${(property.price / 10000000).toFixed(1)} Cr` : "Price on Application",
              development: true
            }))
            .slice(0, 9) // Limit to 9 properties max

          setProperties(transformedProperties)
        }
      } catch (error) {
        console.error('Error fetching similar properties:', error)
        // Fallback to empty array
        setProperties([])
      } finally {
        setLoading(false)
      }
    }

    if (currentPropertyId) {
      fetchSimilarProperties()
    }
  }, [currentPropertyId, currentPropertyType, currentPropertyLocation])

  useEffect(() => {
    // Update visible count based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    // Update visible properties when startIndex or visibleCount changes
    setVisibleProperties(properties.slice(startIndex, startIndex + visibleCount))
  }, [startIndex, visibleCount, properties])

  const nextProperties = () => {
    const newStartIndex = (startIndex + visibleCount) % properties.length
    setStartIndex(newStartIndex)
  }

  const prevProperties = () => {
    const newStartIndex = (startIndex - visibleCount + properties.length) % properties.length
    setStartIndex(newStartIndex)
  }

  // Don't show navigation if we have 3 or fewer properties
  const showNavigation = properties.length > visibleCount

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
            <div className="space-y-2">
              <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No similar properties found at the moment.</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {showNavigation && (
        <div className="flex justify-between items-center mb-6">
          <div></div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProperties}
              className="h-9 w-9"
              aria-label="Previous properties"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProperties}
              className="h-9 w-9"
              aria-label="Next properties"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
