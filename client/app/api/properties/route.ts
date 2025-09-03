import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Get all properties with search functionality
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const type = searchParams.get('type')
    const bedrooms = searchParams.get('bedrooms')
    const exclude = searchParams.get('exclude')
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')
    const skip = (page - 1) * limit

    // Build where clause for filtering
    const whereClause: any = {
      isActive: true
    }

    // Add search functionality
    if (search) {
      whereClause.OR = [
        {
          title: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          location: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          description: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          propertyType: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          propertyCategory: {
            contains: search,
            mode: 'insensitive'
          }
        }
      ]
    }

    // Add type filter using the new propertyCategory field
    if (type && type !== 'any') {
      // Normalize property types for better matching
      const normalizedType = type.toLowerCase().trim()
      
      // Create type-based OR conditions using propertyCategory
      const typeConditions = []
      
      // Map the URL type parameters to our new propertyCategory values
      if (normalizedType === 'luxury-villas' || normalizedType === 'luxury villas') {
        typeConditions.push({
          propertyCategory: 'luxury villas'
        })
      } else if (normalizedType === 'flats' || normalizedType === 'apartments') {
        typeConditions.push({
          propertyCategory: 'flats'
        })
      } else if (normalizedType === 'new buildings' || normalizedType === 'new-buildings') {
        typeConditions.push({
          propertyCategory: 'new buildings'
        })
      } else if (normalizedType === 'farm house' || normalizedType === 'farm-house' || normalizedType === 'farm') {
        typeConditions.push({
          propertyCategory: 'farm house'
        })
      } else if (normalizedType === 'sites' || normalizedType === 'plots' || normalizedType === 'development') {
        typeConditions.push({
          propertyCategory: 'sites'
        })
      } else if (normalizedType === 'commercial') {
        typeConditions.push({
          propertyCategory: 'commercial'
        })
      } else if (normalizedType === 'investment') {
        typeConditions.push({
          propertyCategory: 'investment'
        })
      } else {
        // Fallback: try to match any propertyCategory that contains the type
        typeConditions.push({
          propertyCategory: {
            contains: normalizedType,
            mode: 'insensitive'
          }
        })
      }
      
      // If we have search conditions, combine them with type conditions
      if (whereClause.OR) {
        // Create AND condition to combine search and type filters
        whereClause.AND = [
          {
            OR: whereClause.OR // Search conditions
          },
          {
            OR: typeConditions // Type conditions
          }
        ]
        delete whereClause.OR // Remove the top-level OR
      } else {
        // No search conditions, just use type conditions
        whereClause.OR = typeConditions
      }
    }

    // Add bedrooms filter
    if (bedrooms && bedrooms !== 'any') {
      whereClause.bedrooms = {
        gte: parseInt(bedrooms)
      }
    }

    // Add exclude filter
    if (exclude) {
      whereClause.NOT = {
        id: exclude
      }
    }

    const [properties, total] = await Promise.all([
      prisma.property.findMany({
        where: whereClause,
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
        orderBy: [
          // Prioritize exact category matches first
          {
            propertyType: 'asc' // Temporarily using propertyType until Prisma client is updated
          },
          // Then by creation date
          {
            createdAt: 'desc'
          }
        ],
        skip,
        take: limit
      }),
      prisma.property.count({
        where: whereClause
      })
    ])

    console.log('Properties API - Query params:', { search, type, bedrooms, exclude, limit, page })
    console.log('Properties API - Where clause:', JSON.stringify(whereClause, null, 2))
    console.log('Properties API - Found properties:', properties.length)
    console.log('Properties API - Property types found:', properties.map(p => p.propertyType))

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