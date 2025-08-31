// pages/services/expert-market-insights.tsx
import Image from "next/image";
import Link from "next/link";

export default function ExpertMarketInsights() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full">
        <Image
          src="/wcu_2.webp" // replace with your hero image
          alt="Expert Market Insights & Investment Advisory"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 
                  className="font-bold mb-6 font-serif animate-slide-up text-white" 
                  style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '60px', fontWeight: '400' }}
                >
            Expert Market Insights & Investment Advisory
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto p-8 space-y-6">
        <h2 className="text-3xl font-bold">Professional Property Valuations & Investment Guidance</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our advisory team provides in-depth property valuations, market 
          intelligence, and strategic investment guidance to help you make 
          confident real estate decisions. Backed by certified experts and 
          industry specialists, we ensure that your investments align with 
          current trends and long-term opportunities.
        </p>
      </div>

      {/* Service Highlights */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 p-8">
        <ServiceCard title="Property Valuations">
          Accurate and data-driven valuations that help you determine the 
          true market worth of residential, commercial, and industrial assets.
        </ServiceCard>

        <ServiceCard title="Market Research & Trends">
          Comprehensive insights into emerging property trends, 
          price movements, and demand-supply dynamics in Bengaluru and beyond.
        </ServiceCard>

        <ServiceCard title="Investment Advisory">
          Tailored strategies for investors—whether individual or institutional— 
          with a focus on risk management and long-term value creation.
        </ServiceCard>

        <ServiceCard title="Portfolio Optimization">
          Guidance on restructuring and diversifying your property holdings 
          to maximize returns and minimize exposure.
        </ServiceCard>

        <ServiceCard title="Location & Growth Analysis">
          Micro and macro-level studies of prime growth corridors to help 
          identify the best-performing real estate investments.
        </ServiceCard>

        <ServiceCard title="Expert Consultation">
          One-on-one sessions with certified market specialists to resolve 
          queries, explore opportunities, and plan investments effectively.
        </ServiceCard>
      </section>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto mt-8 mb-16 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Make Smarter Real Estate Investments?
        </h2>
        <p className="mb-4 text-gray-700">
          Connect with our market experts today and gain valuable insights 
          that will shape your real estate journey.
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
