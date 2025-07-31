import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#011337] via-[#011337]/95 to-[#011337]/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Section 1: Company Info & Social Links */}
          <div className="lg:w-1/3">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-12 h-12 overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="11Square Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-bold text-white font-['Suisse_Intl',sans-serif]">11Square</span>
            </Link>
            <p className="text-slate-300 mb-6 font-['Suisse_Intl',sans-serif]">
              Your trusted partner for buying, selling, and investing in premium properties across Bangalore's most
              prestigious locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:w-1/3 flex flex-col items-center text-center">
            <h3 className="text-lg font-bold mb-6 text-red-400 font-['Suisse_Intl',sans-serif]">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-300 hover:text-red-400 transition-colors font-['Suisse_Intl',sans-serif]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-slate-300 hover:text-red-400 transition-colors font-['Suisse_Intl',sans-serif]">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-red-400 transition-colors font-['Suisse_Intl',sans-serif]">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-slate-300 hover:text-red-400 transition-colors font-['Suisse_Intl',sans-serif]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Us */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-bold mb-6 text-red-400 font-['Suisse_Intl',sans-serif]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 font-['Suisse_Intl',sans-serif]">Brigade Road, Bangalore, Karnataka 560001</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 font-['Suisse_Intl',sans-serif]">+91 98765 43210</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 font-['Suisse_Intl',sans-serif]">info@11square.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0 font-['Suisse_Intl',sans-serif]">
            &copy; {new Date().getFullYear()} 11Square. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-slate-400 hover:text-red-400 text-sm transition-colors font-['Suisse_Intl',sans-serif]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
