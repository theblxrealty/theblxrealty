import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactRequestEmail } from '@/lib/email'
import { validateContactRequest } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate all data including spam prevention
    const validation = await validateContactRequest({
      name,
      email,
      phone,
      message
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

    // Check if user exists by email or phone
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { phone }
        ]
      }
    })

    if (!user) {
      // Create new user
      const [firstName, ...lastNameParts] = name.split(' ')
      const lastName = lastNameParts.join(' ') || ''
      
      try {
        user = await prisma.user.create({
          data: {
            email,
            phone,
            firstName,
            lastName,
            password: 'temp-password-' + Math.random().toString(36).substring(7) // Temporary password
          }
        })
      } catch (createError: any) {
        // Handle unique constraint violations
        if (createError.code === 'P2002') {
          // If creation fails due to unique constraint, try to find the existing user again
          user = await prisma.user.findFirst({
            where: {
              OR: [
                { email },
                { phone }
              ]
            }
          })
          
          if (!user) {
            return NextResponse.json(
              { error: 'User with this email or phone already exists' },
              { status: 400 }
            )
          }
        } else {
          throw createError
        }
      }
    } else {
      // Update existing user's information if needed
      try {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            email,
            phone,
            firstName: name.split(' ')[0] || user.firstName,
            lastName: name.split(' ').slice(1).join(' ') || user.lastName
          }
        })
      } catch (updateError: any) {
        // If update fails due to unique constraint, just continue with existing user
        console.log('Could not update user info:', updateError.message)
      }
    }

    // Create contact request
    const contactRequest = await prisma.contactRequest.create({
      data: {
        userId: user.id,
        name,
        email,
        phone,
        message,
        status: 'pending'
      }
    })

    // Send email notification
    const emailResult = await sendContactRequestEmail({
      name,
      email,
      phone,
      message
    })

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      // Continue with the request even if email fails
    }

    return NextResponse.json({
      message: 'Contact request submitted successfully',
      requestId: contactRequest.id,
      emailSent: emailResult.success
    }, { status: 201 })

  } catch (error) {
    console.error('Contact request error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 