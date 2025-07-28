import Link from "next/link"
import { Crown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="p-2 rounded-xl bg-gold-500/20 backdrop-blur-sm">
                <Crown className="h-6 w-6 text-gold-400" />
              </div>
              <span className="ml-3 text-xl font-bold">11Square</span>
              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gold-500/20 text-gold-200">PREMIUM</span>
            </Link>
            <p className="text-slate-300 mb-6">
              Your trusted partner for buying, selling, and investing in premium properties across Bangalore's most
              prestigious locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-300 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-slate-300 hover:text-gold-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-gold-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300">Brigade Road, Bangalore, Karnataka 560001</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300">+91 98765 43210</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300">info@11square.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Newsletter</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for exclusive property updates and luxury market insights in Bangalore.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-navy-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
              />
              <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 11Square. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
