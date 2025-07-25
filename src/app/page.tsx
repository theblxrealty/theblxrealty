export default function Home() {
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
          <a href="/" className="text-white hover:text-blue-400">Home</a>
          <a href="/about" className="text-gray-300 hover:text-blue-400">About Us</a>
          <a href="/properties" className="text-gray-300 hover:text-blue-400">Properties</a>
          <a href="/services" className="text-gray-300 hover:text-blue-400">Services</a>
        </nav>
        <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Discover Your Dream
              <br />
              Property with 11square
            </h1>
            <p className="text-gray-300 mb-8 text-lg">
              Your journey to finding the perfect property begins here. Explore our listings across India to find the home that matches your dreams.
            </p>
            <div className="flex space-x-4 mb-12">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
              <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                Browse Properties
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-gray-400">Properties For Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">16+</div>
                <div className="text-gray-400">Years of Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 h-96">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-blue-800 bg-opacity-50 rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-400 opacity-20 rounded-lg"></div>
                </div>
                <div className="bg-blue-700 bg-opacity-60 rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-300 opacity-30 rounded-lg"></div>
                </div>
                <div className="bg-blue-600 bg-opacity-40 rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-500 opacity-25 rounded-lg"></div>
                </div>
                <div className="bg-blue-800 bg-opacity-70 rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-200 opacity-35 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
              <p className="text-gray-300">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments.</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View All Properties
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Goa Beachfront Villa",
                description: "A stunning 4-bedroom, 3-bathroom villa near Goa's pristine beaches...",
                bedrooms: 4,
                bathrooms: 3,
                type: "Villa",
                price: 55000000,
                image: "https://picsum.photos/800/400?random=4"
              },
              {
                title: "Mumbai Metropolitan Apartment",
                description: "A chic 2-bedroom, 2-bathroom apartment with city skyline views...",
                bedrooms: 2,
                bathrooms: 2,
                type: "Apartment",
                price: 45000000,
                image: "https://picsum.photos/800/400?random=5"
              },
              {
                title: "Delhi Garden Bungalow",
                description: "An elegant 3-bedroom, 2-bathroom bungalow in South Delhi...",
                bedrooms: 3,
                bathrooms: 2,
                type: "Bungalow",
                price: 35000000,
                image: "https://picsum.photos/800/400?random=6"
              }
            ].map((property, index) => (
              <div key={index} className="bg-black rounded-xl overflow-hidden border border-zinc-800">
                <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: `url(${property.image})`}}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{property.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4 text-sm text-gray-400">
                      <span>🛏️ {property.bedrooms}-Bedroom</span>
                      <span>🚿 {property.bathrooms}-Bathroom</span>
                      <span>🏡 {property.type}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold">₹{property.price.toLocaleString()}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-300">Read the success stories and heartfelt testimonials from our valued clients across India. Discover why they chose 11square for their real estate needs.</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View All Testimonials
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Service!",
                text: "Our experience with 11square was outstanding. Their team's dedication and professionalism made our property search in Mumbai seamless and enjoyable.",
                name: "Rajesh Sharma",
                location: "Mumbai, Maharashtra"
              },
              {
                title: "Efficient and Reliable",
                text: "11square provided us with top-notch service. They helped us sell our home in Bangalore quickly and at a great price. We couldn't be happier with the results.",
                name: "Priya Nair",
                location: "Bangalore, Karnataka"
              },
              {
                title: "Trusted Advisors",
                text: "The 11square team guided us through the entire buying process in Delhi. Their market knowledge and attention to detail were impressive. Highly recommended!",
                name: "Amit Patel",
                location: "Delhi, NCR"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">Find answers to common questions about 11square's services, property listings, and the real estate process in India. We're here to provide clarity and assist you.</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View All FAQ's
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                question: "How do I search for properties on 11square?",
                answer: "Learn how to navigate our user-friendly search tools to find properties across India that match your criteria and budget."
              },
              {
                question: "What documents do I need as a seller in India?",
                answer: "Find out about the necessary documentation and legal requirements for selling your property through 11square in India."
              },
              {
                question: "How can I contact a 11square agent?",
                answer: "Discover the different ways you can get in touch with our experienced real estate agents across major Indian cities for personalized assistance."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-300 mb-4">{faq.answer}</p>
                <button className="text-blue-400 hover:text-blue-300">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Real Estate Journey Today</h2>
          <p className="text-gray-300 mb-8 text-lg">Your dream property is just a click away. Whether you're looking for a new home in Mumbai, Delhi, Bangalore, or any other Indian city, a strategic investment, or expert real estate advice, 11square is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties across India.</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700">
            Browse Properties
          </button>
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
