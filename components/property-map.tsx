"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

export default function PropertyMap({ location }) {
  const mapRef = useRef(null)

  useEffect(() => {
    // This is a placeholder for an actual map implementation
    // In a real application, you would use a library like Google Maps, Mapbox, or Leaflet

    if (mapRef.current) {
      const canvas = mapRef.current
      const ctx = canvas.getContext("2d")

      // Set canvas dimensions
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // Draw a simple placeholder map
      ctx.fillStyle = "#e5e7eb"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw some roads
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 8

      // Horizontal roads
      for (let i = 1; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height * (i / 5))
        ctx.lineTo(canvas.width, canvas.height * (i / 5))
        ctx.stroke()
      }

      // Vertical roads
      for (let i = 1; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(canvas.width * (i / 5), 0)
        ctx.lineTo(canvas.width * (i / 5), canvas.height)
        ctx.stroke()
      }

      // Draw location marker
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw pin shadow
      ctx.beginPath()
      ctx.arc(centerX, centerY + 5, 10, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fill()

      // Draw pin
      ctx.beginPath()
      ctx.arc(centerX, centerY, 15, 0, Math.PI * 2)
      ctx.fillStyle = "#059669"
      ctx.fill()

      ctx.beginPath()
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
    }
  }, [location])

  return (
    <div className="relative h-full w-full">
      <canvas ref={mapRef} className="w-full h-full rounded-lg"></canvas>
      <div className="absolute top-4 left-4 bg-white py-2 px-4 rounded-md shadow-md flex items-center">
        <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
        <span className="text-sm font-medium">{location}</span>
      </div>
      <div className="absolute bottom-4 right-4 bg-white py-1 px-2 rounded-md shadow-md">
        <span className="text-xs text-gray-500">Map view (placeholder)</span>
      </div>
    </div>
  )
}
