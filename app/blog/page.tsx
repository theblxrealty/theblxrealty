import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogCard from "@/components/blog-card"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Buying Property in Bangalore",
    excerpt:
      "Everything you need to know about purchasing residential and commercial properties in Bangalore - from legal checks to financing options.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023",
    author: "Jessica Green",
    category: "Buying Guide",
    featured: true,
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

// Get featured posts
const featuredPosts = blogPosts.filter((post) => post.featured)

// Get categories
const categories = [...new Set(blogPosts.map((post) => post.category))]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Market{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Insights</span>{" "}
              & Analysis
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8">
              Stay informed with Bangalore's luxury real estate trends, investment opportunities, and expert market
              analysis
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:border-gold-400 backdrop-blur-sm"
              />
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

            <Tabs defaultValue="all" className="w-full md:w-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                3
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-slate-200 mb-8">
              Subscribe to our newsletter for exclusive market insights, luxury property updates, and investment
              opportunities
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
