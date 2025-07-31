import PropertyTypeCard from "./property-type-card"

const propertyTypes = [
  {
    title: "Luxury Villas",
    imageSrc: "/property_type/img1.webp",
    href: "/properties?type=luxury-villas",
    alt: "Luxury Villas"
  },
  {
    title: "Flats",
    imageSrc: "/property_type/flats.webp",
    href: "/properties?type=flats",
    alt: "Flats"
  },
  {
    title: "New Building",
    imageSrc: "/property_type/house.webp",
    href: "/properties?type=new-building",
    alt: "New Building"
  },
  {
    title: "Farm House",
    imageSrc: "/property_type/farmhouse.webp",
    href: "/properties?type=farm-house",
    alt: "Farm House"
  },
  {
    title: "Sites",
    imageSrc: "/property_type/farm.webp",
    href: "/properties?type=sites",
    alt: "Sites"
  },
  {
    title: "Commercial",
    imageSrc: "/property_type/property.webp",
    href: "/properties?type=commercial",
    alt: "Commercial Properties"
  },
  {
    title: "Investment",
    imageSrc: "/property_type/img2.webp",
    href: "/properties?type=investment",
    alt: "Investment Properties"
  }
]

export default function PropertyTypesSection() {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-3 lg:px-4">
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 pt-4 px-6 scrollbar-hide">
            {propertyTypes.map((propertyType, index) => (
              <PropertyTypeCard
                key={index}
                title={propertyType.title}
                imageSrc={propertyType.imageSrc}
                href={propertyType.href}
                alt={propertyType.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 