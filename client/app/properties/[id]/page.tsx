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
    title: "Luxury Villa in Koramangala",
    description:
      "A rare opportunity to acquire a premium luxury villa in one of Bangalore's most prestigious neighborhoods.",
    longDescription:
      "This exclusive luxury villa represents the pinnacle of residential development in the sought-after Koramangala area. This exclusive property features meticulously designed architecture that combines contemporary style with traditional craftsmanship. The villa has been thoughtfully planned to maximize natural light and create seamless indoor-outdoor living spaces.\n\nThe property offers premium amenities throughout, including bespoke kitchens with integrated appliances, luxury bathrooms with designer fixtures, and smart home technology for modern convenience.\n\nResidents benefit from extensive landscaped gardens, secure parking, and access to premium amenities. The property is perfectly positioned for easy access to excellent schools, transport links, and the vibrant local community of Koramangala.",
    location: "Koramangala, Bangalore, Karnataka, India",
    price: "₹3.2 Cr",
    development: true,
    propertyRef: "blr012507329",
    coordinates: { lat: 12.9352, lng: 77.6245 },
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
      name: "Arjun Mehta",
      phone: "+91 98765 43210",
      email: "arjun@11square.com",
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
