"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, ZoomIn, ZoomOut, Navigation } from "lucide-react"

interface PropertyMapProps {
  location: string
}

export default function PropertyMap({ location }: PropertyMapProps) {
  const mapRef = useRef<HTMLCanvasElement>(null)
  const [zoom, setZoom] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (mapRef.current) {
      const canvas = mapRef.current
      const ctx = canvas.getContext("2d")

      if (!ctx) return

      // Set canvas dimensions
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Apply zoom and offset transformations
      ctx.save()
      ctx.translate(offset.x, offset.y)
      ctx.scale(zoom, zoom)

      // Draw background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#f3f4f6")
      gradient.addColorStop(1, "#e5e7eb")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid pattern
      ctx.strokeStyle = "#d1d5db"
      ctx.lineWidth = 1
      const gridSize = 50 * zoom

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw roads
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 12 * zoom

      // Main roads
      const roads = [
        { x1: 0, y1: canvas.height * 0.3, x2: canvas.width, y2: canvas.height * 0.3 },
        { x1: 0, y1: canvas.height * 0.7, x2: canvas.width, y2: canvas.height * 0.7 },
        { x1: canvas.width * 0.3, y1: 0, x2: canvas.width * 0.3, y2: canvas.height },
        { x1: canvas.width * 0.7, y1: 0, x2: canvas.width * 0.7, y2: canvas.height },
      ]

      roads.forEach(road => {
        ctx.beginPath()
        ctx.moveTo(road.x1, road.y1)
        ctx.lineTo(road.x2, road.y2)
        ctx.stroke()
      })

      // Draw buildings
      const buildings = [
        { x: canvas.width * 0.2, y: canvas.height * 0.2, w: 60 * zoom, h: 40 * zoom },
        { x: canvas.width * 0.8, y: canvas.height * 0.2, w: 50 * zoom, h: 35 * zoom },
        { x: canvas.width * 0.1, y: canvas.height * 0.8, w: 70 * zoom, h: 45 * zoom },
        { x: canvas.width * 0.7, y: canvas.height * 0.8, w: 55 * zoom, h: 38 * zoom },
      ]

      buildings.forEach(building => {
        ctx.fillStyle = "#9ca3af"
        ctx.fillRect(building.x, building.y, building.w, building.h)
        
        // Add windows
        ctx.fillStyle = "#fbbf24"
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 2; j++) {
            ctx.fillRect(
              building.x + 10 * zoom + i * 15 * zoom,
              building.y + 8 * zoom + j * 15 * zoom,
              8 * zoom,
              8 * zoom
            )
          }
        }
      })

      // Draw parks
      const parks = [
        { x: canvas.width * 0.4, y: canvas.height * 0.1, r: 25 * zoom },
        { x: canvas.width * 0.6, y: canvas.height * 0.9, r: 20 * zoom },
      ]

      parks.forEach(park => {
        ctx.fillStyle = "#10b981"
        ctx.beginPath()
        ctx.arc(park.x, park.y, park.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw location marker
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw pin shadow
      ctx.beginPath()
      ctx.arc(centerX, centerY + 8, 12 * zoom, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
      ctx.fill()

      // Draw pin
      ctx.beginPath()
      ctx.arc(centerX, centerY, 18 * zoom, 0, Math.PI * 2)
      ctx.fillStyle = "#ef4444"
      ctx.fill()

      ctx.beginPath()
      ctx.arc(centerX, centerY, 10 * zoom, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()

      // Draw pulse effect
      ctx.beginPath()
      ctx.arc(centerX, centerY, 25 * zoom, 0, Math.PI * 2)
      ctx.strokeStyle = "#ef4444"
      ctx.lineWidth = 2 * zoom
      ctx.setLineDash([5 * zoom, 5 * zoom])
      ctx.stroke()
      ctx.setLineDash([])

      ctx.restore()
    }
  }, [location, zoom, offset])

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5))
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div className="relative h-full w-full">
      <canvas 
        ref={mapRef} 
        className="w-full h-full rounded-lg cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="bg-white p-2 rounded-md shadow-md hover:bg-gray-50 transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="h-4 w-4 text-gray-600" />
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white p-2 rounded-md shadow-md hover:bg-gray-50 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {/* Location Info */}
      <div className="absolute top-4 left-4 bg-white py-2 px-4 rounded-md shadow-md flex items-center">
        <MapPin className="h-4 w-4 text-red-500 mr-2" />
        <span className="text-sm font-medium">{location}</span>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded-md shadow-md">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Property</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-400 rounded"></div>
            <span>Buildings</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Parks</span>
          </div>
        </div>
      </div>
    </div>
  )
}
