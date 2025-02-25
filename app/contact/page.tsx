"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export default function ContactPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="relative min-h-screen">
      {/* Updated Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact_us_2.jpg-itHyc2reNFsbNOXISQQ4DtNve3l8fn.jpeg')`,
          opacity: 0.95,
        }}
      />

      <div className="relative container py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <Card className="bg-white/95 backdrop-blur transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Get in touch with our team for any inquiries or assistance
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Office Address</h3>
                    <p className="text-muted-foreground">123 Real Estate Ave, City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone Number</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Address</h3>
                    <p className="text-muted-foreground">contact@dwello.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full transition-colors hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

