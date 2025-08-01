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
    error: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true, error: "" }))

    try {
      const response = await fetch('/api/career-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          phone: formState.phone,
          position: formState.position,
          experience: formState.experience,
          message: formState.message,
          resume: formState.resume,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setFormState((prev) => ({
          ...prev,
          submitted: true,
          loading: false,
          error: "",
        }))
      } else {
        console.error('Form submission failed:', data.error)
        setFormState((prev) => ({ 
          ...prev, 
          loading: false,
          error: data.error || 'Form submission failed. Please try again.'
        }))
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormState((prev) => ({ 
        ...prev, 
        loading: false,
        error: 'Network error. Please check your connection and try again.'
      }))
    }
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
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-16 z-50">
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
    )
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image - Full Height */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/carrer-banner.jpg"
          alt="Join our professional team"
          fill
          className="object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-16">
        {/* Content Section */}
        <div className="flex items-center justify-center p-4 py-16 lg:py-24 min-h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
            {/* Left Side - Title and Description */}
            <div className="flex flex-col justify-center text-white lg:pr-8">
              <h1 className="font-bold mb-6 font-serif text-4xl lg:text-6xl" style={{ fontFamily: 'Tiempos Headline, serif', fontWeight: '400' }}>
                Join Our Team
              </h1>
              <p className="text-lg mb-6 font-['Suisse_Intl',sans-serif] leading-relaxed">
                Build your career with us in the dynamic world of luxury real estate. We're looking for passionate 
                professionals to join our growing team.
              </p>
            </div>

            {/* Right Side - Application Form */}
            <div className="flex items-start lg:items-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 w-full shadow-2xl">
                  <div className="mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
                      Apply Now
                    </h2>
                    <p className="text-gray-600 font-['Suisse_Intl',sans-serif] text-sm">
                      Tell us about yourself and the role you're interested in.
                    </p>
                  </div>

              {/* Error Display */}
              {formState.error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
                  <p className="text-red-600 text-sm font-['Suisse_Intl',sans-serif]">
                    {formState.error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    rows={4}
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
                    <label
                      htmlFor="resume"
                      className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-2 pb-2">
                        <Upload className="w-6 h-6 mb-2 text-gray-500" />
                        <p className="mb-1 text-sm text-gray-500 font-['Suisse_Intl',sans-serif]">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 font-['Suisse_Intl',sans-serif]">
                          PDF, DOC, or DOCX (MAX. 5MB)
                        </p>
                        {formState.resume && (
                          <p className="mt-1 text-sm text-red-600 font-['Suisse_Intl',sans-serif]">
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

                {/* Submit Button */}
                <div className="pt-4">
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
                <div className="pt-2 text-center">
                  <p className="text-xs text-gray-600 font-['Suisse_Intl',sans-serif]">
                    By submitting this application, you agree to our{" "}
                    <a href="/privacy" className="font-bold text-black underline">Privacy Policy</a> and{" "}
                    <a href="/terms" className="font-bold text-black underline">Terms of Service</a>.
                  </p>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}