import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import PropertyDetailPageClient from "./property-detail-client"

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  console.log('Fetching property with ID:', id)
  
  try {
    console.log('Executing Prisma query for ID:', id)
    
    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        admin: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    }) as any

    console.log('Property found:', property ? 'Yes' : 'No')
    if (property) {
      console.log('Property title:', property.title)
      console.log('Property banner1:', property.propertyBanner1 ? 'Yes' : 'No')
      console.log('Property banner2:', property.propertyBanner2 ? 'Yes' : 'No')
      console.log('Property additional images count:', property.additionalImages?.length || 0)
    }
    
    if (!property) {
      console.log('Property not found, calling notFound()')
      notFound()
    }

    console.log('Starting property transformation...')
    
    // Transform the database property to match the expected format
    const transformedProperty = {
      id: property.id,
      title: property.title,
      description: property.description || "",
      longDescription: (property as any).longDescription || property.description || "",
      location: property.location || "Location not specified",
      price: property.price ? `INR ${(property.price / 10000000).toFixed(1)} Cr` : "Price on Application",
      development: true,
      propertyRef: property.id.slice(-8).toUpperCase(),
      coordinates: property.latitude && property.longitude 
        ? { lat: property.latitude, lng: property.longitude }
        : { lat: 12.9716, lng: 77.5946 },
      
      // Combine all images: banner1, banner2, and additional images
      images: (() => {
        const allImages: string[] = []
        
        // Add banner images first (these are the main showcase images)
        if ((property as any).propertyBanner1) {
          allImages.push((property as any).propertyBanner1)
        }
        if ((property as any).propertyBanner2) {
          allImages.push((property as any).propertyBanner2)
        }
        
        // Add additional images
        if ((property as any).additionalImages && (property as any).additionalImages.length > 0) {
          allImages.push(...(property as any).additionalImages)
        }
        
        // If no images at all, use placeholder
        if (allImages.length === 0) {
          allImages.push("/placeholder.svg?height=600&width=800")
        }
        
        console.log('Combined images for property:', allImages.length, 'images')
        return allImages
      })(),
      
      beds: property.bedrooms || undefined,
      baths: property.bathrooms || undefined,
      sqft: property.area || null,
      yearBuilt: property.yearBuilt || new Date().getFullYear(),
      lotSize: property.lotSize || "Not specified",
      ecoFeatures: property.ecoFeatures || [],
      amenities: property.amenities || [],
      type: property.propertyType || "residential",
      propertyCategory: property.propertyCategory || "flats",
      isNew: property.yearBuilt ? (new Date().getFullYear() - property.yearBuilt) <= 2 : false,
      featured: true,
      agent: {
        name: property.agentName || "The BLX Realty Agent",
        phone: property.agentPhone || "+91 9743264328",
        email: property.agentEmail || "Discoverblr@theblxrealty.com",
        image: property.agentImage || "/placeholder-user.jpg",
      },
      nearbyAmenities: property.nearbyAmenities || null,
      transportation: property.transportation || null
    }

    console.log('Property transformation completed, returning component')
    console.log('Property type being passed:', transformedProperty.type)
    console.log('Property location being passed:', transformedProperty.location)
    
    return (
      <PropertyDetailPageClient property={transformedProperty} />
    )
  } catch (error) {
    console.error('Error fetching property:', error)
    notFound()
  }
}
