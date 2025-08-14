import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample properties
  const properties = [
    // Koramangala Properties
    {
      title: "Luxury Villa in Koramangala",
      description: "A rare opportunity to acquire a premium luxury villa in one of Bangalore's most prestigious neighborhoods.",
      price: 32000000, // 3.2 Cr
      location: "Koramangala, Bangalore",
      latitude: 12.9352,
      longitude: 77.6245,
      propertyType: "luxury-villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Modern Apartment in Koramangala",
      description: "Contemporary 3BHK apartment with modern amenities in Koramangala.",
      price: 22000000, // 2.2 Cr
      location: "Koramangala, Bangalore",
      latitude: 12.9355,
      longitude: 77.6248,
      propertyType: "apartments",
      bedrooms: 3,
      bathrooms: 2,
      area: 1650,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Premium Villa in Koramangala",
      description: "Exclusive villa with private garden and modern amenities.",
      price: 45000000, // 4.5 Cr
      location: "Koramangala, Bangalore",
      latitude: 12.9348,
      longitude: 77.6242,
      propertyType: "luxury-villas",
      bedrooms: 5,
      bathrooms: 4,
      area: 3800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },

    // Indiranagar Properties
    {
      title: "Premium Apartment in Indiranagar",
      description: "Modern apartment with premium amenities in the heart of Indiranagar.",
      price: 18000000, // 1.8 Cr
      location: "Indiranagar, Bangalore",
      latitude: 12.9789,
      longitude: 77.6408,
      propertyType: "apartments",
      bedrooms: 3,
      bathrooms: 2,
      area: 1850,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Luxury Villa in Indiranagar",
      description: "Exclusive villa in the heart of Indiranagar with premium amenities.",
      price: 55000000, // 5.5 Cr
      location: "Indiranagar, Bangalore",
      latitude: 12.9792,
      longitude: 77.6412,
      propertyType: "luxury-villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Commercial Space in Indiranagar",
      description: "Prime commercial space in Indiranagar for retail or office use.",
      price: 28000000, // 2.8 Cr
      location: "Indiranagar, Bangalore",
      latitude: 12.9785,
      longitude: 77.6405,
      propertyType: "commercial",
      bedrooms: null, // Commercial properties don't have bedrooms
      bathrooms: 1, // Commercial properties have bathrooms
      area: 1500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },

    // Whitefield Properties
    {
      title: "Luxury Villa in Whitefield",
      description: "Exclusive villa with private garden and swimming pool in Whitefield.",
      price: 52000000, // 5.2 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9692,
      longitude: 77.7499,
      propertyType: "luxury-villas",
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Premium Apartment in Whitefield",
      description: "Modern 4BHK apartment with world-class amenities in Whitefield.",
      price: 35000000, // 3.5 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9695,
      longitude: 77.7502,
      propertyType: "apartments",
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Farm Land in Whitefield",
      description: "Spacious agricultural land with development potential in Whitefield area.",
      price: 65000000, // 6.5 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9688,
      longitude: 77.7495,
      propertyType: "farm-land",
      bedrooms: null, // Farm lands don't have bedrooms
      bathrooms: null, // Farm lands don't have bathrooms
      area: 5500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },

    // Sarjapur Road Properties
    {
      title: "Farm Land in Sarjapur Road",
      description: "Beautiful agricultural land with development potential and modern access.",
      price: 48000000, // 4.8 Cr
      location: "Sarjapur Road, Bangalore",
      latitude: 12.8997,
      longitude: 77.6867,
      propertyType: "farm-land",
      bedrooms: null, // Farm lands don't have bedrooms
      bathrooms: null, // Farm lands don't have bathrooms
      area: 3200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Luxury Villa in Sarjapur Road",
      description: "Exclusive villa with private pool and garden in Sarjapur Road.",
      price: 42000000, // 4.2 Cr
      location: "Sarjapur Road, Bangalore",
      latitude: 12.9000,
      longitude: 77.6870,
      propertyType: "luxury-villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Premium Apartment in Sarjapur Road",
      description: "Modern apartment with premium amenities in Sarjapur Road.",
      price: 25000000, // 2.5 Cr
      location: "Sarjapur Road, Bangalore",
      latitude: 12.8994,
      longitude: 77.6864,
      propertyType: "apartments",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },

    // MG Road Properties
    {
      title: "Commercial Space in MG Road",
      description: "Prime commercial space in the heart of Bangalore's business district.",
      price: 21000000, // 2.1 Cr
      location: "MG Road, Bangalore",
      latitude: 12.9716,
      longitude: 77.5946,
      propertyType: "commercial",
      bedrooms: null, // Commercial properties don't have bedrooms
      bathrooms: 2, // Commercial properties have bathrooms
      area: 1200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Luxury Apartment in MG Road",
      description: "Premium apartment with city views in the heart of MG Road.",
      price: 38000000, // 3.8 Cr
      location: "MG Road, Bangalore",
      latitude: 12.9719,
      longitude: 77.5949,
      propertyType: "apartments",
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Office Space in MG Road",
      description: "Modern office space with premium facilities in MG Road.",
      price: 32000000, // 3.2 Cr
      location: "MG Road, Bangalore",
      latitude: 12.9713,
      longitude: 77.5943,
      propertyType: "commercial",
      bedrooms: null, // Commercial properties don't have bedrooms
      bathrooms: 1, // Commercial properties have bathrooms
      area: 2000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },

    // Electronic City Properties
    {
      title: "Residential Plot in Electronic City",
      description: "Premium residential plot in Electronic City with clear title.",
      price: 15000000, // 1.5 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8458,
      longitude: 77.6655,
      propertyType: "residential",
      bedrooms: null, // Plots don't have bedrooms
      bathrooms: null, // Plots don't have bathrooms
      area: 1850,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Apartment in Electronic City",
      description: "Modern apartment with IT park proximity in Electronic City.",
      price: 18000000, // 1.8 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8461,
      longitude: 77.6658,
      propertyType: "apartments",
      bedrooms: 3,
      bathrooms: 2,
      area: 1650,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Commercial Space in Electronic City",
      description: "Office space with IT park connectivity in Electronic City.",
      price: 22000000, // 2.2 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8455,
      longitude: 77.6652,
      propertyType: "commercial",
      bedrooms: null, // Commercial properties don't have bedrooms
      bathrooms: 1, // Commercial properties have bathrooms
      area: 1400,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },

    // Jayanagar Properties
    {
      title: "Luxury Villa in Jayanagar",
      description: "Exclusive villa in the prestigious Jayanagar area with modern amenities.",
      price: 38000000, // 3.8 Cr
      location: "Jayanagar, Bangalore",
      latitude: 12.9279,
      longitude: 77.5831,
      propertyType: "luxury-villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 3000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Premium Apartment in Jayanagar",
      description: "Modern apartment with premium amenities in Jayanagar.",
      price: 28000000, // 2.8 Cr
      location: "Jayanagar, Bangalore",
      latitude: 12.9282,
      longitude: 77.5834,
      propertyType: "apartments",
      bedrooms: 3,
      bathrooms: 2,
      area: 1900,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Residential Villa in Jayanagar",
      description: "Beautiful villa with garden in the heart of Jayanagar.",
      price: 42000000, // 4.2 Cr
      location: "Jayanagar, Bangalore",
      latitude: 12.9276,
      longitude: 77.5828,
      propertyType: "luxury-villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },

    // Bannerghatta Properties
    {
      title: "Farm Land in Bannerghatta",
      description: "Spacious agricultural land with development potential and modern access.",
      price: 35000000, // 3.5 Cr
      location: "Bannerghatta, Bangalore",
      latitude: 12.8000,
      longitude: 77.5800,
      propertyType: "farm-land",
      bedrooms: null, // Farm lands don't have bedrooms
      bathrooms: null, // Farm lands don't have bathrooms
      area: 2500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Luxury Villa in Bannerghatta",
      description: "Exclusive villa with nature views in Bannerghatta area.",
      price: 45000000, // 4.5 Cr
      location: "Bannerghatta, Bangalore",
      latitude: 12.8003,
      longitude: 77.5803,
      propertyType: "luxury-villas",
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Residential Plot in Bannerghatta",
      description: "Premium residential plot with clear title in Bannerghatta.",
      price: 20000000, // 2.0 Cr
      location: "Bannerghatta, Bangalore",
      latitude: 12.7997,
      longitude: 77.5797,
      propertyType: "residential",
      bedrooms: null, // Plots don't have bedrooms
      bathrooms: null, // Plots don't have bathrooms
      area: 2000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },

    // Additional Locations
    {
      title: "Luxury Villa in Bellandur",
      description: "Exclusive villa with lake views in Bellandur area.",
      price: 48000000, // 4.8 Cr
      location: "Bellandur, Bangalore",
      latitude: 12.9350,
      longitude: 77.6780,
      propertyType: "luxury-villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Premium Apartment in Bellandur",
      description: "Modern apartment with lake proximity in Bellandur.",
      price: 32000000, // 3.2 Cr
      location: "Bellandur, Bangalore",
      latitude: 12.9353,
      longitude: 77.6783,
      propertyType: "apartments",
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Farm Land in Bellandur",
      description: "Spacious agricultural land with lake views and development potential.",
      price: 55000000, // 5.5 Cr
      location: "Bellandur, Bangalore",
      latitude: 12.9347,
      longitude: 77.6777,
      propertyType: "farm-land",
      bedrooms: null, // Farm lands don't have bedrooms
      bathrooms: null, // Farm lands don't have bathrooms
      area: 4000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    }
  ]

  console.log('Seeding properties...')

  for (const property of properties) {
    await prisma.property.create({
      data: property
    })
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 