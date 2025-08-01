"use client"

import { useState, useEffect, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PropertyFilters from "@/components/property-filters"
import PropertyCard from "@/components/property-card"
import PropertyTypesSection from "@/components/property-types-section"

// Sample property data for Bangalore - diverse property types
const properties = [
  // Luxury Villas
  {
    id: 1,
    title: "Cold Norton Farm, Ockham Lane, Cobham, KT11",
    location: "Cobham, Surrey",
    image: "/placeholder.svg?height=600&width=800",
    beds: 4,
    baths: 2,
    sqft: 2800,
    amenities: ["Swimming Pool", "Garden", "Security", "Parking"],
    isNew: true,
    featured: true,
    type: "luxury-villas",
    rating: 4.9,
    development: true,
    priceRange: "Price Range Of £750,000 - £1,395,000"
  },
  {
    id: 2,
    title: "Beverley Waterside, Priests Bridge, London, SW14",
    location: "London, SW14",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 2,
    sqft: 1850,
    amenities: ["IT Ready", "Parking", "Power Backup", "Lift"],
    isNew: false,
    featured: true,
    type: "luxury-villas",
    rating: 4.8,
    development: true,
    priceRange: "Prices from £500,000"
  },
  {
    id: 3,
    title: "Headley Chase, Headley, Surrey, KT18",
    location: "Surrey, KT18",
    image: "/placeholder.svg?height=600&width=800",
    beds: 5,
    baths: 3,
    sqft: 4500,
    amenities: ["BMRDA Approved", "Corner Plot", "Clear Title", "Gated Layout"],
    isNew: true,
    featured: true,
    type: "luxury-villas",
    rating: 4.7,
    development: true,
    price: "Price on Application"
  },
  {
    id: 4,
    title: "Lot 2, 3 and 4, Lower Seagry, Chippenham, Wiltshire, SN15",
    location: "Chippenham, Wiltshire",
    image: "/placeholder.svg?height=600&width=800",
    beds: 2,
    baths: 1,
    sqft: 1200,
    amenities: ["High Footfall", "Prime Location", "Parking", "Security"],
    isNew: false,
    featured: false,
    type: "commercial",
    rating: 4.6,
    development: true,
    price: "Price on Application"
  },
  {
    id: 5,
    title: "Lot 1, Lower Seagry, Chippenham, Wiltshire, SN15",
    location: "Chippenham, Wiltshire",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 2,
    sqft: 1850,
    amenities: ["Club House", "Gym", "Swimming Pool", "Children's Play Area"],
    isNew: false,
    featured: false,
    type: "residential",
    rating: 4.8,
    development: true,
    price: "Price on Application"
  },
  {
    id: 6,
    title: "Brimfield, Ludlow, Herefordshire, SY8",
    location: "Ludlow, Herefordshire",
    image: "/placeholder.svg?height=600&width=800",
    beds: 4,
    baths: 3,
    sqft: 3200,
    amenities: ["Loading Dock", "High Ceiling", "Power Supply", "Security"],
    isNew: true,
    featured: true,
    type: "farm-house",
    rating: 4.5,
    development: true,
    price: "Price on Application"
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

function PropertiesContent() {
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
            src="/prop-banner.jpg?height=1080&width=1920"
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
              <div className="text-white animate-fade-in">
                {/* Main Heading */}
                <h1 
                  className="font-bold mb-6 font-serif animate-slide-up" 
                  style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '50px', fontWeight: '400' }}
                >
                  {pageTitle}
                </h1>

                {/* Description */}
                <p 
                  className="text-lg text-white mb-8 font-['Suisse_Intl',sans-serif] animate-slide-up-delay-1"
                >
                  {pageDescription}
                </p>

                {selectedType && (
                  <div className="mt-4 animate-slide-up-delay-2">
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

      {/* Main Content - Properties Grid and Map */}
      <section className="flex-1 bg-gray-50">
        <div className="flex h-full">
          {/* Left Section - Properties Grid */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
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

          {/* Right Section - Map */}
          <div className="w-1/3 bg-white border-l border-gray-200">
            <div className="h-full relative">
              {/* Map Placeholder */}
              <div className="h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
                  <p className="text-sm text-gray-500 mb-4">Property locations will be displayed here</p>
                  <div className="text-xs text-gray-400">
                    <p>Zoom controls and property markers</p>
                    <p>will be integrated with backend</p>
                  </div>
                </div>
              </div>
              
              {/* Map Controls Placeholder */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  +
                </button>
                <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  -
                </button>
              </div>
              
              {/* Map Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs text-gray-600">
                <p>Some properties cannot be displayed because we have no exact location information.</p>
              </div>
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

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen pt-16">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
        </div>
      </div>
    }>
      <PropertiesContent />
    </Suspense>
  )
}
