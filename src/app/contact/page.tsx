export default function Contact() {
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
          <a href="/services" className="text-gray-300 hover:text-blue-400">Services</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch with 11square</h1>
          <p className="text-gray-300 mb-12 text-lg">
            Welcome to 11square, where your dream property awaits in every corner of India's most coveted neighborhoods. 
            We're here to help you find your perfect home or investment opportunity.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300 mb-4">info@11square.com</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">+91 98765 43210</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-gray-300 mb-4">Mumbai Financial District, Maharashtra 400001</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <div className="flex justify-center space-x-2">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                  <span className="text-white text-xs">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">
                  <span className="text-white text-xs">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                  <span className="text-white text-xs">ig</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-300">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          
          <div className="bg-black rounded-2xl p-8 border border-zinc-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">First Name</label>
                  <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter First Name" />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                  <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter Last Name" />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter your Email" />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone</label>
                  <input type="tel" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter Phone Number" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                    <option>Select Subject</option>
                    <option>Property Inquiry</option>
                    <option>General Question</option>
                    <option>Investment Opportunity</option>
                    <option>Partnership</option>
                    <option>Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea rows={8} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter your message here..."></textarea>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-zinc-900 border-zinc-800 rounded focus:ring-blue-500" />
                  <span className="text-gray-300 text-sm">I agree with Terms of Use and Privacy Policy</span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-300">Find us at our headquarters in Mumbai's Financial District</p>
          </div>
          
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">11square Headquarters</h3>
                <p className="text-gray-300">Mumbai Financial District</p>
                <p className="text-gray-300">Maharashtra 400001, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Find answers to common questions about contacting 11square</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your office hours?",
                answer: "We're open Monday to Saturday from 9:00 AM to 7:00 PM IST. Our team is also available for emergency property matters 24/7."
              },
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, please call us directly."
              },
              {
                question: "Do you provide virtual property tours?",
                answer: "Yes! We offer comprehensive virtual tours for all our properties. Schedule one through our contact form or by calling us directly."
              },
              {
                question: "What areas do you serve in India?",
                answer: "We serve major cities including Mumbai, Delhi, Bangalore, Chennai, Pune, and Hyderabad, with plans to expand to more cities soon."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-gray-300 mb-8 text-lg">Don't wait any longer. Contact 11square today and let us help you find the perfect property that matches your dreams and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700">
              Browse Properties
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-gray-800">
              Schedule a Call
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