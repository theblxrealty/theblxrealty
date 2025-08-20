"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Search, User, LogOut, Shield, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import AuthModal from "@/components/auth-modal"
import { useSession, signOut } from "next-auth/react"
import { useAdmin } from "@/hooks/use-admin"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers", newWindow: true },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState<"properties" | "blog">("properties")
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, status } = useSession()
  const { isAdmin, adminUser, loading: adminLoading, logout } = useAdmin()

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

  // No need for localStorage logic with NextAuth

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const params = new URLSearchParams()
      params.set('search', searchQuery.trim())
      
      if (searchType === "properties") {
        router.push(`/properties?${params.toString()}`)
      } else {
        router.push(`/blog?${params.toString()}`)
      }
      
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' })
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleLoginSuccess = (userData: any, adminStatus: boolean) => {
    // Handle admin login success
    if (adminStatus) {
      // Force refresh to update admin state
      window.location.reload()
    }
    setAuthModalOpen(false)
  }

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

          {/* Right Section - Search, Admin Actions, Auth Button and Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-red-400 transition-colors p-2"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Admin Add Property Button */}
            {isAdmin && !adminLoading && (
              <Link
                href="/addprop"
                className="flex items-center space-x-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-['Suisse_Intl',sans-serif] font-medium transition-all duration-300 text-sm"
              >
                <Plus className="h-4 w-4" />
                <span>Add Property</span>
              </Link>
            )}

            {session ? (
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">
                  Welcome, {session.user?.name || session.user?.email}
                </span>
                <Button
                  onClick={handleLogout}
                  className="bg-transparent text-white px-4 py-2 font-['Suisse_Intl',sans-serif] font-medium hover:bg-transparent hover:text-white transition-all duration-300 relative group text-sm"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : isAdmin && !adminLoading ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 text-white text-sm">
                  <Shield className="h-4 w-4 text-red-400" />
                  <span>Admin: {adminUser?.firstName || adminUser?.email}</span>
                </div>
                <Button
                  onClick={() => {
                    // Use the logout function from useAdmin hook
                    logout()
                    window.location.reload() // Refresh to show login modal
                  }}
                  className="bg-transparent text-white px-4 py-2 font-['Suisse_Intl',sans-serif] font-medium hover:bg-transparent hover:text-white transition-all duration-300 relative group text-sm"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => setAuthModalOpen(true)}
                className="bg-transparent text-white px-6 py-2 font-['Suisse_Intl',sans-serif] font-medium hover:bg-transparent hover:text-white transition-all duration-300 relative group text-base"
              >
                <span className="relative flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Sign in
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Button>
            )}
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

              {/* Admin Add Property Button - Mobile */}
              {isAdmin && !adminLoading && (
                <Link
                  href="/addprop"
                  className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-['Suisse_Intl',sans-serif] font-medium transition-all duration-300 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Plus className="h-5 w-5" />
                  <span>Add Property</span>
                </Link>
              )}

              <div className="pt-4 border-t border-slate-700">
                {session ? (
                  <div className="space-y-2">
                    <div className="text-white text-sm">
                      Welcome, {session.user?.name || session.user?.email}
                    </div>
                    <Button
                      onClick={handleLogout}
                      className="w-full bg-transparent text-white font-['Suisse_Intl',sans-serif] font-medium hover:bg-transparent hover:text-white transition-all duration-300 relative group text-lg"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : isAdmin && !adminLoading ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <Shield className="h-4 w-4 text-red-400" />
                      <span>Admin: {adminUser?.firstName || adminUser?.email}</span>
                    </div>
                    <Button
                      onClick={() => {
                        // Clear admin token
                        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
                        setMobileMenuOpen(false)
                        window.location.reload() // Refresh to show login modal
                      }}
                      className="w-full bg-transparent text-white font-['Suisse_Intl',sans-serif] font-medium hover:bg-transparent hover:text-white transition-all duration-300 relative group text-lg"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={() => setAuthModalOpen(true)}
                    className="w-full bg-transparent text-white font-['Suisse_Intl',sans-serif] font-medium hover:bg-transparent hover:text-white transition-all duration-300 relative group text-lg"
                  >
                    <span className="relative flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Sign in
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Search Overlay */}
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center p-4">
                  <div className="flex-1 flex items-center">
                    <Search className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search properties or blog posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-lg"
                      autoFocus
                    />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <select
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value as "properties" | "blog")}
                      className="bg-transparent text-gray-800 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500"
                    >
                      <option value="properties">Properties</option>
                      <option value="blog">Blog</option>
                    </select>
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  )
}
