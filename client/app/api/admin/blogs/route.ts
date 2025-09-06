import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { uploadImage } from '@/lib/uploadImage'

// POST - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json(
        { error: 'No authentication token provided' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)
    
    if (!decoded || decoded.type !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required.' },
        { status: 403 }
      )
    }

    // Parse request body
    const body = await request.json()
    
    const {
      title,
      excerpt,
      content,
      redirectUrl,
      category,
      tags,
      featuredImageFile
    } = body

    // Convert tags string to array if needed
    const tagsArray = typeof tags === 'string' 
      ? tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      : Array.isArray(tags) ? tags : []

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Check if slug already exists
    try {
      const existingPost = await prisma.blogPost.findUnique({
        where: { slug }
      })

      if (existingPost) {
        return NextResponse.json(
          { error: 'A blog post with this title already exists' },
          { status: 400 }
        )
      }
    } catch (dbError) {
      console.error('Database error during slug check:', dbError)
      return NextResponse.json(
        { error: 'Database error during validation' },
        { status: 500 }
      )
    }

    // Handle featured image upload if provided
    let featuredImageUrl = null
    if (featuredImageFile) {
      try {
        // Convert base64 to File object
        const base64Data = featuredImageFile.split(',')[1]
        const buffer = Buffer.from(base64Data, 'base64')
        const file = new File([buffer], 'blog-image.jpg', { type: 'image/jpeg' })
        
        const uploadResult = await uploadImage(file)
        if (uploadResult.success && uploadResult.url) {
          featuredImageUrl = uploadResult.url
        } else {
          console.error('Image upload failed:', uploadResult.error)
          return NextResponse.json(
            { error: 'Failed to upload featured image' },
            { status: 500 }
          )
        }
      } catch (error) {
        console.error('Image upload error:', error)
        return NextResponse.json(
          { error: 'Failed to process featured image' },
          { status: 500 }
        )
      }
    }

    // Create blog post in database

    let blogPost
    try {
      blogPost = await prisma.blogPost.create({
        data: {
          title: title.trim(),
          slug,
          excerpt: excerpt?.trim(),
          content: content.trim(),
          featuredImage: featuredImageUrl,
          redirectUrl: redirectUrl?.trim(),
          category: category?.trim(),
          tags: tagsArray,
          authorId: decoded.id,
          isPublished: true, // Auto-publish for admin uploads
          publishedAt: new Date()
        },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      })
    } catch (createError) {
      console.error('Database error during blog post creation:', createError)
      return NextResponse.json(
        { error: 'Failed to create blog post' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      blogPost,
      message: 'Blog post created successfully'
    })

  } catch (error) {
    console.error('Create blog post error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET - Get all blog posts for admin
export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json(
        { error: 'No authentication token provided' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)
    if (!decoded || decoded.type !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required.' },
        { status: 403 }
      )
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit
      }),
      prisma.blogPost.count()
    ])

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get blog posts error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
