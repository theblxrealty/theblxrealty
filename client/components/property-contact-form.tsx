"use client"

import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PropertyContactForm({ propertyTitle }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${propertyTitle}. Please provide more information.`,
    contactPreference: "email",
    date: "",
    time: "",
    submitted: false,
    loading: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (value) => {
    setFormState((prev) => ({
      ...prev,
      contactPreference: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true }))

    // Simulate form submission
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
      }))
    }, 1500)
  }

  if (formState.submitted) {
    return (
      <div className="text-center py-4">
        <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-emerald-600"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-2">Request Sent!</h3>
        <p className="text-gray-600 text-sm mb-4">We've received your inquiry and will get back to you shortly.</p>
        <Button
          onClick={() => setFormState((prev) => ({ ...prev, submitted: false }))}
          variant="outline"
          size="sm"
          className="w-full"
        >
          Send Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" name="name" value={formState.name} onChange={handleChange} required placeholder="John Doe" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <Label>Preferred Contact Method</Label>
          <RadioGroup value={formState.contactPreference} onValueChange={handleRadioChange} className="flex gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email" className="cursor-pointer">
                Email
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="phone" />
              <Label htmlFor="phone" className="cursor-pointer">
                Phone
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={3} />
        </div>

        <div className="pt-2 border-t">
          <div className="text-sm font-medium mb-3">Schedule a Viewing</div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="date" name="date" value={formState.date} onChange={handleChange} className="pl-10" />
              </div>
            </div>
            <div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Select
                  value={formState.time}
                  onValueChange={(value) => setFormState((prev) => ({ ...prev, time: value }))}
                >
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={formState.loading}>
        {formState.loading ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Request Information"
        )}
      </Button>
    </form>
  )
}
