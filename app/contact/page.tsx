import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#011337] via-[#011337]/90 to-[#011337]/80 text-white py-20 md:py-28 h-[80vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/banner2.jpeg?height=1080&width=1920"
            alt="Contact our luxury property experts"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'Tiempos Headline, serif'}}>
              Get in Touch            </h1>
            <p className="text-lg md:text-xl text-slate-200">
              Connect with our luxury property experts for personalized guidance on buying, selling, or investing in
              Bangalore's premium real estate market.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy-900">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                Whether you're seeking your dream luxury property, looking to sell your premium asset, or exploring
                investment opportunities, our expert team is here to provide personalized guidance.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-navy-100 to-navy-200 p-3 rounded-2xl mr-4">
                    <MapPin className="h-6 w-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-navy-900">Visit Our Premium Office</h3>
                    <p className="text-slate-600">Brigade Road, Bangalore, Karnataka 560001</p>
                    <p className="text-slate-600 mt-1">
                      Our luxury showroom is open for walk-ins and scheduled appointments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-gold-100 to-gold-200 p-3 rounded-2xl mr-4">
                    <Phone className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-navy-900">Call Our Experts</h3>
                    <p className="text-slate-600">+91 98765 43210</p>
                    <p className="text-slate-600 mt-1">
                      Our luxury property specialists are available Monday through Friday, 9am to 6pm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-3 rounded-2xl mr-4">
                    <Mail className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-navy-900">Email Us</h3>
                    <p className="text-slate-600">info@11square.com</p>
                    <p className="text-slate-600 mt-1">
                      We aim to respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-3 rounded-2xl mr-4">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-navy-900">Business Hours</h3>
                    <div className="text-slate-600 grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4 text-navy-900">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gradient-to-br from-navy-100 to-navy-200 p-3 rounded-2xl text-navy-600 hover:from-navy-200 hover:to-navy-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-br from-gold-100 to-gold-200 p-3 rounded-2xl text-gold-600 hover:from-gold-200 hover:to-gold-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-br from-slate-100 to-slate-200 p-3 rounded-2xl text-slate-600 hover:from-slate-200 hover:to-slate-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-3 rounded-2xl text-emerald-600 hover:from-emerald-200 hover:to-emerald-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold mb-6 text-navy-900">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-slate-100 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-navy-900">Find Us</h2>
            <p className="text-slate-600">
              Visit our premium office to explore our luxury property portfolio and speak with our expert team in
              person.
            </p>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <ContactMap />
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600">
              Brigade Road, Bangalore, Karnataka 560001 | Premium parking available on-site
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-navy-900">Frequently Asked Questions</h2>
            <p className="text-slate-600">Find answers to common questions about our luxury properties and services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-lg mb-2 text-navy-900">What makes your properties premium?</h3>
                <p className="text-slate-600">
                  Our properties are carefully curated based on location, architecture, amenities, and investment
                  potential. We focus on luxury residences, prime commercial spaces, and high-growth investment
                  opportunities in Bangalore's most prestigious areas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-lg mb-2 text-navy-900">Do luxury properties cost more to maintain?</h3>
                <p className="text-slate-600">
                  While premium properties may have higher maintenance costs, they typically offer superior amenities,
                  better appreciation potential, and enhanced lifestyle benefits. Our team provides detailed cost
                  analysis to help you make informed decisions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-lg mb-2 text-navy-900">Can I customize my property search?</h3>
                <p className="text-slate-600">
                  We provide personalized property search services based on your specific requirements, budget, and
                  lifestyle preferences. Our experts will curate options that match your exact needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-lg mb-2 text-navy-900">Do you offer virtual property tours?</h3>
                <p className="text-slate-600">
                  Yes, we offer comprehensive virtual tours, 3D walkthroughs, and video consultations for all our
                  properties. Schedule a virtual tour to explore properties from the comfort of your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
