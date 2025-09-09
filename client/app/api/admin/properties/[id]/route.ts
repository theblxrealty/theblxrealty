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

// GET - Get single property
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
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
    })

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    // Transform property to include images array
    const images = []
    if (property.propertyBanner1) images.push(property.propertyBanner1)
    if (property.propertyBanner2) images.push(property.propertyBanner2)
    if (property.additionalImages && property.additionalImages.length > 0) {
      images.push(...property.additionalImages)
    }
    if (images.length === 0) images.push('/placeholder.svg')

    return NextResponse.json({
      ...property,
      images
    })

  } catch (error) {
    console.error('Get property error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PATCH - Update property
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
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
      additionalImages,
      isActive
    } = body

    const property = await prisma.property.update({
      where: { id },
      data: {
        title: title?.trim(),
        description: description?.trim(),
        price: price ? parseFloat(price) : undefined,
        location: location?.trim(),
        latitude: latitude ? parseFloat(latitude) : undefined,
        longitude: longitude ? parseFloat(longitude) : undefined,
        propertyType: propertyType?.trim(),
        propertyCategory: propertyCategory?.trim(),
        bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
        bathrooms: bathrooms ? parseInt(bathrooms) : undefined,
        area: area ? parseFloat(area) : undefined,
        propertyBanner1: propertyBanner1,
        propertyBanner2: propertyBanner2,
        additionalImages: additionalImages,
        isActive: isActive !== undefined ? isActive : undefined
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
      message: 'Property updated successfully',
      property
    })

  } catch (error) {
    console.error('Update property error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE - Delete property
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    
    // Check if property exists
    const property = await prisma.property.findUnique({
      where: { id }
    })

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    // Delete the property
    await prisma.property.delete({
      where: { id }
    })

    return NextResponse.json({
      message: 'Property deleted successfully'
    })

  } catch (error) {
    console.error('Delete property error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
