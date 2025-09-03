import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user || !(session.user as any).id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Get saved properties for the user
    const savedProperties = await prisma.savedProperty.findMany({
      where: {
        userId: (session.user as any).id
      },
      include: {
        property: {
          select: {
            id: true,
            title: true,
            description: true,
            price: true,
            location: true,
            propertyType: true,
            propertyCategory: true,
            bedrooms: true,
            bathrooms: true,
            area: true,
            propertyBanner1: true,
            propertyBanner2: true,
            additionalImages: true,
            isActive: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform the data to match the expected format
    const transformedProperties = savedProperties.map(saved => ({
      id: saved.property.id,
      title: saved.property.title,
      description: saved.property.description || "",
      location: saved.property.location || "Location not specified",
      price: saved.property.price ? `INR ${(saved.property.price / 10000000).toFixed(1)} Cr` : "Price on Application",
      propertyRef: saved.property.id.slice(-8).toUpperCase(),
      coordinates: { lat: 12.9716, lng: 77.5946 }, // Default coordinates
      
      // Combine all images: banner1, banner2, and additional images
      images: (() => {
        const allImages: string[] = []
        
        // Add banner images first (these are the main showcase images)
        if (saved.property.propertyBanner1) {
          allImages.push(saved.property.propertyBanner1)
        }
        if (saved.property.propertyBanner2) {
          allImages.push(saved.property.propertyBanner2)
        }
        
        // Add additional images
        if (saved.property.additionalImages && saved.property.additionalImages.length > 0) {
          allImages.push(...saved.property.additionalImages)
        }
        
        // If no images at all, use placeholder
        if (allImages.length === 0) {
          allImages.push("/placeholder.svg?height=600&width=800")
        }
        
        return allImages
      })(),
      
      beds: saved.property.bedrooms || undefined,
      baths: saved.property.bathrooms || undefined,
      sqft: saved.property.area || 0,
      type: saved.property.propertyType || "residential",
      propertyCategory: saved.property.propertyCategory || "flats",
      isActive: saved.property.isActive,
      savedAt: saved.createdAt
    }))

    return NextResponse.json({ 
      properties: transformedProperties,
      count: transformedProperties.length
    })
  } catch (error) {
    console.error('Error fetching saved properties:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
