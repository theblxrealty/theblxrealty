"use client"

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'

interface SavePropertyButtonProps {
  propertyId: string
  className?: string
  onSaveChange?: (isSaved: boolean) => void
}

export default function SavePropertyButton({ propertyId, className = '', onSaveChange }: SavePropertyButtonProps) {
  const { data: session, status } = useSession()
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // Check initial save status when component mounts
  useEffect(() => {
    if (session?.user?.id) {
      checkSaveStatus()
    }
  }, [session?.user?.id])

  const checkSaveStatus = async () => {
    try {
      const response = await fetch(`/api/properties/save?propertyId=${propertyId}`)
      if (response.ok) {
        const data = await response.json()
        setIsSaved(data.isSaved)
      }
    } catch (error) {
      console.error('Error checking save status:', error)
    }
  }

  const handleSaveToggle = async () => {
    if (status === 'loading') return

    if (!session?.user?.id) {
      toast({
        title: "Login Required",
        description: "Please log in to save properties",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/properties/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ propertyId }),
      })

      if (response.ok) {
        const data = await response.json()
        setIsSaved(data.isSaved)
        onSaveChange?.(data.isSaved)
        toast({
          title: data.isSaved ? "Property Saved!" : "Property Unsaved",
          description: data.message,
        })
      } else {
        const errorData = await response.json()
        toast({
          title: "Error",
          description: errorData.error || "Failed to save property",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error saving property:', error)
      toast({
        title: "Error",
        description: "Failed to save property. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleSaveToggle}
      disabled={isLoading || status === 'loading'}
      variant="ghost"
      size="sm"
      className={`flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors font-['Suisse_Intl',sans-serif] ${className}`}
    >
      <Heart 
        className={`h-5 w-5 transition-all duration-200 ${
          isSaved 
            ? 'fill-red-500 text-red-500' 
            : 'fill-transparent'
        }`}
      />
      {isLoading ? 'Saving...' : isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}

