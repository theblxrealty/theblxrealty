// pages/services/premium-property-portfolio.tsx
import Image from "next/image";
import Link from "next/link";

export default function PremiumPropertyPortfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full">
        <Image
          src="/wcu_1.webp" // replace with your hero image
          alt="Premium Property Portfolio"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 
                  className="font-bold mb-6 font-serif animate-slide-up text-white" 
                  style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '60px', fontWeight: '400' }}
                >
            Premium Property Portfolio
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto p-8 space-y-6">
        <h2 className="text-3xl font-bold">Buy Ready and Off-Plan Properties</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Explore a curated collection of luxury apartments, villas, commercial
          spaces, and investment properties across Bengaluru’s most prestigious
          locations. Whether you are looking for a ready-to-move-in property or
          an off-plan investment opportunity, we provide exclusive access to
          premium projects from trusted developers.
        </p>
      </div>

      {/* Service Highlights */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 p-8">
        <ServiceCard title="Luxury Apartments & Villas">
          Discover thoughtfully designed residences offering modern
          architecture, premium amenities, and prime locations for refined
          urban living.
        </ServiceCard>

        <ServiceCard title="Commercial Investments">
          Gain access to high-yield office spaces, retail outlets, and
          co-working hubs strategically located in Bengaluru’s commercial hubs.
        </ServiceCard>

        <ServiceCard title="Off-Plan Opportunities">
          Secure properties at early-stage pricing with flexible payment
          options, while benefiting from appreciation potential upon project
          completion.
        </ServiceCard>

        <ServiceCard title="Ready-to-Move Properties">
          Move in without delays. Choose from fully completed, legally
          verified, and immediately available premium homes and offices.
        </ServiceCard>

        <ServiceCard title="Verified Developers">
          Partnering exclusively with reputed developers ensures quality
          construction, clear titles, and timely project delivery.
        </ServiceCard>

        <ServiceCard title="End-to-End Support">
          From property selection to documentation and financing, we provide
          complete guidance for a secure and seamless purchase.
        </ServiceCard>
      </section>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto mt-8 mb-16 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Explore Bengaluru’s Finest Properties?
        </h2>
        <p className="mb-4 text-gray-700">
          Connect with our team of real estate experts and discover premium
          opportunities tailored to your needs.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}
