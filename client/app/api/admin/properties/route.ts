import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

// Middleware to verify admin token
const verifyAdminToken = (request: NextRequest) => {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  const decoded = verifyToken(token)
  
  if (!decoded || decoded.type !== 'admin') {
    return null
  }

  return decoded
}

// GET - Get all properties
export async function GET(request: NextRequest) {
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const properties = await prisma.property.findMany({
      include: {
        admin: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform properties to include images array for frontend compatibility
    const transformedProperties = properties.map(property => {
      // Create images array from banner images and additional images
      const images = []
      
      // Add banner images first (these will be the main display images)
      if (property.propertyBanner1) {
        images.push(property.propertyBanner1)
      }
      if (property.propertyBanner2) {
        images.push(property.propertyBanner2)
      }
      
      // Add additional images
      if (property.additionalImages && property.additionalImages.length > 0) {
        images.push(...property.additionalImages)
      }
      
      // If no images at all, add placeholder
      if (images.length === 0) {
        images.push('/placeholder.svg')
      }

      return {
        ...property,
        images
      }
    })

    return NextResponse.json(transformedProperties)

  } catch (error) {
    console.error('Get properties error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Create new property
export async function POST(request: NextRequest) {
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const {
      title,
      description,
      price,
      location,
      latitude,
      longitude,
      propertyType,
      propertyCategory,
      bedrooms,
      bathrooms,
      area,
      images
    } = body

    // Validate required fields
    if (!title) {
      return NextResponse.json(
        { error: 'Property title is required' },
        { status: 400 }
      )
    }

    const property = await prisma.property.create({
      data: {
        title,
        description,
        price: price ? parseFloat(price) : null,
        location,
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
        propertyType,
        propertyCategory,
        bedrooms: bedrooms ? parseInt(bedrooms) : null,
        bathrooms: bathrooms ? parseInt(bathrooms) : null,
        area: area ? parseFloat(area) : null,
        images: images || [],
        adminId: admin.id
      }
    })

    return NextResponse.json({
      message: 'Property created successfully',
      property
    }, { status: 201 })

  } catch (error) {
    console.error('Create property error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 