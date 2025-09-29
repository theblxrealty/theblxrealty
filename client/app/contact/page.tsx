import Image from "next/image"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-30">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <Image
            src="/contact-banner.jpg?height=1080&width=1920"
            alt="Contact our luxury property experts"
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
              <div className="text-white animate-fade-in">
                {/* Main Heading */}
                <h1 
                  className="font-bold mb-6 font-serif animate-slide-up" 
                  style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '60px', fontWeight: '400' }}
                >
                  Get in Touch
                </h1>

                {/* Description */}
                <p 
                  className="text-lg text-white mb-8 font-['Suisse_Intl',sans-serif] animate-slide-up-delay-1"
                >
                  Connect with our luxury property experts for personalized guidance on buying, selling, or investing in
                  Bengaluru's, Dubai's and UK's premium real estate market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Contact Information</h2>
              <p className="text-lg text-gray-500 mb-8 font-['Suisse_Intl',sans-serif]">
                Whether you're seeking your dream luxury property, looking to sell your premium asset, or exploring
                investment opportunities, our expert team is here to provide personalized guidance.
              </p>

              <div className="space-y-8">
                {/* Bangalore Office */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="font-bold text-black text-xl mb-4 font-['Suisse_Intl',sans-serif]">Bengaluru</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Visit Our Premium Office</h4>
                        <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">#0301D 3rd floor, Brigade Twin Towers
Ward No. 38, No. 11/1-4 Pipeline Road HMT, Yeswanthpur, Bengaluru, Karnataka 560022, India</p>
                        <p className="text-gray-500 mt-1 font-['Suisse_Intl',sans-serif]">
                           open for walk-ins and scheduled appointments.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Call Our Experts</h4>
                        <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">+91 97432 64328</p>
                        <p className="text-gray-500 mt-1 font-['Suisse_Intl',sans-serif]">
                          Our property specialists are available Monday through Saturday, 9am to 6pm.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Email Us</h4>
                        <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">Discoverblr@theblxrealty.com</p>
                        <p className="text-gray-500 mt-1 font-['Suisse_Intl',sans-serif]">
                          We aim to respond to all inquiries within 24 hours during business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* London Office */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-black text-xl mb-4 font-['Suisse_Intl',sans-serif]">London, UK</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Visit Our Premium Office</h4>
                        <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">Suite RA01, 195-197 Wood Street, London, E17 3NU, United Kingdom</p>
                        <p className="text-gray-500 mt-1 font-['Suisse_Intl',sans-serif]">
                          open for walk-ins and scheduled appointments.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Call Our Experts</h4>
                        <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">+44 7944450039</p>
                         
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Email Us</h4>
                        <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">Discoveruk@theblxrealty.com</p>
                      
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-lg font-['Suisse_Intl',sans-serif]">Business Hours</h3>
                      <div className="text-gray-500 grid grid-cols-2 gap-x-4 gap-y-1 mt-1 font-['Suisse_Intl',sans-serif]">
                        <span>Monday - Saturday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                         
                        
                        <span>Sunday: Closed</span>
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4 text-black font-['Suisse_Intl',sans-serif]">Connect With Us</h3>
                <div className="flex space-x-4">
                  {/* <a
                    href="#"
                    className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-2xl text-red-600 hover:from-red-200 hover:to-red-300 transition-colors"
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
                  </a> */}
                                    {/* <a
                    href="#"
                    className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-2xl text-red-600 hover:from-red-200 hover:to-red-300 transition-colors"
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
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10A24.12 24.12 0 0 1 2.5 17m19 0a24.12 24.12 0 0 0 0-10A24.12 24.12 0 0 0 21.5 17m-15.5-5a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9Z"></path>
                      <path d="m9.5 15.5 7-4-7-4Z"></path>
                    </svg>
                    <span className="sr-only">Youtube</span>
                  </a> */}
                  <a
                    href="https://www.linkedin.com/company/11-square-realty/?viewAsMember=true"
                    className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-2xl text-red-600 hover:from-red-200 hover:to-red-300 transition-colors"
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
                    href="https://www.instagram.com/theblxrealty/"
                    className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-2xl text-red-600 hover:from-red-200 hover:to-red-300 transition-colors"
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

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-black font-['Suisse_Intl',sans-serif]">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Our Global Offices</h2>
            <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">
              Walk into our refined offices to explore our high-end property portfolio and consult with our experienced professionals face-to-face.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bangalore Office */}
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-black font-['Suisse_Intl',sans-serif]">Bangalore </h3>
                <p className="text-gray-500 font-['Suisse_Intl',sans-serif] text-sm">
                  #0301D 3rd floor, Brigade Twin Towers
Ward No. 38, No. 11/1-4 Pipeline Road HMT, Yeswanthpur, Bengaluru, Karnataka 560022, India
                </p>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <ContactMap 
                  center={{ lat: 13.0303765, lng: 77.542251}}
                  officeName="The BLX RealtyBangalore"
                  address="#0301D 3rd floor, Brigade Twin Towers
Ward No. 38, No. 11/1-4 Pipeline Road HMT, Yeswanthpur, Bengaluru, Karnataka 560022, India"
                  phone="+91 9743264328"
                  email="Discoverblr@theblxrealty.com"
                />
              </div>
              <div className="text-center">
                 
              </div>
            </div>

            {/* London Office */}
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-black font-['Suisse_Intl',sans-serif]">London  </h3>
                <p className="text-gray-500 font-['Suisse_Intl',sans-serif] text-sm">
                 Suite RA01, 195-197 Wood Street, London, E17 3NU, United Kingdom
                </p>
                <br />
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <ContactMap 
                  center={{ lat: 51.585813, lng: -0.001676 }}
                  officeName="The BLX RealtyLondon"
                  address="Suite RA01, 195-197 Wood Street, London, E17 3NU, United Kingdom"
                  phone="+44 7944450039"
                  email="Discoverblr@theblxrealty.com"
                />
              </div>
              <div className="text-center">
                 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-white via-red-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Frequently Asked Questions</h2>
            <p className="text-gray-500 font-['Suisse_Intl',sans-serif]">Find answers to common questions about our luxury properties and services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-black group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>What makes your properties premium?</h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32">
                  <p className="text-gray-500 font-['Suisse_Intl',sans-serif] group-hover:text-gray-700 transition-colors duration-300 pt-3">
                    Our properties are carefully curated based on location, architecture, amenities, and investment
                    potential. We focus on luxury residences, prime commercial spaces, and high-growth investment
                    opportunities in Bangalore's most prestigious areas.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-black group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Do luxury properties cost more to maintain?</h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32">
                  <p className="text-gray-500 font-['Suisse_Intl',sans-serif] group-hover:text-gray-700 transition-colors duration-300 pt-3">
                    While premium properties may have higher maintenance costs, they typically offer superior amenities,
                    better appreciation potential, and enhanced lifestyle benefits. Our team provides detailed cost
                    analysis to help you make informed decisions.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-black group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Can I customize my property search?</h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32">
                  <p className="text-gray-500 font-['Suisse_Intl',sans-serif] group-hover:text-gray-700 transition-colors duration-300 pt-3">
                    We provide personalized property search services based on your specific requirements, budget, and
                    lifestyle preferences. Our experts will curate options that match your exact needs.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-black group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Do you offer virtual property tours?</h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32">
                  <p className="text-gray-500 font-['Suisse_Intl',sans-serif] group-hover:text-gray-700 transition-colors duration-300 pt-3">
                    Yes, we offer comprehensive virtual tours, 3D walkthroughs, and video consultations for all our
                    properties. Schedule a virtual tour to explore properties from the comfort of your home.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-black group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>What financing options do you offer?</h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                  <p className="text-gray-500 font-['Suisse_Intl',sans-serif] group-hover:text-gray-700 transition-colors duration-300 pt-3">
                    We partner with leading banks and financial institutions to offer competitive home loan options, 
                    including special rates for luxury properties. Our team provides end-to-end assistance with 
                    loan applications, documentation, and approval processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
