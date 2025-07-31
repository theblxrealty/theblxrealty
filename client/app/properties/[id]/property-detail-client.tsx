"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, MapPin, Phone, ChevronDown } from "lucide-react"
import PropertyContactForm from "@/components/property-contact-form"
import PropertyMap from "@/components/property-map"
import SimilarProperties from "@/components/similar-properties"

// Property type definition
interface Property {
  id: number
  title: string
  description: string
  longDescription: string
  location: string
  price: string
  development: boolean
  propertyRef: string
  images: string[]
  beds: number
  baths: number
  sqft: number
  yearBuilt: number
  lotSize: string
  ecoFeatures: string[]
  amenities: string[]
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

  const handleOpenForm = () => {
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-white">
      {/* Back to results */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
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
            <div className="relative h-[500px] mb-4 rounded-lg overflow-hidden">
              <Image
                src={property.images[0] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative h-36 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover hover:opacity-80 cursor-pointer transition-opacity"
                  />
                </div>
              ))}
            </div>
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
                  {property.development ? "Development Plot" : "Property"} for sale in {property.location}
                </h3>
                <p className="text-gray-600 font-['Suisse_Intl',sans-serif] flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  United Kingdom
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
              <div className="text-sm text-gray-500 font-['Suisse_Intl',sans-serif]">
                Property Ref: {property.propertyRef}
              </div>

              {/* Guide Price Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 font-['Suisse_Intl',sans-serif]">Guide price</h3>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-black font-['Suisse_Intl',sans-serif]">
                    {property.price}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 font-['Suisse_Intl',sans-serif]">
                    GBP
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
                Positioned at the end of Forton Road, yet just over 1 mile from the town centre, the plot adj. to 115 
                Forton Road represents an extremely rare opportunity to acquire a building plot within the very 
                popular town of Newport. The plot is located at the end of Forton Road, with just one adjacent 
                neighbour and open playing fields to two sides. There are outstanding westerly views.
              </p>
              
              {!showFullDescription && (
                <p className="text-gray-500 font-['Suisse_Intl',sans-serif] leading-relaxed mb-6">
                  ...
                </p>
              )}
              
              {showFullDescription && (
                <div className="text-gray-500 font-['Suisse_Intl',sans-serif] leading-relaxed mb-6 space-y-4">
                  <p>
                    The plot benefits from planning permission for a substantial detached family home, granted under 
                    application TWC/2019/0123. The approved plans show a 4-bedroom property with double garage and 
                    landscaped gardens, maximizing the stunning views across the countryside.
                  </p>
                  
                  <p>
                    Newport is a thriving market town in East Shropshire, offering excellent amenities including 
                    schools, shops, restaurants, and recreational facilities. The town provides easy access to the 
                    M54 motorway, making it an ideal location for commuters to Birmingham, Wolverhampton, and 
                    Telford.
                  </p>
                  
                  <p>
                    This represents a unique opportunity to create a bespoke family home in one of Newport's most 
                    sought-after locations, with the added benefit of existing planning permission to expedite the 
                    development process.
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
                <PropertyMap location={property.location} />
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
                    <span className="font-semibold">0.5 mi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Schools</span>
                    <span className="font-semibold">0.8 mi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Public Transport</span>
                    <span className="font-semibold">0.3 mi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Parks</span>
                    <span className="font-semibold">0.2 mi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Hospitals</span>
                    <span className="font-semibold">1.2 mi</span>
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
                    <span className="font-semibold">30 min drive</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Highway Access</span>
                    <span className="font-semibold">10 min drive</span>
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
          <SimilarProperties currentPropertyId={property.id} />
        </div>
      </section>

      {/* Slide-in Form */}
      <PropertyContactForm 
        propertyTitle={property.title}
        isOpen={isFormOpen}
        onClose={handleCloseForm}
      />
    </div>
  )
} 