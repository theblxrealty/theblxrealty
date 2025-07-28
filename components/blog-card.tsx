"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogCard({ post, priority = false }) {
  const [isHovered, setIsHovered] = useState(false)

  const getCategoryColor = (category) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            priority={priority}
            className="object-cover"
          />
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
  )
}
