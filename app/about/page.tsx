import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, Shield, Target, CheckCircle2, Building, TrendingUp, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import TeamMember from "@/components/team-member"

// Sample team data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 15 years of experience in luxury real estate and property development, Sarah founded 11Square to transform premium property transactions in Bangalore.",
  },
  {
    name: "Michael Chen",
    role: "Chief Investment Officer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael specializes in commercial real estate investments and has successfully managed property portfolios worth over ₹500 crores across Bangalore.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Luxury Sales",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily leads our luxury property division and has facilitated transactions for some of Bangalore's most prestigious residential and commercial properties.",
  },
  {
    name: "David Wilson",
    role: "Director of Client Relations",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David ensures exceptional client experiences and has built lasting relationships with high-net-worth individuals and institutional investors.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <Image
            src="/banner1.jpeg?height=1080&width=1920"
            alt="Luxury building with premium architecture"
            fill
            className="object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-white">
                {/* Main Heading */}
                <h1 className="font-bold mb-6 font-serif" style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '50px', fontWeight: '400' }}>
                  Building a Premium Future
                  One Property at a Time
                </h1>

                {/* Description */}
                <p className="text-lg text-white mb-8 font-['Suisse_Intl',sans-serif]">
                  At 11Square, we're committed to creating exceptional real estate experiences that connect discerning
                  clients with Bangalore's most prestigious properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>From Vision to Reality</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                11Square was founded in 2015 with a singular vision: to redefine luxury real estate in Bangalore by
                creating a platform that connects discerning buyers and sellers with the city's most exceptional
                properties.
              </p>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Our founder, Sarah Johnson, recognized that Bangalore's rapidly growing luxury market needed a
                sophisticated approach that combined deep local knowledge with international standards of service and
                professionalism.
              </p>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Today, 11Square has grown into Bangalore's premier luxury real estate platform, with a portfolio
                spanning premium residential properties, commercial spaces, and investment opportunities across the
                city's most prestigious locations.
              </p>
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[600px] w-full">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Luxury property portfolio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Leading the Luxury Market</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                As Bangalore's premier luxury real estate platform, we've established ourselves as the trusted partner
                for high-net-worth individuals, institutional investors, and discerning property buyers and sellers.
              </p>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Our deep understanding of the local market dynamics, combined with international standards of service,
                has positioned us as the go-to destination for premium property transactions in the city.
              </p>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                With over ₹500 crores in successful transactions and a portfolio spanning the city's most prestigious
                locations, we continue to set new benchmarks in luxury real estate excellence.
              </p>
              <Link href="/properties">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Technology Meets Luxury</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                We leverage cutting-edge technology to enhance the luxury real estate experience, from virtual property
                tours to advanced market analytics and seamless transaction management.
              </p>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Our proprietary platform combines AI-powered property matching, blockchain-secured transactions, and
                immersive 3D property visualizations to deliver an unparalleled service experience.
              </p>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                By embracing innovation while maintaining the personal touch that luxury clients expect, we're
                revolutionizing how premium properties are bought, sold, and managed in Bangalore.
              </p>
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium">
                  Experience Innovation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[600px] w-full">
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

      {/* Global Network */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Global network and partnerships"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-gold-100 to-gold-200 px-3 py-1 text-sm text-gold-800 mb-4">
                Global Network
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">Connecting Global Opportunities</h2>
              <p className="text-slate-600 mb-6">
                Our extensive network spans international markets, connecting Bangalore's luxury real estate with
                global investors and high-net-worth individuals seeking premium opportunities in India's tech capital.
              </p>
              <p className="text-slate-600 mb-6">
                Through strategic partnerships with leading international real estate firms and investment banks, we
                provide our clients with access to exclusive global opportunities while showcasing Bangalore's finest
                properties to the world.
              </p>
              <p className="text-slate-600 mb-8">
                This global perspective, combined with deep local expertise, enables us to deliver exceptional value
                to both domestic and international clients seeking premium real estate opportunities in Bangalore.
              </p>
              <Link href="/contact">
                <Button variant="premium">
                  Join Our Network <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>What Drives Us</h2>
            <p className="text-lg text-gray-500 font-['Suisse_Intl',sans-serif]">
              Our core values guide every decision we make, from the properties we showcase to the relationships we
              build with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black font-['Suisse_Intl',sans-serif]">Trust & Integrity</h3>
                <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">
                  We prioritize transparency and honesty in every transaction, ensuring our clients make informed
                  decisions with complete confidence.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black font-['Suisse_Intl',sans-serif]">Excellence</h3>
                <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">
                  We never compromise on quality, ensuring that every property we represent meets the highest standards of
                  luxury and sophistication.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black font-['Suisse_Intl',sans-serif]">Client-Centric</h3>
                <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">
                  We build lasting relationships by understanding our clients' unique needs and delivering personalized
                  solutions that exceed expectations.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black font-['Suisse_Intl',sans-serif]">Innovation</h3>
                <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">
                  We continuously embrace new technologies and approaches to enhance the property buying and selling
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-[#011337]/10 to-[#011337]/20 p-6 rounded-2xl border border-[#011337]/20">
              <CheckCircle2 className="h-6 w-6 text-[#011337] mb-4" />
              <h3 className="text-lg font-bold mb-2 text-[#011337]">Premium Curation</h3>
                  <p className="text-slate-600 text-sm">
                    We carefully select only the finest properties that meet our strict criteria for luxury, location,
                    and investment potential.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-2xl border border-gold-200">
                  <CheckCircle2 className="h-6 w-6 text-gold-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-navy-900">Market Expertise</h3>
                  <p className="text-slate-600 text-sm">
                    Our team provides deep insights into Bangalore's luxury market trends, pricing, and investment
                    opportunities.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                  <CheckCircle2 className="h-6 w-6 text-slate-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-navy-900">Legal Assurance</h3>
                  <p className="text-slate-600 text-sm">
                    We ensure complete legal verification and documentation support for secure and hassle-free
                    transactions.
                  </p>
                </div>

                            <div className="bg-gradient-to-br from-[#011337]/10 to-[#011337]/20 p-6 rounded-2xl border border-[#011337]/20">
              <CheckCircle2 className="h-6 w-6 text-[#011337] mb-4" />
              <h3 className="text-lg font-bold mb-2 text-[#011337]">Personalized Service</h3>
                  <p className="text-slate-600 text-sm">
                    Our dedicated relationship managers provide white-glove service tailored to each client's unique
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-navy-100 to-navy-200 px-3 py-1 text-sm text-navy-800 mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">Luxury Real Estate by Design</h2>
              <p className="text-slate-600 mb-6">
                At 11Square, luxury isn't just about value—it's about creating exceptional experiences that reflect our
                clients' aspirations and lifestyle goals.
              </p>
              <p className="text-slate-600 mb-6">
                Our comprehensive approach considers every aspect of the property transaction, from initial consultation
                and market analysis to final handover and after-sales support.
              </p>
              <p className="text-slate-600 mb-6">
                The result is a seamless, sophisticated experience that not only meets but exceeds the expectations of
                discerning property buyers and sellers in Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Join Us in Building a Premium Future</h2>
            <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
              Whether you're seeking your dream luxury property or looking to maximize the value of your premium asset,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/properties">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium"
                >
                  Explore Our Properties
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
