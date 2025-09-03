import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to capitalize first letters of words
export function capitalizeWords(str: string): string {
  if (!str) return str
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

// Helper function to format property types with proper capitalization
export function formatPropertyType(type: string): string {
  if (!type) return 'Property'
  
  // Handle special cases first
  const specialCases: { [key: string]: string } = {
    'luxury villas': 'Luxury Villas',
    'flats': 'Flats',
    'new buildings': 'New Buildings',
    'farm house': 'Farm House',
    'sites': 'Sites',
    'commercial': 'Commercial',
    'investment': 'Investment',
    'apartment villa': 'Apartment Villa',
    'apartment-villa': 'Apartment Villa'
  }
  
  // Check for special cases first
  const lowerType = type.toLowerCase()
  if (specialCases[lowerType]) {
    return specialCases[lowerType]
  }
  
  // Fallback to general capitalization
  return capitalizeWords(type)
}
