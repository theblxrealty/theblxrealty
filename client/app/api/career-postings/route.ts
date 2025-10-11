import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Get all active career postings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const locations = searchParams.getAll('location')

    const whereClause: any = {
      isActive: true,
    }

    if (locations.length > 0) {
      whereClause.location = { in: locations }
    }

    const [postings, total] = await Promise.all([
      prisma.careerPosting.findMany({
        where: whereClause,
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit
      }),
      prisma.careerPosting.count({
        where: whereClause,
      })
    ])

    return NextResponse.json({
      postings,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get active career postings error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, location, type, salary, experience, responsibilities, qualifications, education, benefits } = body

    // Basic validation
    if (!title || !description || !location || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const newPosting = await prisma.careerPosting.create({
      data: {
        title,
        description,
        location,
        type,
        salary,
        experience,
        responsibilities,
        qualifications,
        education,
        benefits,
        isActive: true, // New postings are active by default
      },
    })

    return NextResponse.json(newPosting, { status: 201 })
  } catch (error) {
    console.error('Create career posting error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}