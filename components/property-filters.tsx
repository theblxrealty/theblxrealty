"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PropertyFilters() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [priceRange, setPriceRange] = useState([5000000, 50000000]) // 50 lakhs to 5 crores

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`
    } else {
      return `₹${(price / 100000).toFixed(0)} L`
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      {/* Basic Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search by location, property name..."
              className="pl-10 border-slate-300 focus:border-navy-500 focus:ring-navy-500"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Select defaultValue="any">
            <SelectTrigger className="w-[120px] border-slate-300 focus:border-navy-500">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white">
            Search
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle advanced filters"
            className="border-slate-300 hover:bg-slate-50"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-navy-900">Price Range</h3>
            <div className="px-2">
              <Slider
                defaultValue={[5000000, 50000000]}
                min={1000000}
                max={100000000}
                step={500000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-6"
              />
              <div className="flex justify-between text-sm text-slate-600">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-navy-900">Bedrooms & Bathrooms</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Select defaultValue="any">
                  <SelectTrigger className="border-slate-300 focus:border-navy-500">
                    <SelectValue placeholder="BHK" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1 BHK</SelectItem>
                    <SelectItem value="2">2 BHK</SelectItem>
                    <SelectItem value="3">3 BHK</SelectItem>
                    <SelectItem value="4">4+ BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select defaultValue="any">
                  <SelectTrigger className="border-slate-300 focus:border-navy-500">
                    <SelectValue placeholder="Baths" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-navy-900">Amenities</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="parking" className="border-navy-600 text-navy-600" />
                <Label htmlFor="parking" className="text-slate-700">
                  Parking
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="gym" className="border-navy-600 text-navy-600" />
                <Label htmlFor="gym" className="text-slate-700">
                  Gym
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pool" className="border-navy-600 text-navy-600" />
                <Label htmlFor="pool" className="text-slate-700">
                  Swimming Pool
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="security" className="border-navy-600 text-navy-600" />
                <Label htmlFor="security" className="text-slate-700">
                  24/7 Security
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-navy-900">More Filters</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="py-2 text-sm font-normal text-slate-700">Location</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="koramangala" className="border-navy-600 text-navy-600" />
                      <Label htmlFor="koramangala" className="text-slate-700">
                        Koramangala
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="indiranagar" className="border-navy-600 text-navy-600" />
                      <Label htmlFor="indiranagar" className="text-slate-700">
                        Indiranagar
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="whitefield" className="border-navy-600 text-navy-600" />
                      <Label htmlFor="whitefield" className="text-slate-700">
                        Whitefield
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hsr" className="border-navy-600 text-navy-600" />
                      <Label htmlFor="hsr" className="text-slate-700">
                        HSR Layout
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-0">
                <AccordionTrigger className="py-2 text-sm font-normal text-slate-700">
                  Property Features
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="furnished" className="border-navy-600 text-navy-600" />
                      <Label htmlFor="furnished" className="text-slate-700">
                        Furnished
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="balcony" className="border-navy-600 text-navy-600" />
                      <Label htmlFor="balcony" className="text-slate-700">
                        Balcony
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="garden" className="border-navy-600 text-navy-600" />
                      <Label htmlFor="garden" className="text-slate-700">
                        Garden
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between">
          <Button variant="outline" size="sm" className="border-slate-300 hover:bg-slate-50 bg-transparent">
            Reset Filters
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white"
          >
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  )
}
