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
        }
      ]
    }

    // Add type filter with improved logic for similar properties
    if (type && type !== 'any') {
      // Normalize property types for better matching
      const normalizedType = type.toLowerCase().trim()
      
      // Create type-based OR conditions - simplified approach
      const typeConditions = []
      
      // Add the exact type match first
      typeConditions.push({
        propertyType: {
          contains: normalizedType,
          mode: 'insensitive'
        }
      })
      
      // Add related types based on the current type
      if (normalizedType.includes('villa') || normalizedType.includes('luxury')) {
        typeConditions.push({
          propertyType: {
            contains: 'luxury-villas',
            mode: 'insensitive'
          }
        })
      } else if (normalizedType.includes('apartment') || normalizedType.includes('flat')) {
        typeConditions.push({
          propertyType: {
            contains: 'apartments',
            mode: 'insensitive'
          }
        })
      } else if (normalizedType.includes('house') || normalizedType.includes('residential')) {
        typeConditions.push({
          propertyType: {
            contains: 'residential',
            mode: 'insensitive'
          }
        })
        typeConditions.push({
          propertyType: {
            contains: 'apartments',
            mode: 'insensitive'
          }
        })
      } else if (normalizedType.includes('farm')) {
        typeConditions.push({
          propertyType: {
            contains: 'farm-land',
            mode: 'insensitive'
          }
        })
        typeConditions.push({
          propertyType: {
            contains: 'farm',
            mode: 'insensitive'
          }
        })
      } else if (normalizedType.includes('commercial')) {
        typeConditions.push({
          propertyType: {
            contains: 'commercial',
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
          // Prioritize exact type matches first
          {
            propertyType: 'asc'
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

    return NextResponse.json({
      properties,
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