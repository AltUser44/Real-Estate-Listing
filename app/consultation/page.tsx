"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  address: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
}

export default function ConsultationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Success!",
      description: "Message submitted. We'll get back to you soon.",
      duration: 3000, // Will disappear after 3 seconds
    })

    // Clear form
    setFormData(initialFormData)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-[#E6F3FF] relative flex items-center justify-center p-8">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3d-render-illustration-of-human-hand-typing-on-computer-keyboard-with-cable-and-hand-holding-a-mouse-technology-concept-illustration-for-web-or-app-design-png-pAr1oRiu4BnrkzhIecyk2nAgI53u8c.webp"
          alt="Typing illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Form */}
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white/20 backdrop-blur-md p-8 relative z-10 border border-white/20">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Schedule Consultation</h1>
          <p className="text-gray-600">Fill out the form below and we'll be in touch shortly</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/50 border-white/20"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/50 border-white/20"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white/50 border-white/20"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="bg-white/50 border-white/20"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-black hover:bg-black/90 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  )
}

