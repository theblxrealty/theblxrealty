"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, MapPin, Phone, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react"
import PropertyContactForm from "@/components/property-contact-form"
import PropertyMap from "@/components/property-map"
import SimilarProperties from "@/components/similar-properties"

// Property type definition
interface Property {
  id: string
  title: string
  description: string
  longDescription: string
  location: string
  price: string
  development: boolean
  propertyRef: string
  coordinates?: { lat: number; lng: number }
  images: string[]
  beds?: number
  baths?: number
  sqft: number
  yearBuilt: number
  lotSize: string
  ecoFeatures: string[]
  amenities: string[]
  type: string
  propertyCategory: string
  isNew: boolean
  featured: boolean
  agent: {
    name: string
    phone: string
    email: string
    image: string
  }
}

interface PropertyDetailPageClientProps {
  property: Property
}

export default function PropertyDetailPageClient({ property }: PropertyDetailPageClientProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const handleOpenForm = () => {
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  const openPhotoModal = () => {
    setIsPhotoModalOpen(true)
    setCurrentPhotoIndex(0)
  }

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false)
  }

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index)
  }

  // Keyboard navigation for photo modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isPhotoModalOpen) return
      
      switch (event.key) {
        case 'Escape':
          closePhotoModal()
          break
        case 'ArrowLeft':
          goToPreviousPhoto()
          break
        case 'ArrowRight':
          goToNextPhoto()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isPhotoModalOpen])

  // Get available images (filter out empty strings and ensure we have at least placeholder)
  const availableImages = property.images.filter(img => img && img.trim() !== "")
  const displayImages = availableImages.length > 0 ? availableImages : ["/placeholder.svg"]

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-white">
      {/* Back to results */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link href="/properties" className="text-red-500 hover:text-red-600 flex items-center mb-6 font-['Suisse_Intl',sans-serif]">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to results
        </Link>
      </div>

      {/* Main Property Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Images */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative h-[500px] mb-4 rounded-lg overflow-hidden group shadow-lg">
              <Image
                src={displayImages[0]}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
            
            {/* Thumbnail Images Row */}
            {displayImages.length > 1 && (
              <div className="grid grid-cols-2 gap-4 mb-4">
                {displayImages.slice(1, 3).map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden group shadow-md">
                    <Image
                      src={image}
                      alt={`${property.title} - Image ${index + 2}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                ))}
              </div>
            )}

            {/* Show More Photos Button */}
            {displayImages.length > 3 && (
              <button
                onClick={openPhotoModal}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-['Suisse_Intl',sans-serif] font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:bg-gray-300 hover:shadow-md active:scale-95"
              >
                <span>Show all {displayImages.length} photos</span>
                <span className="text-sm text-gray-500">({displayImages.length - 3} more)</span>
              </button>
            )}
          </div>

          {/* Right side - Property Details */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Property Title */}
              <h1 className="text-2xl lg:text-3xl font-bold text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
                {property.title}
              </h1>

              {/* Price */}
              <div className="text-3xl font-bold text-black font-['Suisse_Intl',sans-serif]">
                {property.price}
              </div>

              {/* Property Type */}
              <div>
                <h3 className="text-lg font-semibold mb-2 font-['Suisse_Intl',sans-serif]">
                  {property.propertyCategory === 'luxury villas' ? 'Luxury Villa' : 
                   property.propertyCategory === 'flats' ? 'Apartment' : 
                   property.propertyCategory === 'new buildings' ? 'New Building' : 
                   property.propertyCategory === 'farm house' ? 'Farm House' : 
                   property.propertyCategory === 'sites' ? 'Development Plot' : 
                   property.propertyCategory === 'commercial' ? 'Commercial Property' : 
                   property.propertyCategory === 'investment' ? 'Investment Property' : 
                   property.development ? "Development Plot" : "Property"} for sale in {property.location}
                </h3>
                <p className="text-gray-600 font-['Suisse_Intl',sans-serif] flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </p>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 font-['Suisse_Intl',sans-serif] leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Save and Share buttons */}
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors font-['Suisse_Intl',sans-serif]">
                  <Heart className="h-5 w-5" />
                  Save
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors font-['Suisse_Intl',sans-serif]">
                  <Share2 className="h-5 w-5" />
                  Share
                </button>
              </div>

              {/* Property Reference */}
              {/* <div className="text-sm text-gray-500 font-['Suisse_Intl',sans-serif]">
                Property Ref: {property.propertyRef}
              </div> */}

              {/* Guide Price Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 font-['Suisse_Intl',sans-serif]">Guide price</h3>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-black font-['Suisse_Intl',sans-serif]">
                    {property.price}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 font-['Suisse_Intl',sans-serif]">
                    ₹
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Agent Section */}
              <div className="border-t pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-['Suisse_Intl',sans-serif]">{property.agent.name}</h3>
                    <p className="text-red-500 font-['Suisse_Intl',sans-serif]">Contact agent</p>
                  </div>
                </div>

                {/* Request Viewing Button */}
                <button
                  onClick={handleOpenForm}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded font-['Suisse_Intl',sans-serif] font-medium transition-colors text-lg"
                >
                  Request viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A little more about the property */}
      <section className="py-12 bg-gray-100 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
              A little more about the property
            </h2>
            
            <div>
              <p className="text-gray-500 font-['Suisse_Intl',sans-serif] leading-relaxed mb-4">
                {property.description || `This ${property.propertyCategory === 'farm house' ? 'farm house' : 
                  property.propertyCategory === 'commercial' ? 'commercial property' : 
                  property.propertyCategory === 'luxury villas' ? 'luxury villa' : 
                  property.propertyCategory === 'flats' ? 'apartment' : 
                  property.propertyCategory === 'new buildings' ? 'new building' : 
                  property.propertyCategory === 'sites' ? 'development plot' : 
                  property.propertyCategory === 'investment' ? 'investment property' : 'property'} is located in ${property.location}, 
                  offering an excellent opportunity for ${property.propertyCategory === 'farm house' ? 'agricultural development' : 
                  property.propertyCategory === 'commercial' ? 'business expansion' : 
                  property.propertyCategory === 'sites' ? 'development and construction' : 'residential living'}. 
                  The location provides easy access to major amenities and transportation networks.`}
              </p>
              
              {!showFullDescription && (
                <p className="text-gray-500 font-['Suisse_Intl',sans-serif] leading-relaxed mb-6">
                  ...
                </p>
              )}
              
              {showFullDescription && (
                <div className="text-gray-500 font-['Suisse_Intl',sans-serif] leading-relaxed mb-6 space-y-4">
                  <p>
                    {property.longDescription || `This ${property.propertyCategory === 'farm house' ? 'farm house' : 
                      property.propertyCategory === 'commercial' ? 'commercial property' : 
                      property.propertyCategory === 'luxury villas' ? 'luxury villa' : 
                      property.propertyCategory === 'flats' ? 'apartment' : 
                      property.propertyCategory === 'new buildings' ? 'new building' : 
                      property.propertyCategory === 'sites' ? 'development plot' : 
                      property.propertyCategory === 'investment' ? 'investment property' : 'property'} offers excellent potential for development and investment. 
                      The location in ${property.location} provides strategic advantages for ${property.propertyCategory === 'farm house' ? 'agricultural and residential development' : 
                      property.propertyCategory === 'commercial' ? 'business operations and expansion' : 
                      property.propertyCategory === 'sites' ? 'construction and development' : 
                      property.propertyCategory === 'investment' ? 'investment returns and appreciation' : 'comfortable family living and lifestyle enhancement'}.`}
                  </p>
                  
                  <p>
                    {property.location} is a thriving area with excellent amenities including schools, shopping centers, 
                    restaurants, and recreational facilities. The location provides easy access to major transportation 
                    networks, making it convenient for daily commutes and business operations.
                  </p>
                  
                  <p>
                    This represents a unique opportunity to acquire a ${property.propertyCategory === 'sites' ? 'development plot' : 
                      property.propertyCategory === 'commercial' ? 'commercial space' : 
                      property.propertyCategory === 'investment' ? 'investment property' : 'residential property'} in one of ${property.location.split(',')[1]?.trim() || 'the area'}'s most 
                      sought-after locations, with excellent potential for ${property.propertyCategory === 'farm house' ? 'agricultural and residential development' : 
                      property.propertyCategory === 'commercial' ? 'business expansion' : 
                      property.propertyCategory === 'sites' ? 'construction and development' : 
                      property.propertyCategory === 'investment' ? 'investment returns and appreciation' : 'family living and investment'}.
                  </p>
                </div>
              )}
              
              <button 
                onClick={toggleDescription}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 font-['Suisse_Intl',sans-serif] font-medium transition-colors"
              >
                <span className="w-6 h-6 border border-red-500 rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-sm">{showFullDescription ? '−' : '+'}</span>
                </span>
                {showFullDescription ? 'See less' : 'See more'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Location Map */}
      <section className="py-12 bg-white mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Property Location</h2>
            <p className="text-gray-600 mb-6 font-['Suisse_Intl',sans-serif]">
              Located at {property.location}. Explore the neighborhood and nearby amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
                          <div className="h-[650px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <PropertyMap 
                properties={[{
                  id: property.id.toString(),
                  title: property.title,
                  address: property.location,
                  price: property.price,
                  type: property.propertyCategory === 'farm house' ? 'Farm House' : 
                        property.propertyCategory === 'commercial' ? 'Commercial' : 
                        property.propertyCategory === 'luxury villas' ? 'Luxury Villa' : 
                        property.propertyCategory === 'flats' ? 'Apartment' : 
                        property.propertyCategory === 'new buildings' ? 'New Building' : 
                        property.propertyCategory === 'sites' ? 'Development Plot' : 
                        property.propertyCategory === 'investment' ? 'Investment Property' : 'Residential',
                  coordinates: property.coordinates || { lat: 12.9716, lng: 77.5946 }
                }]}
                center={property.coordinates || { lat: 12.9716, lng: 77.5946 }}
                zoom={15}
                height="100%"
              />
            </div>
            </div>
            
            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center font-['Suisse_Intl',sans-serif]">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  Address
                </h3>
                <p className="text-gray-700 font-['Suisse_Intl',sans-serif]">{property.location}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 font-['Suisse_Intl',sans-serif]">Nearby Amenities</h3>
                <div className="space-y-3 font-['Suisse_Intl',sans-serif]">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Shopping Centers</span>
                    <span className="font-semibold">0.8 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Schools</span>
                    <span className="font-semibold">1.3 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Public Transport</span>
                    <span className="font-semibold">0.5 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Parks</span>
                    <span className="font-semibold">0.3 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Hospitals</span>
                    <span className="font-semibold">2.0 km</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 font-['Suisse_Intl',sans-serif]">Transportation</h3>
                <div className="space-y-3 font-['Suisse_Intl',sans-serif]">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Bus Stop</span>
                    <span className="font-semibold">5 min walk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Metro Station</span>
                    <span className="font-semibold">15 min walk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Airport</span>
                    <span className="font-semibold">45 min drive</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Highway Access</span>
                    <span className="font-semibold">15 min drive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Similar Properties</h2>
          <SimilarProperties 
            currentPropertyId={property.id} 
            currentPropertyType={property.type}
            currentPropertyLocation={property.location}
          />
        </div>
      </section>

      {/* Slide-in Form */}
      <PropertyContactForm 
        propertyTitle={property.id.toString()}
        isOpen={isFormOpen}
        onClose={handleCloseForm}
      />

      {/* Photo Modal */}
      {isPhotoModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={closePhotoModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-modal-title"
        >
          <div 
            className="relative w-full max-w-6xl max-h-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="absolute top-4 left-4 z-10 text-white">
              <div id="photo-modal-title" className="sr-only">
                {property.title} - Photo Gallery
              </div>
              <div className="text-sm font-medium font-['Suisse_Intl',sans-serif]">
                {currentPhotoIndex + 1} of {displayImages.length}
              </div>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={closePhotoModal} 
              className="absolute top-4 right-4 text-white z-10 hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
              aria-label="Close photo gallery"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation Buttons */}
            <button 
              onClick={goToPreviousPhoto} 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button 
              onClick={goToNextPhoto} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            {/* Main Image */}
            <div className="relative w-full h-[60vh] sm:h-[80vh] bg-black">
              <Image
                src={displayImages[currentPhotoIndex]}
                alt={`${property.title} - Photo ${currentPhotoIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>
            
            {/* Thumbnail Strip */}
            <div className="bg-gray-100 p-2 sm:p-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {displayImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToPhoto(index)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      index === currentPhotoIndex 
                        ? 'border-red-500' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${property.title} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 