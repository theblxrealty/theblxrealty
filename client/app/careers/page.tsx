"use client"

import { useState } from "react"
import Image from "next/image"
import { Upload, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function CareersPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null as File | null,
    submitted: false,
    loading: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormState((prev) => ({
      ...prev,
      resume: file,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  const positionOptions = [
    "Real Estate Agent",
    "Property Consultant",
    "Sales Manager", 
    "Content Writer",
    "UI/UX Designer",
    "Marketing Specialist",
    "Business Development",
    "Customer Relations",
    "Operations Manager",
    "Administrative Support",
    "Other"
  ]

  const experienceOptions = [
    "Entry Level (0-1 years)",
    "Mid Level (2-5 years)",
    "Senior Level (5-10 years)",
    "Executive Level (10+ years)"
  ]

  if (formState.submitted) {
    return (
      <div className="flex flex-col min-h-screen pt-16">
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center shadow-lg">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
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
                className="h-6 w-6 text-red-600"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>Application Submitted!</h3>
            <p className="text-gray-600 text-sm mb-4 font-['Suisse_Intl',sans-serif]">
              Thank you for your interest in joining our team. We'll review your application and get back to you soon.
            </p>
            <Button
              onClick={() => setFormState((prev) => ({ ...prev, submitted: false }))}
              variant="outline"
              size="sm"
              className="w-full font-['Suisse_Intl',sans-serif]"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/carrer-banner.jpg"
            alt="Join our professional team"
            fill
            className="object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-white">
                {/* Main Heading */}
                <h1 className="font-bold mb-6 font-serif" style={{ fontFamily: 'Tiempos Headline, serif', fontSize: '60px', fontWeight: '400' }}>
                  Join Our Team
                </h1>

                {/* Description */}
                <p className="text-lg text-white mb-8 font-['Suisse_Intl',sans-serif]">
                  Build your career with us in the dynamic world of luxury real estate. We're looking for passionate 
                  professionals to join our growing team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Application Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
                Apply Now
              </h2>
              <p className="text-gray-600 font-['Suisse_Intl',sans-serif]">
                Tell us about yourself and the role you're interested in. We'd love to hear from you!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-['Suisse_Intl',sans-serif] font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="mt-1 font-['Suisse_Intl',sans-serif]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-sm font-['Suisse_Intl',sans-serif] font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="mt-1 font-['Suisse_Intl',sans-serif]"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-['Suisse_Intl',sans-serif] font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="mt-1 font-['Suisse_Intl',sans-serif]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-['Suisse_Intl',sans-serif] font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+44 123 456 7890"
                  className="mt-1 font-['Suisse_Intl',sans-serif]"
                  required
                />
              </div>

              {/* Position and Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-['Suisse_Intl',sans-serif] font-medium">
                    Position of Interest *
                  </Label>
                  <Select
                    value={formState.position}
                    onValueChange={(value) => handleSelectChange('position', value)}
                  >
                    <SelectTrigger className="mt-1 font-['Suisse_Intl',sans-serif]">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {positionOptions.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-['Suisse_Intl',sans-serif] font-medium">
                    Experience Level *
                  </Label>
                  <Select
                    value={formState.experience}
                    onValueChange={(value) => handleSelectChange('experience', value)}
                  >
                    <SelectTrigger className="mt-1 font-['Suisse_Intl',sans-serif]">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceOptions.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-sm font-['Suisse_Intl',sans-serif] font-medium">
                  Tell us about your interests and qualifications *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Share your relevant experience, skills, and why you're interested in joining our team..."
                  rows={5}
                  className="mt-1 font-['Suisse_Intl',sans-serif] resize-none"
                  required
                />
              </div>

              {/* Resume Upload */}
              <div>
                <Label htmlFor="resume" className="text-sm font-['Suisse_Intl',sans-serif] font-medium">
                  Resume/CV <span className="text-gray-400">(optional)</span>
                </Label>
                <div className="mt-1">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="resume"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500 font-['Suisse_Intl',sans-serif]">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 font-['Suisse_Intl',sans-serif]">
                          PDF, DOC, or DOCX (MAX. 5MB)
                        </p>
                        {formState.resume && (
                          <p className="mt-2 text-sm text-red-600 font-['Suisse_Intl',sans-serif]">
                            Selected: {formState.resume.name}
                          </p>
                        )}
                      </div>
                      <input
                        id="resume"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={formState.loading}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 font-['Suisse_Intl',sans-serif] font-medium transition-colors"
                >
                  {formState.loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </div>

              {/* Privacy Notice */}
              <div className="pt-4 text-center">
                <p className="text-xs text-gray-600 font-['Suisse_Intl',sans-serif]">
                  By submitting this application, you agree to our{" "}
                  <a href="/privacy" className="font-bold text-black underline">Privacy Policy</a> and{" "}
                  <a href="/terms" className="font-bold text-black underline">Terms of Service</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}