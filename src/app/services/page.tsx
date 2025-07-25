export default function Services() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">11</span>
          </div>
          <span className="text-white font-semibold">11square</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-300 hover:text-blue-400">Home</a>
          <a href="/about" className="text-gray-300 hover:text-blue-400">About Us</a>
          <a href="/properties" className="text-gray-300 hover:text-blue-400">Properties</a>
          <a href="/services" className="text-white hover:text-blue-400">Services</a>
        </nav>
        <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Elevate Your Real Estate Experience</h1>
          <p className="text-gray-300 mb-12 text-lg">
            Welcome to 11square, where your real estate aspirations meet our unwavering dedication. 
            Explore our comprehensive range of services, each crafted to cater to your unique needs and dreams.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-300">Discover our comprehensive suite of real estate services designed to meet all your property needs across India.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Valuation Mastery",
                description: "Discover the true worth of your property with our expert valuation services.",
                features: ["Accurate Market Analysis", "Professional Appraisal", "Investment Guidance", "Market Trends Report"]
              },
              {
                icon: "📈",
                title: "Strategic Marketing",
                description: "Selling a property requires more than just a 'For Sale' sign. Our strategic marketing approach ensures maximum visibility.",
                features: ["Digital Marketing", "Professional Photography", "Social Media Promotion", "Targeted Advertising"]
              },
              {
                icon: "🤝",
                title: "Negotiation Wizardry",
                description: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
                features: ["Expert Negotiation", "Deal Structuring", "Terms Optimization", "Win-Win Solutions"]
              },
              {
                icon: "✅",
                title: "Closing Success",
                description: "A successful closing is the culmination of a well-executed real estate transaction.",
                features: ["Legal Documentation", "Title Verification", "Smooth Transactions", "Post-Sale Support"]
              },
              {
                icon: "🏢",
                title: "Property Management",
                description: "Owning a property should be rewarding, not stressful. Our property management services take care of the details.",
                features: ["Tenant Management", "Maintenance Services", "Rent Collection", "Property Inspection"]
              },
              {
                icon: "🏠",
                title: "Home Buying Assistance",
                description: "Finding your dream home in India's diverse real estate market made simple and stress-free.",
                features: ["Property Search", "Market Research", "Financing Assistance", "Legal Support"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-blue-500 transition-colors">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-300">A streamlined approach to delivering exceptional real estate services</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "We begin with understanding your unique needs and goals."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "We create a customized plan tailored to your specific requirements."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our expert team executes the plan with precision and care."
              },
              {
                step: "04",
                title: "Success & Support",
                description: "We ensure successful completion and provide ongoing support."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose 11square?</h2>
            <p className="text-gray-300">Experience the difference with India's leading real estate service provider</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Expert Knowledge",
                description: "Deep understanding of Indian real estate markets across major cities."
              },
              {
                icon: "⚡",
                title: "Fast Results",
                description: "Quick turnaround times without compromising on quality or attention to detail."
              },
              {
                icon: "🔒",
                title: "Trusted Service",
                description: "Hundreds of satisfied clients across India trust us with their real estate needs."
              },
              {
                icon: "💼",
                title: "Professional Team",
                description: "Experienced professionals dedicated to achieving your real estate goals."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 text-center">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
            <p className="text-gray-300">Choose the perfect package for your real estate needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "₹25,000",
                period: "per property",
                features: [
                  "Property Valuation",
                  "Basic Marketing",
                  "Email Support",
                  "Standard Documentation"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "₹50,000",
                period: "per property",
                features: [
                  "Everything in Basic",
                  "Strategic Marketing",
                  "Professional Photography",
                  "Negotiation Support",
                  "Priority Support"
                ],
                popular: true
              },
              {
                name: "Premium",
                price: "₹1,00,000",
                period: "per property",
                features: [
                  "Everything in Professional",
                  "Dedicated Account Manager",
                  "Premium Marketing",
                  "Legal Assistance",
                  "24/7 Support"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-black rounded-xl p-8 border ${plan.popular ? 'border-blue-500 relative' : 'border-zinc-800'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border border-gray-600 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-300">Real experiences from satisfied clients across India</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Mehta",
                location: "Mumbai, Maharashtra",
                service: "Property Management",
                rating: 5,
                testimonial: "11square's property management service has been exceptional. They handle everything professionally and keep me updated regularly."
              },
              {
                name: "Sneha Patel",
                location: "Bangalore, Karnataka", 
                service: "Home Buying Assistance",
                rating: 5,
                testimonial: "The team helped us find our dream home in Bangalore. Their market knowledge and negotiation skills saved us both time and money."
              },
              {
                name: "Rohit Sharma",
                location: "Delhi, NCR",
                service: "Strategic Marketing",
                rating: 5,
                testimonial: "Sold my property within 3 weeks thanks to their amazing marketing strategy. Highly recommend their services!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <div className="flex mb-4">
                  {Array.from({length: testimonial.rating}, (_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                    <div className="text-blue-400 text-sm">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 text-lg">Let 11square elevate your real estate experience. Contact us today to discuss your specific needs and discover how our services can help you achieve your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700">
              Get Free Consultation
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-gray-800">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 px-6 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">11</span>
                </div>
                <span className="text-white font-semibold">11square</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">📧</a>
                <a href="#" className="text-gray-400 hover:text-white">📱</a>
                <a href="#" className="text-gray-400 hover:text-white">📍</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Home</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Hero Section</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Properties</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
                <li><a href="#" className="hover:text-white">FAQ's</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Our Story</a></li>
                <li><a href="#" className="hover:text-white">Our Works</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Our Clients</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Properties</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Portfolio</a></li>
                <li><a href="#" className="hover:text-white">Categories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Valuation Mastery</a></li>
                <li><a href="#" className="hover:text-white">Strategic Marketing</a></li>
                <li><a href="#" className="hover:text-white">Negotiation Wizardry</a></li>
                <li><a href="#" className="hover:text-white">Closing Success</a></li>
                <li><a href="#" className="hover:text-white">Property Management</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 flex justify-between items-center">
            <div className="text-gray-400">
              @2023 11square. All Rights Reserved. Terms & Conditions
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}