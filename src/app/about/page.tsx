export default function About() {
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
          <a href="/about" className="text-white hover:text-blue-400">About Us</a>
          <a href="/properties" className="text-gray-300 hover:text-blue-400">Properties</a>
          <a href="/services" className="text-gray-300 hover:text-blue-400">Services</a>
        </nav>
        <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </a>
      </header>

      {/* Our Journey Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Our Journey</h1>
            <p className="text-gray-300 mb-8 text-lg">
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
            </p>
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
            <div className="bg-gray-800 rounded-3xl p-8 h-96 border border-gray-700">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl h-full flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 shadow-xl">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-300">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black rounded-xl p-8 border border-zinc-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">⭐</span>
                </div>
                <h3 className="text-xl font-semibold">Trust</h3>
              </div>
              <p className="text-gray-300 mb-4">Trust is the cornerstone of every successful real estate transaction.</p>
            </div>
            <div className="bg-black rounded-xl p-8 border border-zinc-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">🎯</span>
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
              </div>
              <p className="text-gray-300 mb-4">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
            </div>
            <div className="bg-black rounded-xl p-8 border border-zinc-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">👥</span>
                </div>
                <h3 className="text-xl font-semibold">Client-Centric</h3>
              </div>
              <p className="text-gray-300 mb-4">Your dreams and needs are at the center of our universe. We listen, understand.</p>
            </div>
            <div className="bg-black rounded-xl p-8 border border-zinc-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">🚀</span>
                </div>
                <h3 className="text-xl font-semibold">Our Commitment</h3>
              </div>
              <p className="text-gray-300 mb-4">We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-300">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 text-center">
              <h3 className="text-xl font-semibold mb-4">3+ Years of Excellence</h3>
              <p className="text-gray-300">With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to source for all things real estate.</p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 text-center">
              <h3 className="text-xl font-semibold mb-4">Happy Clients</h3>
              <p className="text-gray-300">Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 text-center">
              <h3 className="text-xl font-semibold mb-4">Industry Recognition</h3>
              <p className="text-gray-300">We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigating the 11square Experience */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Navigating the 11square Experience</h2>
            <p className="text-gray-300">At 11square, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 01</h3>
              <h4 className="text-lg font-semibold mb-4">Discover a World of Possibilities</h4>
              <p className="text-gray-300">Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 02</h3>
              <h4 className="text-lg font-semibold mb-4">Narrowing Down Your Choices</h4>
              <p className="text-gray-300">Once you've found properties that catch your eye, save them to your favorites or create a shortlist. This allows you to compare features, prices, and locations side by side.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 03</h3>
              <h4 className="text-lg font-semibold mb-4">Personalized Guidance</h4>
              <p className="text-gray-300">Have questions about a property or need more information? Our team of experienced real estate professionals is just a call or message away.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 04</h3>
              <h4 className="text-lg font-semibold mb-4">See It for Yourself</h4>
              <p className="text-gray-300">Schedule viewings for the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a comprehensive look at your potential new home.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 05</h3>
              <h4 className="text-lg font-semibold mb-4">Making Informed Decisions</h4>
              <p className="text-gray-300">Before making an offer, our team will provide you with a comprehensive market analysis, helping you understand the property's value and make an informed decision.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 06</h3>
              <h4 className="text-lg font-semibold mb-4">Getting the Keys to Your New Home</h4>
              <p className="text-gray-300">Once your offer is accepted, we'll guide you through the closing process, ensuring all paperwork is completed accurately and on time. Finally, you'll receive the keys to your new home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the 11square Team */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the 11square Team</h2>
            <p className="text-gray-300">At 11square, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                name: "Max Mitchell", 
                role: "Founder",
                image: "https://picsum.photos/400/400?random=7"
              },
              { 
                name: "Sarah Johnson", 
                role: "Chief Real Estate Officer",
                image: "https://picsum.photos/400/400?random=8"
              },
              { 
                name: "David Brown", 
                role: "Head of Property Management",
                image: "https://picsum.photos/400/400?random=9"
              },
              { 
                name: "Michael Turner", 
                role: "Legal Counsel",
                image: "https://picsum.photos/400/400?random=10"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-600">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                  Say Hello 👋
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Valued Clients */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Valued Clients</h2>
            <p className="text-gray-300">At 11square, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the esteemed organizations that have entrusted us with their real estate needs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black rounded-xl p-8 border border-zinc-800">
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">ABC Corporation</h3>
                  <p className="text-gray-300 mb-4">Since 2019</p>
                  <p className="text-gray-300">ABC Corporation has been a trusted partner in our real estate endeavors. Their commitment to excellence aligns perfectly with our values, and together we've achieved remarkable success in the property market.</p>
                  <div className="mt-4">
                    <span className="text-blue-400">What They Said 🤗</span>
                  </div>
                  <p className="text-gray-300 italic mt-2">"11square's expertise in finding the perfect office space for our expanding operations was invaluable. Their attention to detail and market knowledge made the process seamless."</p>
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">JD</span>
                    </div>
                    <div>
                      <div className="font-semibold">John Doe</div>
                      <div className="text-gray-400 text-sm">CEO, ABC Corporation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-xl p-8 border border-zinc-800">
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">GreenTech Enterprises</h3>
                  <p className="text-gray-300 mb-4">Since 2018</p>
                  <p className="text-gray-300">GreenTech Enterprises, a leader in sustainable technology, chose 11square for their eco-friendly office space requirements. Our ability to identify properties that align with their sustainability goals has been a key factor in our successful partnership.</p>
                  <div className="mt-4">
                    <span className="text-blue-400">What They Said 🤗</span>
                  </div>
                  <p className="text-gray-300 italic mt-2">"11square's understanding of our need for environmentally conscious properties was impressive. They found us the perfect green building that reflects our company's values."</p>
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">JS</span>
                    </div>
                    <div>
                      <div className="font-semibold">Jane Smith</div>
                      <div className="text-gray-400 text-sm">Founder, GreenTech Enterprises</div>
                    </div>
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