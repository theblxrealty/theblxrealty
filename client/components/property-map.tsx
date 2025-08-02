"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation, Home, Building } from "lucide-react"
import { Loader } from "@googlemaps/js-api-loader"

interface Property {
  id: string
  title: string
  address: string
  price: string
  type: string
  coordinates: { lat: number; lng: number }
}

interface PropertyMapProps {
  properties: Property[]
  center?: { lat: number; lng: number }
  zoom?: number
  height?: string
  onPropertyHover?: (propertyId: string) => void
  onPropertyLeave?: () => void
}

export default function PropertyMap({
  properties,
  center = { lat: 12.9716, lng: 77.5946 }, // Bangalore coordinates
  zoom = 12,
  height = "400px",
  onPropertyHover,
  onPropertyLeave
}: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [markers, setMarkers] = useState<google.maps.Marker[]>([])
  const [infoWindows, setInfoWindows] = useState<google.maps.InfoWindow[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [hoveredPropertyId, setHoveredPropertyId] = useState<string | null>(null)

  useEffect(() => {
    const initMap = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Check if Google Maps API key is available
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || process.env.GOOGLE_MAPS_API
        if (!apiKey) {
          throw new Error("Google Maps API key not found")
        }

        const loader = new Loader({
          apiKey,
          version: "weekly",
          libraries: ["places"]
        })

        const google = await loader.load()
        
        if (!mapRef.current) return

        // Create map instance
        const mapInstance = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#c9c9c9" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9c9c9c" }]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#757575" }]
            },
            {
              featureType: "poi",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "landscape",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "landscape",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#c9c9c9" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#616161" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#e5e5e5" }]
            },
            {
              featureType: "transit",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }]
            },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ color: "#bdbdbd" }]
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#eeeeee" }]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#e5e5e5" }]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }]
            }
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: true,
          gestureHandling: "cooperative"
        })

        // Create markers for each property
        const markerInstances: google.maps.Marker[] = []
        const infoWindowInstances: google.maps.InfoWindow[] = []

        properties.forEach((property, index) => {
          // Create custom marker icon - location pin design
          const getMarkerIcon = () => {
            return {
              url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C12.13 2 9 5.13 9 9C9 14.25 16 22 16 22C16 22 23 14.25 23 9C23 5.13 19.87 2 16 2ZM16 11.5C14.62 11.5 13.5 10.38 13.5 9C13.5 7.62 14.62 6.5 16 6.5C17.38 6.5 18.5 7.62 18.5 9C18.5 10.38 17.38 11.5 16 11.5Z" fill="#dc2626"/>
                </svg>
              `),
              scaledSize: new google.maps.Size(32, 32),
              anchor: new google.maps.Point(16, 32)
            }
          }

          // Create marker
          const marker = new google.maps.Marker({
            position: property.coordinates,
            map: mapInstance,
            title: property.title,
            icon: getMarkerIcon()
          })

          // Create info window
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 16px; max-width: 280px; font-family: 'Suisse Intl', sans-serif;">
                <div style="margin-bottom: 12px;">
                  <h3 style="margin: 0 0 8px 0; color: #1e293b; font-weight: 600; font-size: 14px;">${property.title}</h3>
                  <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px; line-height: 1.4;">${property.address}</p>
                  <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="color: #d97706; font-weight: 600; font-size: 14px;">${property.price}</span>
                    <span style="color: #475569; font-size: 12px; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">${property.type}</span>
                  </div>
                </div>
                <div style="border-top: 1px solid #e2e8f0; padding-top: 8px;">
                  <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${property.coordinates.lat},${property.coordinates.lng}&travelmode=driving', '_blank')" style="background: #d97706; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; width: 100%;">
                    Get Directions
                  </button>
                </div>
              </div>
            `
          })

          // Add click listener to marker
          marker.addListener("click", () => {
            // Close all other info windows
            infoWindowInstances.forEach(iw => iw.close())
            infoWindow.open(mapInstance, marker)
            setSelectedProperty(property)
          })

          markerInstances.push(marker)
          infoWindowInstances.push(infoWindow)
        })

        setMap(mapInstance)
        setMarkers(markerInstances)
        setInfoWindows(infoWindowInstances)
        setIsLoading(false)

      } catch (err) {
        console.error("Error loading Google Maps:", err)
        setError("Failed to load map. Please try again later.")
        setIsLoading(false)
      }
    }

    // Only initialize map if we have properties
    if (properties.length > 0) {
      initMap()
    } else {
      setIsLoading(false)
    }
  }, [properties, center, zoom]) // Removed hoveredPropertyId from dependencies to prevent map refresh

  // Effect to handle marker size changes on hover
  useEffect(() => {
    if (!map || markers.length === 0) return

    markers.forEach((marker, index) => {
      const property = properties[index]
      if (!property) return

      const isHovered = hoveredPropertyId === property.id
      const size = isHovered ? 40 : 32
      const color = isHovered ? "#1e40af" : "#dc2626" // Blue on hover, red normally

      const icon = {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
          <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${size/2}" cy="${size/2}" r="${size/2 * 0.8}" fill="${color}"/>
            <circle cx="${size/2}" cy="${size/2}" r="${size/2 * 0.4}" fill="white"/>
            <circle cx="${size/2}" cy="${size/2}" r="${size/2 * 0.2}" fill="${color}"/>
          </svg>
        `),
        scaledSize: new google.maps.Size(size, size),
        anchor: new google.maps.Point(size/2, size)
      }

      marker.setIcon(icon)
    })
  }, [hoveredPropertyId, markers, properties, map])

  const handlePropertySelect = (property: Property) => {
    if (map) {
      map.setCenter(property.coordinates)
      map.setZoom(16)
      setSelectedProperty(property)
      
      // Find and open the corresponding info window
      const markerIndex = properties.findIndex(p => p.id === property.id)
      if (markerIndex >= 0 && infoWindows[markerIndex]) {
        infoWindows.forEach(iw => iw.close())
        infoWindows[markerIndex].open(map, markers[markerIndex])
      }
    }
  }

  const handleDirections = (property: Property) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${property.coordinates.lat},${property.coordinates.lng}&travelmode=driving`
    window.open(url, "_blank")
  }

  const handlePropertyHover = (propertyId: string) => {
    setHoveredPropertyId(propertyId)
    onPropertyHover?.(propertyId)
  }

  const handlePropertyLeave = () => {
    setHoveredPropertyId(null)
    onPropertyLeave?.()
  }

  return (
    <div className="relative w-full bg-slate-100 rounded-2xl overflow-hidden" style={{ height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto mb-4"></div>
            <p className="text-slate-600 font-medium">Loading property map...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
          <div className="text-center p-6">
            <div className="text-red-500 mb-4">
              <MapPin className="h-12 w-12 mx-auto" />
            </div>
            <p className="text-slate-600 font-medium mb-2">Map unavailable</p>
            <p className="text-slate-500 text-sm">{error}</p>
          </div>
        </div>
      )}

      <div ref={mapRef} className="w-full h-full" />

      {/* Property List Overlay */}
      {properties.length > 0 && (
        <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg border border-slate-200 p-3 max-w-xs">
          <div className="flex items-center mb-3">
            <Building className="h-4 w-4 text-gold-600 mr-2" />
            <span className="text-sm font-medium text-navy-900">Properties ({properties.length})</span>
          </div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {properties.map((property) => (
              <div
                key={property.id}
                className={`p-2 rounded-lg cursor-pointer transition-colors ${
                  selectedProperty?.id === property.id
                    ? "bg-gold-50 border border-gold-200"
                    : "hover:bg-slate-50"
                }`}
                onClick={() => handlePropertySelect(property)}
                onMouseEnter={() => handlePropertyHover(property.id)}
                onMouseLeave={handlePropertyLeave}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-navy-900 truncate">{property.title}</h4>
                    <p className="text-xs text-slate-600 truncate">{property.address}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs font-semibold text-gold-600">{property.price}</span>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {property.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDirections(property)
                    }}
                    className="ml-2 p-1 text-slate-400 hover:text-gold-600 transition-colors"
                  >
                    <Navigation className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
