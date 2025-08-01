import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendPropertyViewRequestEmail } from '@/lib/email'
import { validatePropertyViewRequest } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      propertyId,
      firstName,
      lastName,
      email,
      phone,
      title,
      preferredDate,
      preferredTime,
      additionalInfo,
      heardFrom
    } = body

    // Validate all data including spam prevention
    const validation = await validatePropertyViewRequest({
      propertyId,
      firstName,
      lastName,
      email,
      phone,
      title,
      preferredDate,
      preferredTime,
      additionalInfo,
      heardFrom
    }, request)

    if (!validation.isValid) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validation.errors
        },
        { status: 400 }
      )
    }

    // Get property details for email
    const property = await prisma.property.findUnique({
      where: { id: propertyId }
    })

    // Check if user exists, if not create one
    let user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      // Create new user
      user = await prisma.user.create({
        data: {
          email,
          phone,
          firstName,
          lastName,
          title,
          password: 'temp-password-' + Math.random().toString(36).substring(7) // Temporary password
        }
      })
    }

    // Create property view request
    const propertyViewRequest = await prisma.propertyViewRequest.create({
      data: {
        propertyId,
        userId: user.id,
        firstName,
        lastName,
        email,
        phone,
        title,
        preferredDate,
        preferredTime,
        additionalInfo,
        heardFrom,
        status: 'pending'
      }
    })

    // Send email notification
    const emailResult = await sendPropertyViewRequestEmail({
      propertyId,
      propertyTitle: property.title,
      firstName,
      lastName,
      email,
      phone,
      title,
      preferredDate,
      preferredTime,
      additionalInfo,
      heardFrom
    })

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      // Continue with the request even if email fails
    }

    return NextResponse.json({
      message: 'Property view request submitted successfully',
      requestId: propertyViewRequest.id,
      emailSent: emailResult.success
    }, { status: 201 })

  } catch (error) {
    console.error('Property view request error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 