"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers", newWindow: true },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-lg bg-gradient-to-br from-[#011337] via-[#011337]/90 to-[#011337]/80 ${
        isScrolled ? "py-2 -translate-y-full" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-14 h-14 overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="11Square Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center Section - Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                target={item.newWindow ? "_blank" : undefined}
                rel={item.newWindow ? "noopener noreferrer" : undefined}
                className={`text-base font-medium transition-colors relative font-['Suisse_Intl',sans-serif] ${
                  pathname === item.path
                    ? "text-red-400 font-bold"
                    : "text-slate-200 hover:text-red-400"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Section - Register Button and Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-transparent text-white px-6 py-2 font-['Suisse_Intl',sans-serif] font-medium hover:bg-transparent hover:text-white transition-all duration-300 relative group text-base">
              <span className="relative flex items-center gap-2">
                <span className="text-white">👤</span> Register
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md border-t border-slate-700 bg-gradient-to-br from-[#011337] via-[#011337]/95 to-[#011337]/90"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  target={item.newWindow ? "_blank" : undefined}
                  rel={item.newWindow ? "noopener noreferrer" : undefined}
                  className={`text-lg py-2 font-['Suisse_Intl',sans-serif] ${
                    pathname === item.path ? "text-red-400 font-medium" : "text-slate-200 hover:text-red-400"
                  }`}
                  onClick={() => !item.newWindow && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-700">
                <Button className="w-full bg-transparent text-white font-['Suisse_Intl',sans-serif] font-medium hover:bg-transparent hover:text-white transition-all duration-300 relative group text-lg">
                  <span className="relative flex items-center gap-2">
                    <span className="text-white">👤</span> Register
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
