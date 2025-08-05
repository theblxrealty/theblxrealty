import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import PropertyDetailPageClient from "./property-detail-client"

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  try {
    const property = await prisma.property.findUnique({
      where: { id }
    })

    if (!property) {
      notFound()
    }

    // Transform the database property to match the expected format
    const transformedProperty = {
      id: property.id,
      title: property.title,
      description: property.description || "",
      longDescription: property.description || "",
      location: property.location || "Location not specified",
      price: property.price ? `₹${(property.price / 10000000).toFixed(1)} Cr` : "Price on Application",
      development: true,
      propertyRef: property.id.slice(-8).toUpperCase(),
      coordinates: property.latitude && property.longitude 
        ? { lat: property.latitude, lng: property.longitude }
        : { lat: 12.9716, lng: 77.5946 },
      images: property.images.length > 0 ? property.images : ["/placeholder.svg?height=600&width=800"],
      beds: property.bedrooms || 0,
      baths: property.bathrooms || 0,
      sqft: property.area || 0,
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
    }

    return (
      <PropertyDetailPageClient property={transformedProperty} />
    )
  } catch (error) {
    console.error('Error fetching property:', error)
    notFound()
  }
}
