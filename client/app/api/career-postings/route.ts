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
        orderBy: [
          { order: 'asc' }, // Sort by custom order field first
          { createdAt: 'desc' }, // Then by creation date
        ],
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
