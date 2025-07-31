"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

export default function ContactMap() {
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

      // Draw a simple placeholder map with premium styling
      ctx.fillStyle = "#f1f5f9"
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

      // Draw blocks with premium colors
      ctx.fillStyle = "#e2e8f0"
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if ((i + j) % 2 === 0) {
            ctx.fillRect(
              canvas.width * (i / 5) + 8,
              canvas.height * (j / 5) + 8,
              canvas.width / 5 - 16,
              canvas.height / 5 - 16,
            )
          }
        }
      }

      // Draw location marker with premium styling
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw pin shadow
      ctx.beginPath()
      ctx.arc(centerX, centerY + 5, 15, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fill()

      // Draw pin with gold color
      ctx.beginPath()
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2)
      ctx.fillStyle = "#d97706"
      ctx.fill()

      ctx.beginPath()
      ctx.arc(centerX, centerY, 10, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()

      // Add some building labels with premium styling
      ctx.font = "14px Arial"
      ctx.fillStyle = "#1e293b"
      ctx.textAlign = "center"

      ctx.fillText("Luxury Mall", canvas.width * 0.2, canvas.height * 0.2)
      ctx.fillText("Business District", canvas.width * 0.8, canvas.height * 0.2)
      ctx.fillText("11Square Office", centerX, centerY - 30)
      ctx.fillText("Premium Residences", canvas.width * 0.2, canvas.height * 0.8)
      ctx.fillText("Corporate Hub", canvas.width * 0.8, canvas.height * 0.8)
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <canvas ref={mapRef} className="w-full h-full"></canvas>
      <div className="absolute top-4 left-4 bg-white py-2 px-4 rounded-xl shadow-lg flex items-center border border-slate-200">
        <MapPin className="h-4 w-4 text-gold-600 mr-2" />
        <span className="text-sm font-medium text-navy-900">11Square Premium Office</span>
      </div>
      <div className="absolute bottom-4 right-4 bg-white py-1 px-2 rounded-md shadow-lg border border-slate-200">
        <span className="text-xs text-slate-500">Map view (placeholder)</span>
      </div>
    </div>
  )
}
