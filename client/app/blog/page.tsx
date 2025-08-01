"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, User, ArrowRight, ArrowLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import BlogCard from "@/components/blog-card"

// Sample blog data with more posts
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Buying Property in Bangalore",
    excerpt: "Everything you need to know about purchasing residential and commercial properties in Bangalore - from legal checks to financing options.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 5, 2024",
    author: "Amit Patel",
    category: "Buying Guide",
    featured: false,
  },
]

// Get featured posts
const featuredPosts = blogPosts.filter((post) => post.featured)

// Get categories
const categories = [...new Set(blogPosts.map((post) => post.category))]

interface BlogPageProps {
  searchParams?: Promise<{
    category?: string
    page?: string
  }>
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const initializeFromSearchParams = async () => {
      if (searchParams) {
        const params = await searchParams
        setSelectedCategory(params.category || 'all')
      }
    }
    
    initializeFromSearchParams()
  }, [searchParams])

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    
    // Update URL
    const params = new URLSearchParams()
    if (category !== 'all') params.set('category', category)
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <Image
            src="/contact-banner.jpg?height=1080&width=1920"
            alt="Our real estate blog and insights"
            fill
            className="object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-white animate-fade-in">
                {/* Main Heading */}
                <h1 
                  className="font-bold mb-6 font-serif animate-slide-up" 
                  style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '60px', fontWeight: '400' }}
                >
                  Market Insights & Analysis
                </h1>

                {/* Description */}
                <p 
                  className="text-lg text-white mb-8 font-['Suisse_Intl',sans-serif] animate-slide-up-delay-1"
                >
                  Stay informed with Bangalore's luxury real estate trends, investment opportunities, and expert market analysis
                </p>

                {/* Search Bar */}
                <div 
                  className="max-w-4xl mx-auto mb-8 animate-slide-up-delay-2"
                >
                  <div className="relative">
                    <div className="flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="flex-1 flex items-center px-6 py-4">
                        <Search className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <input
                          type="text"
                          placeholder="Search articles..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-lg"
                        />
                      </div>
                      <button
                        type="button"
                        className="bg-transparent hover:bg-gray-50 text-gray-800 px-8 py-4 transition-all duration-300 flex items-center gap-2"
                      >
                        <Search className="h-5 w-5" />
                        <span className="font-medium">Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-navy-900">Featured Articles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post, index) => (
              <BlogCard key={post.id} post={post} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">All Articles</h2>

            <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full md:w-auto">
              <TabsList className="bg-white border border-slate-200">
                <TabsTrigger value="all" className="data-[state=active]:bg-navy-600 data-[state=active]:text-white">
                  All
                </TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-navy-600 data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-slate-200 mb-8">
              Subscribe to our newsletter for exclusive market insights, luxury property updates, and investment opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:border-gold-400 backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 