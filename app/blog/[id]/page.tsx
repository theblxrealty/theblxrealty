import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import BlogCard from "@/components/blog-card"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Buying Property in Bangalore",
    excerpt:
      "Everything you need to know about purchasing residential and commercial properties in Bangalore - from legal checks to financing options.",
    content: `
      <p>Buying property in Bangalore has become increasingly complex with the city's rapid growth and evolving real estate landscape. This comprehensive guide will walk you through every step of the property buying process, ensuring you make informed decisions in one of India's most dynamic real estate markets.</p>
      
      <h2>Understanding Bangalore's Real Estate Market</h2>
      
      <p>Bangalore's real estate market is characterized by diverse micro-markets, each with unique characteristics and investment potential. From the tech corridors of Whitefield and Electronic City to the premium residential areas of Koramangala and Indiranagar, understanding these nuances is crucial for making the right investment.</p>
      
      <p>Key factors driving Bangalore's real estate market include:</p>
      
      <ul>
        <li>Strong IT and startup ecosystem driving employment growth</li>
        <li>Infrastructure development including metro expansion and road improvements</li>
        <li>Government policies supporting affordable and luxury housing</li>
        <li>Growing demand from both end-users and investors</li>
      </ul>
      
      <h2>Legal Due Diligence</h2>
      
      <p>Legal verification is perhaps the most critical aspect of property buying in Bangalore. Ensure you verify:</p>
      
      <ul>
        <li>Clear title documents and ownership history</li>
        <li>Approved building plans and completion certificates</li>
        <li>RERA registration for under-construction properties</li>
        <li>Encumbrance certificate and property tax receipts</li>
        <li>NOCs from relevant authorities</li>
      </ul>
      
      <h2>Financing Your Property Purchase</h2>
      
      <p>Most property purchases in Bangalore are financed through home loans. Key considerations include:</p>
      
      <ul>
        <li>Compare interest rates across multiple lenders</li>
        <li>Understand processing fees and hidden charges</li>
        <li>Ensure your credit score is optimized</li>
        <li>Consider the loan tenure and EMI affordability</li>
      </ul>
      
      <p>With proper planning and due diligence, buying property in Bangalore can be a rewarding investment that provides both lifestyle benefits and long-term financial returns.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "May 15, 2023",
    author: "Jessica Green",
    authorTitle: "Real Estate Investment Specialist",
    authorImage: "/placeholder.svg?height=200&width=200",
    category: "Buying Guide",
    featured: true,
    relatedPosts: [2, 3, 6],
  },
  {
    id: 2,
    title: "How to Sell Your Property at the Best Price",
    excerpt:
      "Expert tips on property valuation, staging, marketing, and negotiation strategies to maximize your property's selling price in Bangalore.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 3, 2023",
    author: "Robert Chen",
    category: "Selling Tips",
    featured: false,
  },
  {
    id: 3,
    title: "Commercial Real Estate Investment Opportunities",
    excerpt:
      "Explore lucrative commercial property investment options in Bangalore's growing business districts and IT corridors.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 22, 2023",
    author: "Mark Wilson",
    category: "Investment",
    featured: true,
  },
  {
    id: 4,
    title: "Luxury Property Market Trends in Bangalore",
    excerpt:
      "Analyze the latest trends in Bangalore's luxury real estate market and discover emerging investment hotspots.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 10, 2023",
    author: "Emily Rodriguez",
    category: "Market Analysis",
    featured: false,
  },
  {
    id: 5,
    title: "Premium Locations: Where to Invest in 2024",
    excerpt:
      "Discover Bangalore's most promising premium locations for property investment and understand the factors driving growth.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 5, 2023",
    author: "David Wilson",
    category: "Investment",
    featured: false,
  },
  {
    id: 6,
    title: "Legal Guide to Property Transactions",
    excerpt:
      "A comprehensive guide to legal aspects of property buying and selling, including documentation and compliance requirements.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 18, 2023",
    author: "Sarah Johnson",
    category: "Legal",
    featured: true,
  },
]

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id.toString() === id) || blogPosts[0]

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts.includes(p.id))
    : blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Buying Guide":
        return "bg-navy-600"
      case "Selling Tips":
        return "bg-gold-600"
      case "Investment":
        return "bg-slate-600"
      case "Market Analysis":
        return "bg-emerald-600"
      case "Legal":
        return "bg-purple-600"
      default:
        return "bg-slate-600"
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover opacity-20" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gold-300 hover:text-gold-100 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <Badge className={`mb-4 ${getCategoryColor(post.category)} text-white border-0`}>{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2 text-gold-300" />
                <span className="text-slate-200">{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-gold-300" />
                <span className="text-slate-200">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-navy-900">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Author Bio */}
              {post.authorImage && (
                <div className="mt-12 pt-8 border-t border-slate-200 flex items-start gap-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-gold-400">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-navy-900">{post.author}</h3>
                    <p className="text-gold-600">{post.authorTitle || "Author"}</p>
                    <p className="text-slate-600 mt-2">
                      A passionate advocate for luxury real estate and property investment with over a decade of
                      experience in Bangalore's premium market.
                    </p>
                  </div>
                </div>
              )}

              {/* Share Links */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-bold mb-4 text-navy-900">Share this article</h3>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-300 hover:bg-slate-50 bg-transparent"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-300 hover:bg-slate-50 bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-300 hover:bg-slate-50 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-300 hover:bg-slate-50 bg-transparent"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Share via Email</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-lg mb-4 text-navy-900">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(blogPosts.map((p) => p.category))].map((category) => (
                      <Link key={category} href={`/blog?category=${category}`}>
                        <Badge
                          variant="outline"
                          className={`hover:${getCategoryColor(category)} hover:text-white border-slate-300 hover:border-transparent transition-colors`}
                        >
                          {category}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-lg mb-4 text-navy-900">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((recentPost) => (
                      <Link key={recentPost.id} href={`/blog/${recentPost.id}`} className="flex gap-3 group">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={recentPost.image || "/placeholder.svg"}
                            alt={recentPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-navy-600 transition-colors line-clamp-2 text-navy-900">
                            {recentPost.title}
                          </h4>
                          <p className="text-sm text-slate-500">{recentPost.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white p-6 rounded-2xl">
                  <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-slate-200 text-sm mb-4">
                    Stay updated with our latest articles and insights on luxury real estate.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 rounded-md bg-navy-800/50 border border-navy-700 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    />
                    <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-navy-900">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
