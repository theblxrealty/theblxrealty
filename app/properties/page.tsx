"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PropertyFilters from "@/components/property-filters"
import PropertyCard from "@/components/property-card"
import PropertyTypesSection from "@/components/property-types-section"

// Sample property data for Bangalore
const properties = [
  // Luxury Villas
  {
    id: 1,
    title: "Ultra Luxury Villa in Koramangala",
    location: "Koramangala 5th Block, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 5,
    baths: 4,
    sqft: 4500,
    amenities: ["Private Pool", "Home Theater", "Wine Cellar", "Garden"],
    isNew: true,
    featured: true,
    type: "luxury-villas",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Prestige Villa in Whitefield",
    location: "Whitefield, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 4,
    baths: 3,
    sqft: 3800,
    amenities: ["Swimming Pool", "Gym", "Security", "Parking"],
    isNew: false,
    featured: true,
    type: "luxury-villas",
    rating: 4.8,
  },
  
  // Flats
  {
    id: 3,
    title: "Premium Flat in Indiranagar",
    location: "Indiranagar 100 Feet Road, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 2,
    sqft: 1850,
    amenities: ["Club House", "Garden", "Power Backup", "Lift"],
    isNew: false,
    featured: true,
    type: "flats",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Modern Flat in Electronic City",
    location: "Electronic City Phase 1, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 2,
    baths: 2,
    sqft: 1200,
    amenities: ["IT Park Nearby", "Metro Access", "Shopping Mall", "Hospital"],
    isNew: true,
    featured: false,
    type: "flats",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Luxury Flat in UB City",
    location: "UB City Mall, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 3,
    sqft: 2100,
    amenities: ["City View", "Premium Location", "Concierge", "Valet Parking"],
    isNew: true,
    featured: true,
    type: "flats",
    rating: 4.8,
  },

  // New Building
  {
    id: 6,
    title: "Brand New Apartment Complex",
    location: "HSR Layout, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 3,
    sqft: 2200,
    amenities: ["Brand New", "Smart Home", "Gated Community", "Park View"],
    isNew: true,
    featured: true,
    type: "new-building",
    rating: 4.9,
  },
  {
    id: 7,
    title: "New Construction in Marathahalli",
    location: "Marathahalli, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 2,
    baths: 2,
    sqft: 1400,
    amenities: ["Under Construction", "Modern Design", "Green Building", "Tech Park"],
    isNew: true,
    featured: false,
    type: "new-building",
    rating: 4.5,
  },

  // Farm House
  {
    id: 8,
    title: "Serene Farm House in Devanahalli",
    location: "Devanahalli, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 4,
    baths: 3,
    sqft: 5000,
    amenities: ["Large Garden", "Organic Farm", "Guest House", "Privacy"],
    isNew: false,
    featured: true,
    type: "farm-house",
    rating: 4.7,
  },
  {
    id: 9,
    title: "Luxury Farm House in Kanakapura",
    location: "Kanakapura Road, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 6,
    baths: 5,
    sqft: 6500,
    amenities: ["Resort Style", "Private Lake", "Horse Riding", "Event Space"],
    isNew: false,
    featured: true,
    type: "farm-house",
    rating: 4.8,
  },

  // Sites
  {
    id: 10,
    title: "Premium Plot in Sarjapur",
    location: "Sarjapur Road, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    sqft: 2400,
    amenities: ["RERA Approved", "Clear Title", "Gated Layout", "Near IT Hub"],
    isNew: true,
    featured: false,
    type: "sites",
    rating: 4.6,
  },
  {
    id: 11,
    title: "Investment Plot in Hennur",
    location: "Hennur Main Road, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    sqft: 1800,
    amenities: ["Future Metro", "Developing Area", "Investment Potential", "Good Connectivity"],
    isNew: false,
    featured: false,
    type: "sites",
    rating: 4.4,
  },

  // Commercial
  {
    id: 12,
    title: "Premium Office Space in Koramangala",
    location: "Koramangala 80 Feet Road, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    sqft: 3000,
    amenities: ["IT Ready", "Parking", "Cafeteria", "Conference Rooms"],
    isNew: false,
    featured: true,
    type: "commercial",
    rating: 4.7,
  },
  {
    id: 13,
    title: "Retail Space in Brigade Road",
    location: "Brigade Road, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    sqft: 1500,
    amenities: ["High Footfall", "Shopping District", "Parking", "Prime Location"],
    isNew: true,
    featured: true,
    type: "commercial",
    rating: 4.8,
  },

  // Investment
  {
    id: 14,
    title: "High ROI Apartment in Bommanahalli",
    location: "Bommanahalli, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 2,
    baths: 2,
    sqft: 1100,
    amenities: ["Rental Guarantee", "High ROI", "IT Corridor", "Metro Nearby"],
    isNew: false,
    featured: true,
    type: "investment",
    rating: 4.6,
  },
  {
    id: 15,
    title: "Investment Villa in Yelahanka",
    location: "Yelahanka New Town, Bangalore",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 3,
    sqft: 2500,
    amenities: ["Capital Appreciation", "Rental Income", "Gated Community", "Airport Proximity"],
    isNew: true,
    featured: false,
    type: "investment",
    rating: 4.5,
  },
]

// Property type display names mapping
const typeDisplayNames: { [key: string]: string } = {
  "luxury-villas": "Luxury Villas",
  "flats": "Flats",
  "new-building": "New Buildings",
  "farm-house": "Farm Houses",
  "sites": "Sites",
  "commercial": "Commercial Properties",
  "investment": "Investment Properties",
}

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const selectedType = searchParams.get('type')
  
  // Filter properties based on selected type
  const filteredProperties = useMemo(() => {
    if (!selectedType) {
      return properties
    }
    return properties.filter(property => property.type === selectedType)
  }, [selectedType])

  // Get page title based on selected type
  const pageTitle = selectedType 
    ? `${typeDisplayNames[selectedType]} in Bangalore`
    : "Premium Properties in Bangalore"

  const pageDescription = selectedType
    ? `Discover premium ${typeDisplayNames[selectedType].toLowerCase()} for sale across Bangalore's most prestigious locations`
    : "Discover your perfect luxury home from our exclusive collection of premium properties across Bangalore's most prestigious locations"

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <Image
            src="/properties-banner.jpeg?height=1080&width=1920"
            alt="Luxury properties in Bangalore"
            fill
            className="object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-white">
                {/* Main Heading */}
                <h1 className="font-bold mb-6 font-serif" style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '50px', fontWeight: '400' }}>
                  {pageTitle}
                </h1>

                {/* Description */}
                <p className="text-lg text-white mb-8 font-['Suisse_Intl',sans-serif]">
                  {pageDescription}
                </p>

                {selectedType && (
                  <div className="mt-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 font-['Suisse_Intl',sans-serif]">
                      Showing {filteredProperties.length} {typeDisplayNames[selectedType].toLowerCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyFilters />
        </div>
      </section>

      {/* Property Types Section */}
      <PropertyTypesSection />

      {/* Properties Grid */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
                {selectedType ? typeDisplayNames[selectedType] : "Available Properties"}
              </h2>
              <p className="text-gray-500 mt-2 font-['Suisse_Intl',sans-serif]">
                {filteredProperties.length} properties found{selectedType ? ` in ${typeDisplayNames[selectedType].toLowerCase()}` : ""}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-['Suisse_Intl',sans-serif]">Sort by:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px] border-gray-300 focus:border-red-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="size">Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No properties found</h3>
              <p className="text-slate-500 mb-4">
                {selectedType 
                  ? `No ${typeDisplayNames[selectedType].toLowerCase()} are currently available.`
                  : "No properties match your current filters."
                }
              </p>
              <Button variant="outline" onClick={() => window.location.href = '/properties'}>
                View All Properties
              </Button>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                3
              </Button>
              <span className="mx-2 text-slate-600">...</span>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                8
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Can't find what you're looking for?</h2>
            <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
              Let our luxury property experts help you find the perfect property that matches your requirements and
              investment goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium"
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
