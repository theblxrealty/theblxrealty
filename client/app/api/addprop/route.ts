import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication
    const authHeader = request.headers.get('authorization')
    const cookieToken = request.cookies.get('token')?.value
    
    const token = authHeader?.replace('Bearer ', '') || cookieToken
    
    if (!token) {
      return NextResponse.json(
        { error: 'No authentication token provided' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)
    if (!decoded || decoded.type !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required.' },
        { status: 403 }
      )
    }

    // Parse request body
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
      propertyBanner1,
      propertyBanner2,
      additionalImages
    } = body

    // Validate required fields
    if (!title || !propertyCategory) {
      return NextResponse.json(
        { error: 'Title and property category are required' },
        { status: 400 }
      )
    }

    // Create property in database
    const property = await prisma.property.create({
      data: {
        title: title.trim(),
        description: description?.trim(),
        price: price ? parseFloat(price) : null,
        location: location?.trim(),
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
        propertyType: propertyType?.trim(),
        propertyCategory: propertyCategory.trim(),
        bedrooms: bedrooms ? parseInt(bedrooms) : null,
        bathrooms: bathrooms ? parseInt(bathrooms) : null,
        area: area ? parseFloat(area) : null,
        propertyBanner1: propertyBanner1,
        propertyBanner2: propertyBanner2,
        additionalImages: additionalImages || [],
        adminId: decoded.id,
        isActive: true
      },
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
    })

    return NextResponse.json({
      success: true,
      property,
      message: 'Property created successfully'
    })

  } catch (error) {
    console.error('Add property error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
