"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "buying",
    propertyType: "",
    budget: "",
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
      interest: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
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
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-gold-600" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-navy-900">Thank You!</h3>
        <p className="text-slate-600 mb-6">
          Your inquiry has been received. Our property expert will contact you shortly.
        </p>
        <Button
          onClick={() => setFormState((prev) => ({ ...prev, submitted: false }))}
          variant="outline"
          className="border-navy-600 text-navy-600 hover:bg-navy-50"
        >
          Send Another Inquiry
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-navy-900">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="border-slate-300 focus:border-navy-500 focus:ring-navy-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-navy-900">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="border-slate-300 focus:border-navy-500 focus:ring-navy-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-navy-900">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="border-slate-300 focus:border-navy-500 focus:ring-navy-500"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-navy-900">I'm interested in:</Label>
          <RadioGroup value={formState.interest} onValueChange={handleRadioChange} className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buying" id="buying" className="border-navy-600 text-navy-600" />
              <Label htmlFor="buying" className="cursor-pointer text-slate-700">
                Buying a property
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="selling" id="selling" className="border-navy-600 text-navy-600" />
              <Label htmlFor="selling" className="cursor-pointer text-slate-700">
                Selling a property
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="investment" id="investment" className="border-navy-600 text-navy-600" />
              <Label htmlFor="investment" className="cursor-pointer text-slate-700">
                Property investment
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-navy-900">Property Type</Label>
            <Select value={formState.propertyType} onValueChange={(value) => handleSelectChange("propertyType", value)}>
              <SelectTrigger className="border-slate-300 focus:border-navy-500">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="land">Land/Plot</SelectItem>
                <SelectItem value="investment">Investment Property</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-navy-900">Budget Range</Label>
            <Select value={formState.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
              <SelectTrigger className="border-slate-300 focus:border-navy-500">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-50l">Under ₹50 Lakhs</SelectItem>
                <SelectItem value="50l-1cr">₹50L - ₹1 Crore</SelectItem>
                <SelectItem value="1cr-2cr">₹1 - ₹2 Crores</SelectItem>
                <SelectItem value="2cr-5cr">₹2 - ₹5 Crores</SelectItem>
                <SelectItem value="above-5cr">Above ₹5 Crores</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-navy-900">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your property requirements..."
            rows={4}
            className="border-slate-300 focus:border-navy-500 focus:ring-navy-500"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white"
        disabled={formState.loading}
      >
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
          <span className="flex items-center">
            Send Inquiry <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  )
}
