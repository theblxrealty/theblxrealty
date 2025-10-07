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

// DELETE - Delete career posting
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
    
    // Check if career posting exists
    const posting = await prisma.careerPosting.findUnique({
      where: { id }
    })

    if (!posting) {
      return NextResponse.json(
        { error: 'Career posting not found' },
        { status: 404 }
      )
    }

    // Delete the career posting
    await prisma.careerPosting.delete({
      where: { id }
    })

    return NextResponse.json({
      message: 'Career posting deleted successfully'
    })

  } catch (error) {
    console.error('Delete career posting error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
