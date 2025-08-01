"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Send, User, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormState {
  name: string
  email: string
  phone: string
  message: string
  loading: boolean
  submitted: boolean
  error: string
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    loading: false,
    submitted: false,
    error: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true }))

    try {
      const response = await fetch('/api/contact-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setFormState((prev) => ({ ...prev, loading: false, submitted: true, error: "" }))
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

  if (formState.submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Thank you for contacting us. Our team will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setFormState((prev) => ({ ...prev, submitted: false }))}
          variant="outlineNavy"
        >
          Send Another Inquiry
        </Button>
      </motion.div>
    )
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Get in Touch</h3>
        <p className="text-slate-600 dark:text-slate-300">
          Ready to start your luxury property journey? Let's discuss your requirements.
        </p>
      </div>

      {/* Error Display */}
      {formState.error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-6">
          <p className="text-red-600 text-sm">
            {formState.error}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
          <Input
            type="text"
            placeholder="Your Name"
            value={formState.name}
            onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
            required
            className="pl-10 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
          <Input
            type="email"
            placeholder="Email Address"
            value={formState.email}
            onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
            required
            className="pl-10 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formState.phone}
            onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
            required
            className="pl-10 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
          <Textarea
            placeholder="Tell us about your property requirements..."
            value={formState.message}
            onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
            required
            rows={4}
            className="pl-10 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="navy"
          className="w-full"
          disabled={formState.loading}
        >
          {formState.loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Inquiry
            </>
          )}
        </Button>
      </form>


    </div>
  )
}
