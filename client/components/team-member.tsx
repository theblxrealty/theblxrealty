"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

interface TeamMemberProps {
  member: {
    name: string
    role: string
    image: string
    bio: string
  }
}

export default function TeamMember({ member }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // ✅ Detect mobile device (for touch support)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 cursor-pointer"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        // ✅ On mobile: tap toggles hover icons
        onTouchStart={() => setIsHovered(!isHovered)}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-64 sm:h-72 md:h-80 w-full">

          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="rounded-2xl object-center object-cover"
          />

          {/* Hover Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/60 to-transparent flex items-end justify-center pb-6"
          >
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/nishchith-umesh-b08734159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="text-white hover:text-gold-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-1 text-navy-900">{member.name}</h3>
          <p className="text-gold-600 mb-4 font-medium">{member.role}</p>
          <div
            className="prose max-w-none text-slate-700 leading-relaxed text-base md:text-lg line-clamp-3"
            dangerouslySetInnerHTML={{ __html: member.bio }}
          />
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left: Image */}
              <div className="relative w-full md:h-[700px] flex-shrink-0">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              {/* Right: Bio */}
              <div className="flex flex-col justify-start overflow-y-auto pr-2">
                <h2 className="text-3xl font-bold text-navy-900">{member.name}</h2>
                <p className="text-gold-600 font-medium text-lg mb-4">{member.role}</p>
                <div
                  className="prose max-w-none text-slate-700 leading-relaxed text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: member.bio }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
