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

// PATCH - Update blog post
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
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      tags,
      isPublished,
      publishedAt
    } = body

    // Check if slug already exists (if slug is being changed)
    if (slug) {
      const existingPost = await prisma.blogPost.findFirst({
        where: {
          slug,
          id: { not: id }
        }
      })

      if (existingPost) {
        return NextResponse.json(
          { error: 'A blog post with this slug already exists' },
          { status: 409 }
        )
      }
    }

    const post = await prisma.blogPost.update({
      where: { id: id },
      data: {
        title,
        slug,
        excerpt,
        content,
        featuredImage,
        category,
        tags: tags || [],
        isPublished,
        publishedAt
      }
    })

    // If the post is being published, send newsletter emails
    if (isPublished && publishedAt) {
      try {
        // Send newsletter emails asynchronously (don't wait for completion)
        fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/newsletter/send`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ blogId: id }),
        }).catch(error => {
          console.error('Failed to send newsletter emails:', error)
        })
      } catch (error) {
        console.error('Error triggering newsletter send:', error)
      }
    }

    return NextResponse.json({
      message: 'Blog post updated successfully',
      post
    })

  } catch (error) {
    console.error('Update blog post error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE - Delete blog post
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
    await prisma.blogPost.delete({
      where: { id: id }
    })

    return NextResponse.json({
      message: 'Blog post deleted successfully'
    })

  } catch (error) {
    console.error('Delete blog post error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 