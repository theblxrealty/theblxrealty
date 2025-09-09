import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Award, Shield, TrendingUp, MapPin, Phone,Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeaturedProperties from "@/components/featured-properties"
import TeamMember from "@/components/team-member"

import ContactForm from "@/components/contact-form"
import ThemeToggle from "@/components/theme-toggle"
import Email from "next-auth/providers/email"

// Sample team data
const teamMembers = [
  {
    name: "Nishchith K U",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 15 years of experience in luxury real estate and property development, Nishchith founded 11Square to transform premium property transactions in Bangalore.",
  },
  {
    name: "Michael Chen",
    role: "Chief Investment Officer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael specializes in commercial real estate investments and has successfully managed property portfolios worth over ₹500 crores across Bangalore.",
  },
  // { 
  //   name: "Emily Rodriguez",
  //   role: "Head of Luxury Sales",
  //   image: "/placeholder.svg?height=400&width=400",
  //   bio: "Emily leads our luxury property division and has facilitated transactions for some of Bangalore's most prestigious residential and commercial properties.",
  // },
  // {
  //   name: "David Wilson",
  //   role: "Director of Client Relations",
  //   image: "/placeholder.svg?height=400&width=400",
  //   bio: "David ensures exceptional client experiences and has built lasting relationships with high-net-worth individuals and institutional investors.",
  // },
]

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* Property Valuation Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>How much is your property worth?</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                We will provide a reliable estimate of your property's value, based on the latest market insights.
              </p>
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium">
                  Book your free valuation
                </Button>
              </Link>
            </div>
            <div className="relative h-[250px] w-full bg-gray-50 overflow-hidden">
              <Image
                src="/property-value.jpg"
                alt="Luxury property interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dream Properties Section */}
      <section className="py-4 md:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/image1.jpg?height=2560&width=2560"
                  alt="Luxury interior with chandelier"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Dream properties</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Your vision of a perfect home is our blueprint for action. 11 Square Realty is dedicated to turning aspirations into addresses, with passion, precision, and personalized care.
              </p>
              <div className="space-y-8">
                <Link href="/contact" className="group cursor-pointer block">
                  <div className="text-black font-['Suisse_Intl',sans-serif] relative inline-block" style={{fontSize: '1.2rem', fontWeight: 550, lineHeight: 1}}>
                    Sell with us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </Link>
                <Link href="/properties" className="group cursor-pointer block">
                  <div className="text-black font-['Suisse_Intl',sans-serif] relative inline-block" style={{fontSize: '1.2rem', fontWeight: 550, lineHeight: 1}}>
                    Buy with us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're here for you Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>We're here for you</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Whether you're looking to buy or sell a property, as your next home or an investment, we're committed to finding your perfect match.
              </p>
              <div className="mb-8">
                <div className="flex items-start">
                  <blockquote className="text-3xl font-bold text-black mb-6 leading-tight flex-1" style={{fontFamily: 'Tiempos Headline, serif', lineHeight: 1.2, fontWeight: '500'}}>
                    "At 11 Square Realty, every property is a promise and every client a partner. We blend expertise with empathy to create seamless transitions from dreams to doorsteps."
                  </blockquote>
                </div>
                <div className="mt-6">
                  <div className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Lorraine</div>
                  <div className="text-gray-600">11Square</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] w-full">
              <Image
                src="/image2.webp?height=2560&width=2560"
                alt="Woman with teacup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The View from Knight Frank Section */}
      {/* <section className="py-16 md:py-24 bg-white justify-between">
        <div className="container mx-auto px-8 sm:px-6 lg:px-8 justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/image3.webp?height=2560&width=2560"
                  alt="Woman looking through window"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>The View from 11Square Realty</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Dream property inspiration, the latest on luxury trends, and insights into the best areas to live in the Bangalore.
              </p>
              <button className="border border-red-500 text-red-500 px-8 py-3 rounded hover:bg-red-500 hover:text-white transition-colors font-semibold">
                Visit The View
              </button>
            </div>
          </div>
        </div>
      </section> */}


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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Why Choose 11Square</h2>
            <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif] max-w-3xl mx-auto">
              Bengaluru's premier luxury property marketplace connecting discerning buyers and sellers across
              residential, commercial, and investment properties. Where 11 Square has become NRI's favorite property search hub helping accross borders.

            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <Link href="/portfolio" className="relative h-80 rounded-lg shadow-lg overflow-hidden group block">
        <Image
          src="/wcu_1.jpg"
          alt="Premium Property Portfolio"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011337]/90 via-[#011337]/50 to-transparent transition-opacity duration-300 group-hover:from-[#011337]/95 group-hover:via-[#011337]/60"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-3 text-white font-['Suisse_Intl',sans-serif]">
            Premium Property Portfolio, Buy Ready and Off-Plan Properties
          </h3>
          <p className="text-white/90 font-['Suisse_Intl',sans-serif] leading-relaxed">
            Curated collection of luxury apartments, villas, commercial spaces, and investment properties in
            Bengaluru's most prestigious locations.
          </p>
        </div>
      </Link>

      {/* Card 2 */}
      <Link href="/insights" className="relative h-80 rounded-lg shadow-lg overflow-hidden group block">
        <Image
          src="/wcu_2.jpg"
          alt="Expert Market Insights"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011337]/90 via-[#011337]/50 to-transparent transition-opacity duration-300 group-hover:from-[#011337]/95 group-hover:via-[#011337]/60"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-3 text-white font-['Suisse_Intl',sans-serif]">
            Expert Market Insights & Investment Advisory
          </h3>
          <p className="text-white/90 font-['Suisse_Intl',sans-serif] leading-relaxed">
            Professional property valuations, market analysis, and investment guidance from certified real estate
            experts and market specialists.
          </p>
        </div>
      </Link>

      {/* Card 3 */}
      <Link href="/transaction-security" className="relative h-80 rounded-lg shadow-lg overflow-hidden group block">
        <Image
          src="/wcu_3.jpg"
          alt="Complete Transaction Security"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011337]/90 via-[#011337]/50 to-transparent transition-opacity duration-300 group-hover:from-[#011337]/95 group-hover:via-[#011337]/60"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-3 text-white font-['Suisse_Intl',sans-serif]">
            Complete Transaction Security
          </h3>
          <p className="text-white/90 font-['Suisse_Intl',sans-serif] leading-relaxed">
            End-to-end support with legal verification, documentation, financing assistance, and secure transaction
            management.
          </p>
        </div>
      </Link>

      {/* Card 4 */}
      <Link href="/financing" className="relative h-80 rounded-lg shadow-lg overflow-hidden group block">
        <Image
          src="/wcu_4.jpg"
          alt="Mortgage & Financing Assistance"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011337]/90 via-[#011337]/50 to-transparent transition-opacity duration-300 group-hover:from-[#011337]/95 group-hover:via-[#011337]/60"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-3 text-white font-['Suisse_Intl',sans-serif]">
            Mortgage & Financing Assistance
          </h3>
          <p className="text-white/90 font-['Suisse_Intl',sans-serif] leading-relaxed">
            We simplify the process by connecting you with top-tier financial institutions offering competitive rates
            and flexible terms. Our goal is to ensure you make informed decisions that align with your investment
            strategy.
          </p>
        </div>
      </Link>
    </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Meet the Experts</h2>
            <p className="text-lg text-gray-500 font-['Suisse_Intl',sans-serif]">
              Our diverse team of professionals brings together expertise in luxury real estate, investment analysis,
              and client relations to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Our Success Stories</h2>
            <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif] max-w-3xl mx-auto">
              Hear from discerning property buyers and sellers who achieved their real estate goals with 11Square.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/pfp1.jpeg"
                    alt="Sarah Mitchell"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 font-['Suisse_Intl',sans-serif] leading-relaxed">
                  "This was by far and away the best experience I have had with an estate agency. Lovely people and above all supremely professional."
                </blockquote>
              </div>
              <div>
                <div className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Sarah Mitchell</div>
                <div className="text-gray-500 text-sm">Luxury Villa Buyer</div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/pfp2.jpeg"
                    alt="Michael Chen"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 font-['Suisse_Intl',sans-serif] leading-relaxed">
                  "11Square helped me sell my premium property in record time with excellent returns. Their market knowledge is unmatched."
                </blockquote>
              </div>
              <div>
                <div className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Michael Chen</div>
                <div className="text-gray-500 text-sm">Property Seller</div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/pfp3.jpeg"
                    alt="Priya Sharma"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 font-['Suisse_Intl',sans-serif] leading-relaxed">
                  "Found my dream home through 11Square. Their personalized approach and attention to detail made all the difference."
                </blockquote>
              </div>
              <div>
                <div className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Priya Sharma</div>
                <div className="text-gray-500 text-sm">Apartment Buyer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Ready to Buy or Sell?</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Whether you're seeking a luxury property or looking to sell your premium asset, our expert team provides
                personalized guidance throughout your real estate journey.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Visit Our Premium Office</h3>
                    <p className="text-gray-500 font-['Suisse_Intl',sans-serif]"> 59, 10th A Cross Road, West of Chord Road, Bangalore, Karnataka 560086</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Call Our Experts</h3>
                    <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">+91 9743264328</p>
                  </div>
              </div>

              <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Email</h3>
                    <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">discover@11squarerealty.com</p>
                  </div>
              </div>

              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
