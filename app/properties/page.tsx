import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PropertyFilters from "@/components/property-filters"
import PropertyCard from "@/components/property-card"

// Sample property data for Bangalore
const properties = [
  {
    id: 1,
    title: "Luxury Villa in Koramangala",
    location: "Koramangala 5th Block, Bangalore",
    price: "₹2.5 Crores",
    image: "/placeholder.svg?height=600&width=800",
    beds: 4,
    baths: 3,
    sqft: 2800,
    amenities: ["Swimming Pool", "Gym", "Security", "Parking"],
    isNew: true,
    featured: true,
    type: "Villa",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Premium Apartment in Indiranagar",
    location: "Indiranagar 100 Feet Road, Bangalore",
    price: "₹1.8 Crores",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 2,
    sqft: 1850,
    amenities: ["Club House", "Garden", "Power Backup", "Lift"],
    isNew: false,
    featured: true,
    type: "Apartment",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Modern Flat in Whitefield",
    location: "Whitefield Main Road, Bangalore",
    price: "₹95 Lakhs",
    image: "/placeholder.svg?height=600&width=800",
    beds: 2,
    baths: 2,
    sqft: 1200,
    amenities: ["IT Park Nearby", "Metro Access", "Shopping Mall", "Hospital"],
    isNew: true,
    featured: false,
    type: "Apartment",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Spacious House in HSR Layout",
    location: "HSR Layout Sector 2, Bangalore",
    price: "₹1.6 Crores",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 3,
    sqft: 2200,
    amenities: ["Garden", "Car Parking", "Gated Community", "Park View"],
    isNew: false,
    featured: true,
    type: "Independent House",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Studio Apartment in Electronic City",
    location: "Electronic City Phase 1, Bangalore",
    price: "₹45 Lakhs",
    image: "/placeholder.svg?height=600&width=800",
    beds: 1,
    baths: 1,
    sqft: 650,
    amenities: ["Tech Parks Nearby", "Bus Connectivity", "Food Court", "ATM"],
    isNew: true,
    featured: false,
    type: "Studio",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Penthouse in UB City",
    location: "UB City Mall, Bangalore",
    price: "₹5.2 Crores",
    image: "/placeholder.svg?height=600&width=800",
    beds: 4,
    baths: 4,
    sqft: 3500,
    amenities: ["City View", "Premium Location", "Concierge", "Valet Parking"],
    isNew: false,
    featured: true,
    type: "Penthouse",
    rating: 4.9,
  },
  {
    id: 7,
    title: "Family Home in Jayanagar",
    location: "Jayanagar 4th Block, Bangalore",
    price: "₹1.2 Crores",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 2,
    sqft: 1800,
    amenities: ["Traditional Area", "Schools Nearby", "Parks", "Metro Station"],
    isNew: false,
    featured: false,
    type: "Independent House",
    rating: 4.4,
  },
  {
    id: 8,
    title: "Luxury Flat in Brigade Road",
    location: "Brigade Road, Bangalore",
    price: "₹2.8 Crores",
    image: "/placeholder.svg?height=600&width=800",
    beds: 3,
    baths: 3,
    sqft: 2100,
    amenities: ["Shopping District", "Restaurants", "Entertainment", "Central Location"],
    isNew: true,
    featured: true,
    type: "Apartment",
    rating: 4.8,
  },
]

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Premium Properties in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Bangalore
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8">
              Discover your perfect luxury home from our exclusive collection of premium properties across Bangalore's
              most prestigious locations
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyFilters />
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Available Properties</h2>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">Sort by:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px] border-slate-300 focus:border-navy-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="size">Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                3
              </Button>
              <span className="mx-2 text-slate-600">...</span>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-slate-300 hover:bg-slate-50">
                8
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-lg text-slate-200 mb-8">
              Let our luxury property experts help you find the perfect property that matches your requirements and
              investment goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                variant="premium"
              >
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outlineWhite"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
