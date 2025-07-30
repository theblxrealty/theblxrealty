import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Award, Shield, TrendingUp, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeaturedProperties from "@/components/featured-properties"

import ContactForm from "@/components/contact-form"
import ThemeToggle from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <main>
      <HeroSection />


      {/* Property Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-8 pt-4 px-6 scrollbar-hide">
              {/* Luxury Villas */}
              <Link href="/properties?type=luxury-villas" className="group flex-shrink-0">
                <div className="w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src="/property_type/img1.webp"
                      alt="Luxury Villas"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#011337]">Luxury Villas</h3>
                  </div>
                </div>
              </Link>

              {/* Flats */}
              <Link href="/properties?type=flats" className="group flex-shrink-0">
                <div className="w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src="/property_type/flats.webp"
                      alt="Flats"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#011337]">Flats</h3>
                  </div>
                </div>
              </Link>

              {/* New Building */}
              <Link href="/properties?type=new-building" className="group flex-shrink-0">
                <div className="w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src="/property_type/house.webp"
                      alt="New Building"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#011337]">New Building</h3>
                  </div>
                </div>
              </Link>

              {/* Farm House */}
              <Link href="/properties?type=farm-house" className="group flex-shrink-0">
                <div className="w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src="/property_type/farmhouse.webp"
                      alt="Farm House"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#011337]">Farm House</h3>
                  </div>
                </div>
              </Link>

              {/* Sites */}
              <Link href="/properties?type=sites" className="group flex-shrink-0">
                <div className="w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src="/property_type/farm.webp"
                      alt="Sites"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#011337]">Sites</h3>
                  </div>
                </div>
              </Link>

              {/* Commercial */}
              <Link href="/properties?type=commercial" className="group flex-shrink-0">
                <div className="w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src="/property_type/property.webp"
                      alt="Commercial Properties"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#011337]">Commercial</h3>
                  </div>
                </div>
              </Link>

              {/* Investment */}
              <Link href="/properties?type=investment" className="group flex-shrink-0">
                <div className="w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src="/property_type/img2.webp"
                      alt="Investment Properties"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#011337]">Investment</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>



            {/* Dream Properties Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/image1.webp?height=600&width=600"
                  alt="Luxury interior with chandelier"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif'}}>Dream properties</h2>
              <p className="text-lg text-black mb-8">
                We specialise in selling and letting a wide range of homes, from modern London apartments to historical country houses, farms, and international pieds-à-terre.
              </p>
              <div className="space-y-6">
                <Link href="/properties" className="group cursor-pointer">
                  <div className="text-black font-['Suisse_Intl',sans-serif]" style={{fontSize: '1.2rem', fontWeight: 600, lineHeight: 1}}>Sell with us</div>
                  <div style={{width: 'fit-content', height: '2px', backgroundColor: '#ef4444', borderRadius: '1px'}}></div>
                </Link>
                <Link href="/properties" className="group cursor-pointer">
                  <div className="text-black font-['Suisse_Intl',sans-serif]" style={{fontSize: '1.2rem', fontWeight: 600, lineHeight: 1}}>Let with us</div>
                  <div style={{width: 'fit-content', height: '2px', backgroundColor: '#ef4444', borderRadius: '1px'}}></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're here for you Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif'}}>We're here for you</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking to buy, sell or rent a property, as your next home or an investment, we're committed to finding your perfect match.
              </p>
              <div className="mb-8">
                <div className="flex items-start">
                  <blockquote className="text-2xl font-bold text-black mb-6 leading-tight flex-1" style={{fontFamily: 'Tiempos Headline, serif', lineHeight: 1.2}}>
                    "This was by far and away the best experience I have had with an estate agency. Lovely people and above all supremely professional with both me as a seller and the buyers."
                  </blockquote>
                </div>
                <div className="mt-6">
                  <div className="font-bold text-black text-lg">Lorraine</div>
                  <div className="text-gray-600">11Square office</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] w-full">
              <Image
                src="/image2.webp?height=600&width=600"
                alt="Woman with teacup"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The View from Knight Frank Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/image3.webp?height=600&width=600"
                  alt="Woman looking through window"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif'}}>The View from 11Square Realty</h2>
              <p className="text-lg text-black mb-8">
                Dream property inspiration, the latest on luxury trends, and insights into the best areas to live in the Bangalore.
              </p>
              <button className="border border-red-500 text-red-500 px-8 py-3 rounded hover:bg-red-500 hover:text-white transition-colors font-semibold">
                Visit The View
              </button>
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
      {/* <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Hear from discerning property buyers and sellers who achieved their real estate goals with 11Square.
            </p>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#011337] dark:text-white mb-4">Why Choose 11Square</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Bangalore's premier luxury property marketplace connecting discerning buyers and sellers across
              residential, commercial, and investment properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="bg-gradient-to-br from-[#011337]/20 to-[#011337]/30 dark:from-[#011337] dark:to-[#011337]/80 p-4 rounded-2xl mb-6">
                <Building className="h-8 w-8 text-[#011337] dark:text-[#011337]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#011337] dark:text-white">Premium Property Portfolio</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Curated collection of luxury apartments, villas, commercial spaces, and investment properties in
                Bangalore's most prestigious locations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                          <div className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 p-4 rounded-2xl mb-6">
              <Award className="h-8 w-8 text-red-600 dark:text-red-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#011337] dark:text-white mb-4">Ready to Buy or Sell?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Whether you're seeking a luxury property or looking to sell your premium asset, our expert team provides
                personalized guidance throughout your real estate journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-[#011337] dark:text-white">Visit Our Premium Office</h3>
                    <p className="text-slate-600 dark:text-slate-300">Brigade Road, Bangalore, Karnataka 560001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-[#011337] dark:text-white">Call Our Experts</h3>
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
                  variant="premium"
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
