"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className={`p-2 rounded-xl ${isScrolled ? "bg-navy-600" : "bg-white/20 backdrop-blur-sm"}`}>
              <Crown className={`h-6 w-6 ${isScrolled ? "text-gold-400" : "text-white"}`} />
            </div>
            <span className={`ml-3 text-xl font-bold ${isScrolled ? "text-navy-900" : "text-white"}`}>11Square</span>
            <span
              className={`ml-2 text-xs px-2 py-1 rounded-full ${isScrolled ? "bg-gold-100 text-gold-800" : "bg-gold-500/20 text-gold-200"}`}
            >
              PREMIUM
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === item.path
                    ? isScrolled
                      ? "text-navy-600"
                      : "text-white font-bold"
                    : isScrolled
                      ? "text-slate-700 hover:text-navy-600"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? "bg-gold-500" : "bg-gold-400"}`}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className={`flex items-center ${isScrolled ? "text-slate-700" : "text-white"}`}>
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </div>

            <Button
              className={
                isScrolled
                  ? "bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white shadow-lg"
                  : "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg"
              }
            >
              Schedule Visit
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-navy-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-navy-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-base py-2 ${
                    pathname === item.path ? "text-navy-600 font-medium" : "text-slate-700 hover:text-navy-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center text-slate-700 mb-4">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>

                <Button className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white">
                  Schedule Visit
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
