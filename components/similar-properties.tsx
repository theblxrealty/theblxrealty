"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/property-card"

// Sample property data
const properties = [
  {
    id: 2,
    title: "Verdant Villa",
    location: "Green Valley, GV",

    image: "/placeholder.svg?height=600&width=800",
    beds: 5,
    baths: 4,
    sqft: 3500,
    ecoFeatures: ["Geothermal Heating", "Smart Home System", "Living Wall"],
    isNew: false,
    featured: true,
  },
  {
    id: 3,
    title: "Oasis Apartments",
    location: "Sustainable Heights, SH",

    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 2,
    sqft: 1800,
    ecoFeatures: ["Energy-Efficient Appliances", "Sustainable Materials", "Community Garden"],
    isNew: true,
    featured: false,
  },
  {
    id: 4,
    title: "Harmony House",
    location: "Eco City, EC",

    image: "/placeholder.svg?height=600&width=800",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    ecoFeatures: ["Solar Panels", "Greywater System", "Passive Design"],
    isNew: false,
    featured: true,
  },
  {
    id: 5,
    title: "Serenity Lofts",
    location: "Urban Eco District, UED",

    image: "/placeholder.svg?height=600&width=800",
    beds: 2,
    baths: 2,
    sqft: 1600,
    ecoFeatures: ["Green Roof", "Energy-Efficient Windows", "Recycled Materials"],
    isNew: true,
    featured: false,
  },
]

export default function SimilarProperties({ currentPropertyId }) {
  const [visibleProperties, setVisibleProperties] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Filter out the current property and get similar ones
  const similarProperties = properties.filter((p) => p.id !== currentPropertyId)

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
    setVisibleProperties(similarProperties.slice(startIndex, startIndex + visibleCount))
  }, [startIndex, visibleCount, similarProperties])

  const nextProperties = () => {
    const newStartIndex = (startIndex + visibleCount) % similarProperties.length
    setStartIndex(newStartIndex)
  }

  const prevProperties = () => {
    const newStartIndex = (startIndex - visibleCount + similarProperties.length) % similarProperties.length
    setStartIndex(newStartIndex)
  }

  return (
    <div className="relative">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
