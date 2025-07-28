import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, Shield, Target, CheckCircle2 } from "lucide-react"
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
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury building with premium architecture"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Building a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Premium Future
              </span>
              , One Property at a Time
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8">
              At 11Square, we're committed to creating exceptional real estate experiences that connect discerning
              clients with Bangalore's most prestigious properties.
            </p>
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
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white">
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

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-lg bg-gradient-to-r from-navy-100 to-navy-200 px-3 py-1 text-sm text-navy-800 mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">What Drives Us</h2>
            <p className="text-slate-600">
              Our core values guide every decision we make, from the properties we showcase to the relationships we
              build with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="bg-gradient-to-br from-navy-100 to-navy-200 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-900">Trust & Integrity</h3>
              <p className="text-slate-600">
                We prioritize transparency and honesty in every transaction, ensuring our clients make informed
                decisions with complete confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="bg-gradient-to-br from-gold-100 to-gold-200 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-900">Excellence</h3>
              <p className="text-slate-600">
                We never compromise on quality, ensuring that every property we represent meets the highest standards of
                luxury and sophistication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-900">Client-Centric</h3>
              <p className="text-slate-600">
                We build lasting relationships by understanding our clients' unique needs and delivering personalized
                solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-900">Innovation</h3>
              <p className="text-slate-600">
                We continuously embrace new technologies and approaches to enhance the property buying and selling
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-navy-50 to-navy-100 p-6 rounded-2xl border border-navy-200">
                  <CheckCircle2 className="h-6 w-6 text-navy-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-navy-900">Premium Curation</h3>
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

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-navy-900">Personalized Service</h3>
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
                At 11Square, luxury isn't just about price—it's about creating exceptional experiences that reflect our
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
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-lg bg-gradient-to-r from-navy-100 to-navy-200 px-3 py-1 text-sm text-navy-800 mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">Meet the Experts</h2>
            <p className="text-slate-600">
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building a Premium Future</h2>
            <p className="text-lg text-slate-200 mb-8">
              Whether you're seeking your dream luxury property or looking to maximize the value of your premium asset,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/properties">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
                >
                  Explore Our Properties
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
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
