"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

// Import the same blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Buying Property in Bangalore",
    excerpt: "Everything you need to know about purchasing residential and commercial properties in Bangalore - from legal checks to financing options.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2024",
    author: "Arjun Mehta",
    category: "Buying Guide",
    featured: true,
  },
  {
    id: 2,
    title: "How to Sell Your Property at the Best Price",
    excerpt: "Expert tips on property valuation, staging, marketing, and negotiation strategies to maximize your property's selling price in Bangalore.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 8, 2024",
    author: "Sneha Patel",
    category: "Selling Tips",
    featured: true,
  },
  {
    id: 3,
    title: "Commercial Real Estate Investment Opportunities",
    excerpt: "Explore lucrative commercial property investment options in Bangalore's growing business districts and IT corridors.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 28, 2024",
    author: "Vikram Singh",
    category: "Investment",
    featured: true,
  },
  {
    id: 4,
    title: "Luxury Property Market Trends in Bangalore",
    excerpt: "Analyze the latest trends in Bangalore's luxury real estate market and discover emerging investment hotspots.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 15, 2024",
    author: "Emily Rodriguez",
    category: "Market Analysis",
    featured: false,
  },
  {
    id: 5,
    title: "Premium Locations: Where to Invest in 2024",
    excerpt: "Discover Bangalore's most promising premium locations for property investment and understand the factors driving growth.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 5, 2024",
    author: "David Wilson",
    category: "Investment",
    featured: false,
  },
  {
    id: 6,
    title: "Legal Guide to Property Transactions",
    excerpt: "A comprehensive guide to legal aspects of property buying and selling, including documentation and compliance requirements.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 25, 2024",
    author: "Sarah Johnson",
    category: "Legal",
    featured: false,
  },
  {
    id: 7,
    title: "Understanding Property Taxes in Bangalore",
    excerpt: "A detailed breakdown of property taxes, stamp duty, and other charges you need to know when buying property in Bangalore.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 18, 2024",
    author: "Rahul Kumar",
    category: "Legal",
    featured: false,
  },
  {
    id: 8,
    title: "Residential vs Commercial Property Investment",
    excerpt: "Compare the pros and cons of investing in residential versus commercial properties in Bangalore's real estate market.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 10, 2024",
    author: "Priya Sharma",
    category: "Investment",
    featured: false,
  },
  {
    id: 9,
    title: "Home Loan Guide for First-Time Buyers",
    excerpt: "Everything first-time homebuyers need to know about securing a home loan, including eligibility, documents, and tips.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 5, 2024",
    author: "Amit Patel",
    category: "Buying Guide",
    featured: false,
  },
]

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  category: string
  featured: boolean
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const postId = parseInt(params.slug as string)
    const foundPost = blogPosts.find(p => p.id === postId)
    
    if (foundPost) {
      setPost(foundPost)
    } else {
      setError('Blog post not found')
    }
    setLoading(false)
  }, [params.slug])

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = post?.title || ''

  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: Facebook
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      icon: Twitter
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: Linkedin
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-900">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post.image && (
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Post Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-6 font-['Suisse_Intl',sans-serif] leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Share:</span>
                {shareLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <div 
              className="text-gray-700 leading-relaxed font-['Suisse_Intl',sans-serif]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Author Bio */}
          <div className="border-t pt-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {post.author}
                </h3>
                <p className="text-gray-600 text-sm">
                  Real Estate Professional at 11Square
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 