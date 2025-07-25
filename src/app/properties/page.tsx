export default function Properties() {
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
          <a href="/properties" className="text-white hover:text-blue-400">Properties</a>
          <a href="/services" className="text-gray-300 hover:text-blue-400">Services</a>
        </nav>
        <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Property</h1>
          <p className="text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
            Welcome to 11square, where your dream property awaits in every corner of India's most coveted neighborhoods. 
            Explore our curated selection of properties, each offering a unique story and a chance to redefine your life.
          </p>
          
          {/* Search Filters */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-2">Location</label>
                <select className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  <option>Select Location</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Pune</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-2">Property Type</label>
                <select className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  <option>Select Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Bungalow</option>
                  <option>Plot</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-2">Pricing Range</label>
                <select className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  <option>Select Range</option>
                  <option>₹10L - ₹50L</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹5Cr</option>
                  <option>₹5Cr+</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-2">Property Size</label>
                <select className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  <option>Select Size</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4+ BHK</option>
                </select>
              </div>
              
              <div className="flex flex-col justify-end">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
                  Find Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Properties */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Discover a World of Possibilities</h2>
              <p className="text-gray-300">Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Goa Serenity Villa",
                description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful neighbourhood...",
                bedrooms: 4,
                bathrooms: 3,
                type: "Villa",
                price: 55000000,
                image: "bg-gradient-to-br from-blue-500 to-cyan-400"
              },
              {
                title: "Mumbai Metropolitan Haven",
                description: "A chic 2-bedroom, 2-bathroom apartment with modern city views...",
                bedrooms: 2,
                bathrooms: 2,
                type: "Apartment",
                price: 45000000,
                image: "bg-gradient-to-br from-purple-500 to-pink-400"
              },
              {
                title: "Delhi Rustic Cottage",
                description: "An elegant 3-bedroom, 2-bathroom cottage in the countryside...",
                bedrooms: 3,
                bathrooms: 2,
                type: "Cottage",
                price: 35000000,
                image: "bg-gradient-to-br from-indigo-500 to-purple-600"
              }
            ].map((property, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className={`h-48 ${property.image}`}></div>
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
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold">₹{property.price.toLocaleString()}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                      View Property Details
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-black border border-zinc-700 text-white px-3 py-2 rounded-lg hover:bg-zinc-800 text-sm">
                      📞 Call
                    </button>
                    <button className="bg-black border border-zinc-700 text-white px-3 py-2 rounded-lg hover:bg-zinc-800 text-sm">
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Make It Happen */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Make It Happen</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>
          </div>
          
          <div className="bg-black rounded-2xl p-8 border border-zinc-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">First Name</label>
                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter First Name" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter Last Name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter your Email" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone</label>
                    <input type="tel" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter Phone Number" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Preferred Location</label>
                    <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                      <option>Select Location</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                      <option>Chennai</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Property Type</label>
                    <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                      <option>Select Property Type</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Bungalow</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">No. of Bathrooms</label>
                    <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                      <option>Select no. of Bathrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">No. of Bedrooms</label>
                    <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                      <option>Select no. of Bedrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Budget</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                    <option>Select Budget</option>
                    <option>₹10L - ₹50L</option>
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹5Cr</option>
                    <option>₹5Cr+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter your Message here.."></textarea>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-zinc-900 border-zinc-800 rounded focus:ring-blue-500" />
                  <span className="text-gray-300 text-sm">I agree with Terms of Use and Privacy Policy</span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
                  Send Your Message
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2">📧</span>
                    info@11square.com
                  </h3>
                </div>
                
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2">📱</span>
                    +91 98765 43210
                  </h3>
                </div>
                
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2">🏢</span>
                    Office
                  </h3>
                  <p className="text-gray-300">11square Headquarters, Mumbai Financial District, Maharashtra 400001, India</p>
                </div>
                
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                      <span className="text-white">f</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">
                      <span className="text-white">t</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                      <span className="text-white">ig</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700">
                      <span className="text-white">yt</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Real Estate Journey Today</h2>
          <p className="text-gray-300 mb-8 text-lg">Your dream property is just a click away. Whether you're looking for a new home in Mumbai, Delhi, Bangalore, or any other Indian city, a strategic investment, or expert real estate advice, 11square is here to assist you every step of the way.</p>
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