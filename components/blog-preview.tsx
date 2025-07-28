"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Updated blog content for property buying/selling
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Buying Property in Bangalore",
    excerpt:
      "Everything you need to know about purchasing residential and commercial properties in Bangalore - from legal checks to financing options.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2024",
    author: "Arjun Mehta",
    category: "Buying Guide",
  },
  {
    id: 2,
    title: "How to Sell Your Property at the Best Price",
    excerpt:
      "Expert tips on property valuation, staging, marketing, and negotiation strategies to maximize your property's selling price in Bangalore.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 8, 2024",
    author: "Sneha Patel",
    category: "Selling Tips",
  },
  {
    id: 3,
    title: "Commercial Real Estate Investment Opportunities",
    excerpt:
      "Explore lucrative commercial property investment options in Bangalore's growing business districts and IT corridors.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 28, 2024",
    author: "Vikram Singh",
    category: "Investment",
  },
]

export default function BlogPreview() {
  const [hoveredId, setHoveredId] = useState(null)

  const getCategoryColor = (category) => {
    switch (category) {
      case "Buying Guide":
        return "bg-navy-600"
      case "Selling Tips":
        return "bg-gold-600"
      case "Investment":
        return "bg-slate-600"
      default:
        return "bg-slate-600"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: post.id * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
          onMouseEnter={() => setHoveredId(post.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative h-48 overflow-hidden">
            <motion.div
              animate={{
                scale: hoveredId === post.id ? 1.05 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </motion.div>
            <div
              className={`absolute top-4 left-4 ${getCategoryColor(post.category)} text-white text-xs px-3 py-1 rounded-full`}
            >
              {post.category}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center text-sm text-slate-500 mb-3">
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-navy-900">{post.title}</h3>
            <p className="text-slate-600 mb-4">{post.excerpt}</p>

            <Link href={`/blog/${post.id}`}>
              <Button variant="link" className="p-0 text-navy-600 hover:text-navy-700">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
