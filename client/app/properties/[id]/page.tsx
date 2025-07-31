import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bed, Bath, Maximize, Leaf, MapPin, Calendar, Home, Phone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyGallery from "@/components/property-gallery"
import PropertyContactForm from "@/components/property-contact-form"
import PropertyMap from "@/components/property-map"
import SimilarProperties from "@/components/similar-properties"
import PropertyDetailPageClient from "./property-detail-client"

// Sample property data
const properties = [
  {
    id: 1,
    title: "Forton Road, Newport, Shropshire, TF10",
    description:
      "A rare opportunity to acquire a building plot with planning permission, on one of Newport's premier roads.",
    longDescription:
      "Cold Norton Farm represents the pinnacle of luxury residential development in the sought-after Cobham area. This exclusive development features meticulously designed homes that combine contemporary architecture with traditional craftsmanship. Each property has been thoughtfully planned to maximize natural light and create seamless indoor-outdoor living spaces.\n\nThe development offers a range of property types from elegant townhouses to spacious family homes, all finished to the highest standards. The homes feature premium materials throughout, including bespoke kitchens with integrated appliances, luxury bathrooms with designer fixtures, and smart home technology for modern convenience.\n\nResidents benefit from extensive landscaped gardens, secure parking, and access to premium amenities. The development is perfectly positioned for easy access to excellent schools, transport links, and the vibrant local community of Cobham.",
    location: "Forton Road, Newport, Shropshire, TF10",
    price: "£275,000",
    development: true,
    propertyRef: "stl012507329",
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
    yearBuilt: 2024,
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
      name: "Mitchell Glassey",
      phone: "+44 20 7123 4567",
      email: "mitchell@11square.com",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
]

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((p) => p.id.toString() === id) || properties[0]

  return (
    <PropertyDetailPageClient property={property} />
  )
}
