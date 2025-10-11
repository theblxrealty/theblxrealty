import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { z } from 'zod'

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

const PropertyUpdateSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  description: z.string().optional(),
  longDescription: z.string().optional(),
  price: z.number().nullable().optional(),
  location: z.string().optional(),
  latitude: z.number().nullable().optional(),
  longitude: z.number().nullable().optional(),
  propertyType: z.string().optional(),
  propertyCategory: z.string().min(1, "Property Category is required").optional(),
  bedrooms: z.number().nullable().optional(),
  bathrooms: z.number().nullable().optional(),
  area: z.number().nullable().optional(),
  yearBuilt: z.number().nullable().optional(),
  lotSize: z.string().optional(),
  amenities: z.array(z.string()).optional(),
  ecoFeatures: z.array(z.string()).optional(),
  agentName: z.string().optional(),
  agentPhone: z.string().optional(),
  agentEmail: z.string().email().optional(),
  agentImage: z.string().url().or(z.literal("")).optional(),
  nearbyAmenities: z.record(z.string()).nullable().optional(),
  transportation: z.record(z.string()).nullable().optional(),
  propertyBanner1: z.string().url().or(z.literal("")).nullable().optional(),
  propertyBanner2: z.string().url().or(z.literal("")).nullable().optional(),
  images: z.array(z.string().url()).optional(), // Assuming images are URLs
  isActive: z.boolean().optional(),
}).strict()

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

// PUT - Update property
export async function PUT(
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

    const validatedData = PropertyUpdateSchema.safeParse(body)
    if (!validatedData.success) {
      console.error("Validation Error:", validatedData.error.errors)
      return NextResponse.json(
        { error: validatedData.error.errors },
        { status: 400 }
      )
    }

    const { 
      title, 
      description, 
      longDescription, 
      price, 
      location, 
      latitude, 
      longitude, 
      propertyType, 
      propertyCategory, 
      bedrooms, 
      bathrooms, 
      area, 
      yearBuilt, 
      lotSize, 
      amenities, 
      ecoFeatures, 
      agentName, 
      agentPhone, 
      agentEmail, 
      agentImage, 
      nearbyAmenities, 
      transportation, 
      propertyBanner1, 
      propertyBanner2, 
      images, 
      isActive 
    } = validatedData.data

    // Check if property exists
    const existingProperty = await prisma.property.findUnique({
      where: { id }
    })

    if (!existingProperty) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    const updatedProperty = await prisma.property.update({
      where: { id },
      data: {
        title,
        description,
        longDescription,
        price,
        location,
        latitude,
        longitude,
        propertyType,
        propertyCategory,
        bedrooms,
        bathrooms,
        area,
        yearBuilt,
        lotSize,
        amenities,
        ecoFeatures,
        agentName,
        agentPhone,
        agentEmail,
        agentImage,
        nearbyAmenities,
        transportation,
        propertyBanner1,
        propertyBanner2,
        additionalImages: images,
        isActive
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
      property: updatedProperty
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
