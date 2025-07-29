import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Award, Shield, TrendingUp, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeaturedProperties from "@/components/featured-properties"
import BlogPreview from "@/components/blog-preview"
import ContactForm from "@/components/contact-form"
import ThemeToggle from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <main>
      <HeroSection />


      {/* Property Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/properties?type=residential" className="group">
              <div className="bg-gradient-to-br from-navy-50 to-navy-100 dark:from-navy-900 dark:to-navy-800 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-navy-200 dark:border-navy-700">
                <div className="bg-gradient-to-br from-navy-600 to-navy-700 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:from-navy-700 group-hover:to-navy-800 transition-all">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">Luxury Villas</h3>
              </div>
            </Link>

            <Link href="/properties?type=commercial" className="group">
              <div className="bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-900 dark:to-gold-800 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gold-200 dark:border-gold-700">
                <div className="bg-gradient-to-br from-gold-600 to-gold-700 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:from-gold-700 group-hover:to-gold-800 transition-all">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">Apartment flats</h3>
              </div>
            </Link>

            <Link href="/properties?type=land" className="group">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200 dark:border-slate-600">
                <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:from-slate-700 group-hover:to-slate-800 transition-all">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">Fram Lands</h3>
              </div>
            </Link>

            <Link href="/properties?type=investment" className="group">
              <div className="bg-gradient-to-br from-navy-50 to-navy-100 dark:from-navy-900 dark:to-navy-800 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-navy-200 dark:border-navy-700">
                <div className="bg-gradient-to-br from-navy-600 to-navy-700 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:from-navy-700 group-hover:to-navy-800 transition-all">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">Properties</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-gradient-to-r from-navy-100 to-navy-200 px-3 py-1 text-sm text-navy-800 mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">From Vision to Reality</h2>
              <p className="text-slate-600 mb-6">
                11Square was founded in 2015 with a singular vision: to redefine luxury real estate in Bangalore by
                creating a platform that connects discerning buyers and sellers with the city's most exceptional
                properties.
              </p>
              <p className="text-slate-600 mb-6">
                Our founder, Sarah Johnson, recognized that Bangalore's rapidly growing luxury market needed a
                sophisticated approach that combined deep local knowledge with international standards of service and
                professionalism.
              </p>
              <p className="text-slate-600 mb-8">
                Today, 11Square has grown into Bangalore's premier luxury real estate platform, with a portfolio
                spanning premium residential properties, commercial spaces, and investment opportunities across the
                city's most prestigious locations.
              </p>
              <Link href="/contact">
                <Button variant="premium">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="11Square founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Leadership */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Luxury property portfolio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-gold-100 to-gold-200 px-3 py-1 text-sm text-gold-800 mb-4">
                Market Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">Leading the Luxury Market</h2>
              <p className="text-slate-600 mb-6">
                As Bangalore's premier luxury real estate platform, we've established ourselves as the trusted partner
                for high-net-worth individuals, institutional investors, and discerning property buyers and sellers.
              </p>
              <p className="text-slate-600 mb-6">
                Our deep understanding of the local market dynamics, combined with international standards of service,
                has positioned us as the go-to destination for premium property transactions in the city.
              </p>
              <p className="text-slate-600 mb-8">
                With over ₹500 crores in successful transactions and a portfolio spanning the city's most prestigious
                locations, we continue to set new benchmarks in luxury real estate excellence.
              </p>
              <Link href="/properties">
                <Button variant="premium">
                  Explore Properties <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-gradient-to-r from-navy-100 to-navy-200 px-3 py-1 text-sm text-navy-800 mb-4">
                Innovation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">Technology Meets Luxury</h2>
              <p className="text-slate-600 mb-6">
                We leverage cutting-edge technology to enhance the luxury real estate experience, from virtual property
                tours to advanced market analytics and seamless transaction management.
              </p>
              <p className="text-slate-600 mb-6">
                Our proprietary platform combines AI-powered property matching, blockchain-secured transactions, and
                immersive 3D property visualizations to deliver an unparalleled service experience.
              </p>
              <p className="text-slate-600 mb-8">
                By embracing innovation while maintaining the personal touch that luxury clients expect, we're
                revolutionizing how premium properties are bought, sold, and managed in Bangalore.
              </p>
              <Link href="/contact">
                <Button variant="premium">
                  Experience Innovation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Technology and innovation in real estate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      

      {/* Featured Properties */}
      {/* <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">Featured Properties</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Discover exceptional properties for sale across Bangalore - from luxury residences to prime commercial
                investments.
              </p>
            </div>
            <Link
              href="/properties"
              className="text-navy-600 dark:text-gold-400 font-medium flex items-center hover:text-navy-700 dark:hover:text-gold-300 transition-colors"
            >
              View All Properties <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <FeaturedProperties />
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Hear from discerning property buyers and sellers who achieved their real estate goals with 11Square.
            </p>
          </div>

          {/* TestimonialSlider component was removed from imports, so this section will be empty */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">Why Choose 11Square</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Bangalore's premier luxury property marketplace connecting discerning buyers and sellers across
              residential, commercial, and investment properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-900 dark:to-navy-800 p-4 rounded-2xl mb-6">
                <Building className="h-8 w-8 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-900 dark:text-white">Premium Property Portfolio</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Curated collection of luxury apartments, villas, commercial spaces, and investment properties in
                Bangalore's most prestigious locations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-900 dark:to-gold-800 p-4 rounded-2xl mb-6">
                <Award className="h-8 w-8 text-gold-600 dark:text-gold-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-900 dark:text-white">Expert Market Insights</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Professional property valuations, market analysis, and investment guidance from certified real estate
                experts and market specialists.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 p-4 rounded-2xl mb-6">
                <Shield className="h-8 w-8 text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-900 dark:text-white">Complete Transaction Security</h3>
              <p className="text-slate-600 dark:text-slate-300">
                End-to-end support with legal verification, documentation, financing assistance, and secure transaction
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">Ready to Buy or Sell?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Whether you're seeking a luxury property or looking to sell your premium asset, our expert team provides
                personalized guidance throughout your real estate journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gold-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-navy-900 dark:text-white">Visit Our Premium Office</h3>
                    <p className="text-slate-600 dark:text-slate-300">Brigade Road, Bangalore, Karnataka 560001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gold-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-navy-900 dark:text-white">Call Our Experts</h3>
                    <p className="text-slate-600 dark:text-slate-300">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="premium"
                >
                  List Your Property
                </Button>
                <Button
                  size="lg"
                  variant="outlineNavy"
                >
                  Get Property Valuation
                </Button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
