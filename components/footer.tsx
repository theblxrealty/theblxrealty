import Link from "next/link"
import { Crown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#011337] via-[#011337]/90 to-[#011337]/80 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Section 1: Company Info & Social Links */}
          <div className="lg:w-1/3">
            <Link href="/" className="flex items-center mb-6">
              <div className="p-2 rounded-xl bg-red-500/20 backdrop-blur-sm">
                <Crown className="h-6 w-6 text-red-400" />
              </div>
              <span className="ml-3 text-xl font-bold">11Square</span>
              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-200">PREMIUM</span>
            </Link>
            <p className="text-slate-300 mb-6">
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
            <h3 className="text-lg font-bold mb-6 text-red-400">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-300 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-slate-300 hover:text-red-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-slate-300 hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Us */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-bold mb-6 text-red-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300">Brigade Road, Bangalore, Karnataka 560001</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300">+91 98765 43210</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300">info@11square.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 11Square. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-slate-400 hover:text-red-400 text-sm transition-colors">
              Terms of Service
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}
