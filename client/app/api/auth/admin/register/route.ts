import { NextRequest, NextResponse } from 'next/server'
import { createAdmin } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, phone, password, firstName, lastName, role } = body

    // Validate required fields
    if (!email || !phone || !password) {
      return NextResponse.json(
        { error: 'Email, phone, and password are required' },
        { status: 400 }
      )
    }

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findFirst({
      where: {
        OR: [
          { email },
          { phone }
        ]
      }
    })

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin with this email or phone already exists' },
        { status: 409 }
      )
    }

    // Create admin
    const admin = await createAdmin({
      email,
      phone,
      password,
      firstName,
      lastName,
      role: role || 'admin'
    })

    // Remove password from response
    const { password: _, ...adminWithoutPassword } = admin

    return NextResponse.json(
      { 
        message: 'Admin registered successfully',
        admin: adminWithoutPassword
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Admin registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 