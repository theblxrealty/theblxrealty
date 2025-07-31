import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bed, Bath, Maximize, Leaf, MapPin, Calendar, Home, Phone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyGallery from "@/components/property-gallery"
import PropertyContactForm from "@/components/property-contact-form"
import PropertyMap from "@/components/property-map"
import SimilarProperties from "@/components/similar-properties"

// Sample property data
const properties = [
  {
    id: 1,
    title: "Emerald Residence",
    description:
      "Nestled in the heart of Eco City, the Emerald Residence is a stunning example of sustainable luxury living. This 4-bedroom, 3-bathroom home seamlessly blends modern design with eco-friendly features to create a space that's both beautiful and environmentally responsible.",
    longDescription:
      "The Emerald Residence was designed with sustainability at its core. The home features a comprehensive solar panel system that provides clean energy for daily use, significantly reducing electricity costs and carbon footprint. The innovative rainwater harvesting system collects and filters rainwater for irrigation and non-potable water needs, while the green roof provides natural insulation, reduces stormwater runoff, and creates a habitat for local wildlife.\n\nInside, the home boasts open-concept living spaces with abundant natural light, reducing the need for artificial lighting during daylight hours. Energy-efficient appliances, LED lighting throughout, and a smart home system allow for optimal energy management. The materials used in construction and finishes were carefully selected for their sustainability, durability, and low environmental impact.\n\nThe property includes a private garden with native, drought-resistant plants that require minimal maintenance and water. A home composting system makes it easy to reduce waste and create nutrient-rich soil for the garden.",
    location: "123 Green Avenue, Eco City, EC",

    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    beds: 4,
    baths: 3,
    sqft: 2800,
    yearBuilt: 2022,
    lotSize: "0.25 acres",
    ecoFeatures: [
      "Solar Panels",
      "Rainwater Harvesting",
      "Green Roof",
      "Energy-Efficient Appliances",
      "Smart Home System",
      "Sustainable Building Materials",
    ],
    amenities: [
      "Open Floor Plan",
      "Gourmet Kitchen",
      "Home Office",
      "Walk-in Closets",
      "Hardwood Floors",
      "Central Air Conditioning",
      "Fireplace",
    ],
    isNew: true,
    featured: true,
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@greenhaven.com",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
]

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((p) => p.id.toString() === id) || properties[0]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Property Gallery */}
      <PropertyGallery images={property.images} title={property.title} />

      {/* Property Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-6">
                <Link href="/properties" className="text-emerald-600 hover:text-emerald-700 flex items-center mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Properties
                </Link>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{property.title}</h1>
                </div>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                  {property.location}
                </div>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-emerald-600 mr-2" />
                    <div>
                      <div className="font-bold">{property.beds}</div>
                      <div className="text-sm text-gray-500">Bedrooms</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-emerald-600 mr-2" />
                    <div>
                      <div className="font-bold">{property.baths}</div>
                      <div className="text-sm text-gray-500">Bathrooms</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Maximize className="h-5 w-5 text-emerald-600 mr-2" />
                    <div>
                      <div className="font-bold">{property.sqft}</div>
                      <div className="text-sm text-gray-500">Square Feet</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                    <div>
                      <div className="font-bold">{property.yearBuilt}</div>
                      <div className="text-sm text-gray-500">Year Built</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-emerald-600 mr-2" />
                    <div>
                      <div className="font-bold">{property.lotSize}</div>
                      <div className="text-sm text-gray-500">Lot Size</div>
                    </div>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Property Description</h2>
                    <p className="text-gray-700 mb-4">{property.description}</p>
                    <p className="text-gray-700 whitespace-pre-line">{property.longDescription}</p>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Property Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-emerald-600 mr-3"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sustainability" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Eco-Friendly Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {property.ecoFeatures.map((feature, index) => (
                        <div key={index} className="bg-emerald-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Leaf className="h-5 w-5 text-emerald-600 mr-2" />
                            <h3 className="font-bold">{feature}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {feature === "Solar Panels" &&
                              "High-efficiency solar panels that generate clean, renewable energy for the home, reducing electricity costs and carbon footprint."}
                            {feature === "Rainwater Harvesting" &&
                              "System that collects and filters rainwater for irrigation and non-potable water needs, conserving water resources."}
                            {feature === "Green Roof" &&
                              "Living roof system that provides natural insulation, reduces stormwater runoff, and creates habitat for local wildlife."}
                            {feature === "Energy-Efficient Appliances" &&
                              "ENERGY STAR certified appliances that use less energy than standard models, reducing utility bills and environmental impact."}
                            {feature === "Smart Home System" &&
                              "Integrated technology that optimizes energy usage, allowing remote monitoring and control of heating, cooling, and lighting."}
                            {feature === "Sustainable Building Materials" &&
                              "Eco-friendly materials sourced responsibly, with low environmental impact and reduced carbon footprint."}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="location" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Location</h2>
                    <p className="text-gray-700 mb-6">
                      Located in the heart of Eco City, this property offers easy access to parks, schools, shopping
                      centers, and public transportation. The neighborhood is known for its commitment to sustainability
                      and community-focused initiatives.
                    </p>
                    <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                      <PropertyMap location={property.location} />
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Transportation</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>5 min to public transit</li>
                          <li>15 min to downtown</li>
                          <li>30 min to airport</li>
                          <li>EV charging stations nearby</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Education</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Green Elementary School (0.5 mi)</li>
                          <li>Eco Middle School (1.2 mi)</li>
                          <li>Sustainable High School (2.0 mi)</li>
                          <li>Community College (3.5 mi)</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Amenities</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Organic grocery store (0.3 mi)</li>
                          <li>Community garden (0.2 mi)</li>
                          <li>Eco Park (0.7 mi)</li>
                          <li>Farmers market (weekends)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[380px] mt-8 lg:mt-0">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{property.agent.name}</h3>
                    <p className="text-gray-600 text-sm">Eco Property Specialist</p>
                    <div className="flex items-center text-sm text-emerald-600 mt-1">
                      <Phone className="h-3 w-3 mr-1" />
                      {property.agent.phone}
                    </div>
                  </div>
                </div>

                <PropertyContactForm propertyTitle={property.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Location Map */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Property Location</h2>
            <p className="text-gray-600 mb-6">
              Located at {property.location}. Explore the neighborhood and nearby amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="h-[650px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <PropertyMap location={property.location} />
              </div>
            </div>
            
            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                  Address
                </h3>
                <p className="text-gray-700">{property.location}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Nearby Amenities</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Shopping Centers</span>
                    <span className="font-semibold">0.5 mi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Schools</span>
                    <span className="font-semibold">0.8 mi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Public Transport</span>
                    <span className="font-semibold">0.3 mi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Parks</span>
                    <span className="font-semibold">0.2 mi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Hospitals</span>
                    <span className="font-semibold">1.2 mi</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Transportation</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Bus Stop</span>
                    <span className="font-semibold">5 min walk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Metro Station</span>
                    <span className="font-semibold">15 min walk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Airport</span>
                    <span className="font-semibold">30 min drive</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Highway Access</span>
                    <span className="font-semibold">10 min drive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Similar Properties</h2>
          <SimilarProperties currentPropertyId={property.id} />
        </div>
      </section>
    </div>
  )
}
