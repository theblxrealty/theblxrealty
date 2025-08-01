import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendCareerApplicationEmail } from '@/lib/email'
import { validateCareerApplication } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      experience,
      message,
      resume
    } = body

    // Validate all data including spam prevention
    const validation = await validateCareerApplication({
      firstName,
      lastName,
      email,
      phone,
      position,
      experience,
      message,
      resume
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
          password: 'temp-password-' + Math.random().toString(36).substring(7) // Temporary password
        }
      })
    }

    // Create career application (we'll need to add this to the schema)
    // For now, we'll just send the email notification
    const applicationData = {
      firstName,
      lastName,
      email,
      phone,
      position,
      experience,
      message,
      resume
    }

    // Send email notification
    const emailResult = await sendCareerApplicationEmail(applicationData)

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      // Continue with the request even if email fails
    }

    return NextResponse.json({
      message: 'Career application submitted successfully',
      emailSent: emailResult.success
    }, { status: 201 })

  } catch (error) {
    console.error('Career application error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 