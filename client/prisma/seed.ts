import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample blog posts
  const blogPosts = [
    {
      title: "Complete Guide to Buying Property in Bangalore",
      slug: "complete-guide-buying-property-bangalore",
      excerpt: "Everything you need to know about purchasing residential and commercial properties in Bangalore - from legal checks to financing options.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Buying Guide",
      tags: ["buying", "guide", "bangalore", "property"],
      isPublished: true,
      publishedAt: new Date("2024-03-15"),
    },
    {
      title: "How to Sell Your Property at the Best Price",
      slug: "how-to-sell-property-best-price",
      excerpt: "Expert tips on property valuation, staging, marketing, and negotiation strategies to maximize your property's selling price in Bangalore.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Selling Tips",
      tags: ["selling", "tips", "valuation", "marketing"],
      isPublished: true,
      publishedAt: new Date("2024-03-08"),
    },
    {
      title: "Commercial Real Estate Investment Opportunities",
      slug: "commercial-real-estate-investment-opportunities",
      excerpt: "Explore lucrative commercial property investment options in Bangalore's growing business districts and IT corridors.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Investment",
      tags: ["commercial", "investment", "bangalore", "business"],
      isPublished: true,
      publishedAt: new Date("2024-02-28"),
    },
    {
      title: "Luxury Property Market Trends in Bangalore",
      slug: "luxury-property-market-trends-bangalore",
      excerpt: "Analyze the latest trends in Bangalore's luxury real estate market and discover emerging investment hotspots.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Market Analysis",
      tags: ["luxury", "trends", "market", "bangalore"],
      isPublished: true,
      publishedAt: new Date("2024-02-15"),
    },
    {
      title: "Premium Locations: Where to Invest in 2024",
      slug: "premium-locations-invest-2024",
      excerpt: "Discover Bangalore's most promising premium locations for property investment and understand the factors driving growth.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Investment",
      tags: ["premium", "locations", "investment", "2024"],
      isPublished: true,
      publishedAt: new Date("2024-02-05"),
    },
    {
      title: "Legal Guide to Property Transactions",
      slug: "legal-guide-property-transactions",
      excerpt: "A comprehensive guide to legal aspects of property buying and selling, including documentation and compliance requirements.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Legal",
      tags: ["legal", "guide", "transactions", "documentation"],
      isPublished: true,
      publishedAt: new Date("2024-01-25"),
    },
    {
      title: "Understanding Property Taxes in Bangalore",
      slug: "understanding-property-taxes-bangalore",
      excerpt: "A detailed breakdown of property taxes, stamp duty, and other charges you need to know when buying property in Bangalore.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Legal",
      tags: ["taxes", "stamp-duty", "bangalore", "property"],
      isPublished: true,
      publishedAt: new Date("2024-01-18"),
    },
    {
      title: "Residential vs Commercial Property Investment",
      slug: "residential-vs-commercial-property-investment",
      excerpt: "Compare the pros and cons of investing in residential versus commercial properties in Bangalore's real estate market.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Investment",
      tags: ["residential", "commercial", "investment", "comparison"],
      isPublished: true,
      publishedAt: new Date("2024-01-10"),
    },
    {
      title: "Home Loan Guide for First-Time Buyers",
      slug: "home-loan-guide-first-time-buyers",
      excerpt: "Everything first-time homebuyers need to know about securing a home loan, including eligibility, documents, and tips.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "Buying Guide",
      tags: ["home-loan", "first-time", "buyers", "eligibility"],
      isPublished: true,
      publishedAt: new Date("2024-01-05"),
    }
  ]

  console.log('Creating blog posts...')
  
  for (const blogData of blogPosts) {
    const blogPost = await prisma.blogPost.create({
      data: blogData
    })
    console.log(`Created blog post: ${blogPost.title} (${blogPost.category})`)
  }

  // Create sample properties for each category
  
  // 1. LUXURY VILLAS (5 properties)
  const luxuryVillas = [
    {
      title: "Luxury Villa in Koramangala",
      description: "A rare opportunity to acquire a premium luxury villa in one of Bangalore's most prestigious neighborhoods.",
      price: 32000000, // 3.2 Cr
      location: "Koramangala, Bangalore",
      latitude: 12.9352,
      longitude: 77.6245,
      propertyType: "villa",
      propertyCategory: "luxury villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Premium Villa in Indiranagar",
      description: "Exclusive villa in the heart of Indiranagar with premium amenities and modern design.",
      price: 55000000, // 5.5 Cr
      location: "Indiranagar, Bangalore",
      latitude: 12.9792,
      longitude: 77.6412,
      propertyType: "villa",
      propertyCategory: "luxury villas",
      bedrooms: 5,
      bathrooms: 4,
      area: 3200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Luxury Villa in Whitefield",
      description: "Exclusive villa with private garden and swimming pool in Whitefield tech corridor.",
      price: 52000000, // 5.2 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9692,
      longitude: 77.7499,
      propertyType: "villa",
      propertyCategory: "luxury villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 4500,
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
      propertyType: "villa",
      propertyCategory: "luxury villas",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Luxury Villa in Electronic City",
      description: "Modern luxury villa with smart home features in Electronic City.",
      price: 38000000, // 3.8 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8458,
      longitude: 77.6658,
      propertyType: "villa",
      propertyCategory: "luxury villas",
      bedrooms: 3,
      bathrooms: 3,
      area: 2200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    }
  ]

  // 2. FLATS (5 properties)
  const flats = [
    {
      title: "Modern 3BHK Flat in Koramangala",
      description: "Contemporary 3BHK apartment with modern amenities in Koramangala.",
      price: 22000000, // 2.2 Cr
      location: "Koramangala, Bangalore",
      latitude: 12.9355,
      longitude: 77.6248,
      propertyType: "apartment",
      propertyCategory: "flats",
      bedrooms: 3,
      bathrooms: 2,
      area: 1650,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Premium 2BHK Flat in Indiranagar",
      description: "Modern apartment with premium amenities in the heart of Indiranagar.",
      price: 18000000, // 1.8 Cr
      location: "Indiranagar, Bangalore",
      latitude: 12.9789,
      longitude: 77.6408,
      propertyType: "apartment",
      propertyCategory: "flats",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "4BHK Flat in Whitefield",
      description: "Modern 4BHK apartment with world-class amenities in Whitefield.",
      price: 35000000, // 3.5 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9695,
      longitude: 77.7502,
      propertyType: "apartment",
      propertyCategory: "flats",
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "3BHK Flat in Sarjapur Road",
      description: "Modern apartment with premium amenities in Sarjapur Road.",
      price: 25000000, // 2.5 Cr
      location: "Sarjapur Road, Bangalore",
      latitude: 12.8994,
      longitude: 77.6864,
      propertyType: "apartment",
      propertyCategory: "flats",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "2BHK Flat in Electronic City",
      description: "Affordable 2BHK flat with modern amenities in Electronic City.",
      price: 15000000, // 1.5 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8460,
      longitude: 77.6660,
      propertyType: "apartment",
      propertyCategory: "flats",
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    }
  ]

  // 3. NEW BUILDINGS (5 properties)
  const newBuildings = [
    {
      title: "New Construction Villa in Koramangala",
      description: "Brand new villa under construction with modern architecture and premium finishes.",
      price: 45000000, // 4.5 Cr
      location: "Koramangala, Bangalore",
      latitude: 12.9348,
      longitude: 77.6242,
      propertyType: "villa",
      propertyCategory: "new buildings",
      bedrooms: 4,
      bathrooms: 3,
      area: 3000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "New Apartment Complex in Indiranagar",
      description: "Newly constructed apartment complex with luxury amenities and modern design.",
      price: 28000000, // 2.8 Cr
      location: "Indiranagar, Bangalore",
      latitude: 12.9785,
      longitude: 77.6405,
      propertyType: "apartment",
      propertyCategory: "new buildings",
      bedrooms: 3,
      bathrooms: 2,
      area: 1600,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "New Villa Project in Whitefield",
      description: "New villa project with contemporary design and smart home features.",
      price: 58000000, // 5.8 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9688,
      longitude: 77.7495,
      propertyType: "villa",
      propertyCategory: "new buildings",
      bedrooms: 5,
      bathrooms: 4,
      area: 4000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "New Apartment in Sarjapur Road",
      description: "Newly built apartment with modern amenities and excellent connectivity.",
      price: 32000000, // 3.2 Cr
      location: "Sarjapur Road, Bangalore",
      latitude: 12.8997,
      longitude: 77.6867,
      propertyType: "apartment",
      propertyCategory: "new buildings",
      bedrooms: 3,
      bathrooms: 2,
      area: 1900,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "New Villa in Electronic City",
      description: "Brand new villa with modern amenities and excellent investment potential.",
      price: 42000000, // 4.2 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8455,
      longitude: 77.6655,
      propertyType: "villa",
      propertyCategory: "new buildings",
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    }
  ]

  // 4. FARM HOUSE (5 properties)
  const farmHouses = [
    {
      title: "Farm House in Whitefield",
      description: "Beautiful farm house with agricultural land and modern amenities.",
      price: 65000000, // 6.5 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9685,
      longitude: 77.7490,
      propertyType: "farm-house",
      propertyCategory: "farm house",
      bedrooms: 3,
      bathrooms: 2,
      area: 5500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Farm House in Sarjapur Road",
      description: "Spacious farm house with development potential and modern access.",
      price: 48000000, // 4.8 Cr
      location: "Sarjapur Road, Bangalore",
      latitude: 12.8990,
      longitude: 77.6860,
      propertyType: "farm-house",
      propertyCategory: "farm house",
      bedrooms: 2,
      bathrooms: 2,
      area: 3200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Farm House in Electronic City",
      description: "Modern farm house with agricultural land and investment potential.",
      price: 52000000, // 5.2 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8450,
      longitude: 77.6650,
      propertyType: "farm-house",
      propertyCategory: "farm house",
      bedrooms: 3,
      bathrooms: 2,
      area: 3800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Farm House in Kanakapura Road",
      description: "Traditional farm house with modern amenities and large plot.",
      price: 45000000, // 4.5 Cr
      location: "Kanakapura Road, Bangalore",
      latitude: 12.9200,
      longitude: 77.5500,
      propertyType: "farm-house",
      propertyCategory: "farm house",
      bedrooms: 2,
      bathrooms: 2,
      area: 4200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Farm House in Bannerghatta Road",
      description: "Luxury farm house with agricultural land and scenic views.",
      price: 58000000, // 5.8 Cr
      location: "Bannerghatta Road, Bangalore",
      latitude: 12.8000,
      longitude: 77.5800,
      propertyType: "farm-house",
      propertyCategory: "farm house",
      bedrooms: 3,
      bathrooms: 3,
      area: 4800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    }
  ]

  // 5. SITES (5 properties)
  const sites = [
    {
      title: "Development Plot in Whitefield",
      description: "Prime development plot with excellent connectivity and investment potential.",
      price: 75000000, // 7.5 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9690,
      longitude: 77.7490,
      propertyType: "plot",
      propertyCategory: "sites",
      bedrooms: null,
      bathrooms: null,
      area: 6000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Building Plot in Sarjapur Road",
      description: "Development plot with planning permission and excellent location.",
      price: 55000000, // 5.5 Cr
      location: "Sarjapur Road, Bangalore",
      latitude: 12.8990,
      longitude: 77.6860,
      propertyType: "plot",
      propertyCategory: "sites",
      bedrooms: null,
      bathrooms: null,
      area: 4000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Investment Plot in Electronic City",
      description: "Prime investment plot with excellent development potential.",
      price: 48000000, // 4.8 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8440,
      longitude: 77.6640,
      propertyType: "plot",
      propertyCategory: "sites",
      bedrooms: null,
      bathrooms: null,
      area: 3500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Development Site in Kanakapura Road",
      description: "Large development site with excellent connectivity and growth potential.",
      price: 62000000, // 6.2 Cr
      location: "Kanakapura Road, Bangalore",
      latitude: 12.9190,
      longitude: 77.5490,
      propertyType: "plot",
      propertyCategory: "sites",
      bedrooms: null,
      bathrooms: null,
      area: 5000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Investment Plot in Bannerghatta Road",
      description: "Strategic investment plot with excellent development opportunities.",
      price: 68000000, // 6.8 Cr
      location: "Bannerghatta Road, Bangalore",
      latitude: 12.7990,
      longitude: 77.5790,
      propertyType: "plot",
      propertyCategory: "sites",
      bedrooms: null,
      bathrooms: null,
      area: 5500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    }
  ]

  // 6. COMMERCIAL (5 properties)
  const commercial = [
    {
      title: "Commercial Space in MG Road",
      description: "Prime commercial space in the heart of Bangalore's business district.",
      price: 21000000, // 2.1 Cr
      location: "MG Road, Bangalore",
      latitude: 12.9716,
      longitude: 77.5946,
      propertyType: "commercial",
      propertyCategory: "commercial",
      bedrooms: null,
      bathrooms: 2,
      area: 1200,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Office Space in Indiranagar",
      description: "Modern office space with excellent connectivity and amenities.",
      price: 28000000, // 2.8 Cr
      location: "Indiranagar, Bangalore",
      latitude: 12.9780,
      longitude: 77.6400,
      propertyType: "commercial",
      propertyCategory: "commercial",
      bedrooms: null,
      bathrooms: 3,
      area: 1500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Retail Space in Koramangala",
      description: "Prime retail space in high-traffic commercial area.",
      price: 32000000, // 3.2 Cr
      location: "Koramangala, Bangalore",
      latitude: 12.9340,
      longitude: 77.6230,
      propertyType: "commercial",
      propertyCategory: "commercial",
      bedrooms: null,
      bathrooms: 2,
      area: 1800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Commercial Building in Whitefield",
      description: "Modern commercial building with excellent business potential.",
      price: 45000000, // 4.5 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9680,
      longitude: 77.7480,
      propertyType: "commercial",
      propertyCategory: "commercial",
      bedrooms: null,
      bathrooms: 4,
      area: 2500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Warehouse Space in Electronic City",
      description: "Large warehouse space with excellent logistics connectivity.",
      price: 38000000, // 3.8 Cr
      location: "Electronic City, Bangalore",
      latitude: 12.8430,
      longitude: 77.6630,
      propertyType: "commercial",
      propertyCategory: "commercial",
      bedrooms: null,
      bathrooms: 2,
      area: 3000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    }
  ]

  // 7. INVESTMENT (5 properties)
  const investment = [
    {
      title: "Investment Villa in Koramangala",
      description: "High-return investment property with excellent rental potential.",
      price: 42000000, // 4.2 Cr
      location: "Koramangala, Bangalore",
      latitude: 12.9330,
      longitude: 77.6220,
      propertyType: "villa",
      propertyCategory: "investment",
      bedrooms: 4,
      bathrooms: 3,
      area: 2600,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Investment Apartment in Indiranagar",
      description: "Premium investment apartment with high rental yields.",
      price: 25000000, // 2.5 Cr
      location: "Indiranagar, Bangalore",
      latitude: 12.9770,
      longitude: 77.6390,
      propertyType: "apartment",
      propertyCategory: "investment",
      bedrooms: 3,
      bathrooms: 2,
      area: 1400,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Investment Plot in Whitefield",
      description: "Strategic investment plot with excellent appreciation potential.",
      price: 68000000, // 6.8 Cr
      location: "Whitefield, Bangalore",
      latitude: 12.9670,
      longitude: 77.7470,
      propertyType: "plot",
      propertyCategory: "investment",
      bedrooms: null,
      bathrooms: null,
      area: 4800,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Investment Commercial Space in MG Road",
      description: "High-return commercial investment with excellent business potential.",
      price: 35000000, // 3.5 Cr
      location: "MG Road, Bangalore",
      latitude: 12.9700,
      longitude: 77.5930,
      propertyType: "commercial",
      propertyCategory: "investment",
      bedrooms: null,
      bathrooms: 3,
      area: 2000,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    },
    {
      title: "Investment Farm House in Sarjapur Road",
      description: "Agricultural investment property with development potential.",
      price: 52000000, // 5.2 Cr
      location: "Sarjapur Road, Bangalore",
      latitude: 12.8980,
      longitude: 77.6850,
      propertyType: "farm-house",
      propertyCategory: "investment",
      bedrooms: 2,
      bathrooms: 2,
      area: 3500,
      images: ["/placeholder.svg?height=600&width=800"],
      isActive: true
    }
  ]

  // Combine all properties
  const allProperties = [
    ...luxuryVillas,
    ...flats,
    ...newBuildings,
    ...farmHouses,
    ...sites,
    ...commercial,
    ...investment
  ]

  console.log('Creating properties...')
  
  for (const propertyData of allProperties) {
    const property = await prisma.property.create({
      data: propertyData
    })
    console.log(`Created property: ${property.title} (${propertyData.propertyCategory})`)
  }

  console.log('Seed completed successfully!')
  console.log(`Total properties created: ${allProperties.length}`)
  console.log(`Total blog posts created: ${blogPosts.length}`)
  console.log('Property categories:')
  console.log('- Luxury Villas:', luxuryVillas.length)
  console.log('- Flats:', flats.length)
  console.log('- New Buildings:', newBuildings.length)
  console.log('- Farm Houses:', farmHouses.length)
  console.log('- Sites:', sites.length)
  console.log('- Commercial:', commercial.length)
  console.log('- Investment:', investment.length)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 