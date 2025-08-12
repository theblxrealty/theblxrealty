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

    // Add type filter
    if (type && type !== 'any') {
      whereClause.propertyType = type
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
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit
      }),
      prisma.property.count({
        where: whereClause
      })
    ])

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