"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamMember({ member }) {
  const [isHovered, setIsHovered] = useState(false)

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
      <div className="relative h-80">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/60 to-transparent flex items-end justify-center pb-6"
        >
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gold-400 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-white hover:text-gold-400 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-gold-400 transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-navy-900">{member.name}</h3>
        <p className="text-gold-600 mb-4 font-medium">{member.role}</p>
        <p className="text-slate-600 text-sm">{member.bio}</p>
      </div>
    </motion.div>
  )
}
