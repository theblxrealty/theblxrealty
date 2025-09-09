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

// GET - Get all properties for admin management
export async function GET(request: NextRequest) {
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const [properties, total] = await Promise.all([
      prisma.property.findMany({
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
        },
        skip,
        take: limit
      }),
      prisma.property.count()
    ])

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

    return NextResponse.json({
      properties: transformedProperties,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get properties error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
