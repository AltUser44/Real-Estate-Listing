"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const params = new URLSearchParams()

    const location = formData.get("location")
    const type = formData.get("type")
    const price = formData.get("price")

    if (location) params.set("location", location.toString())
    if (type) params.set("type", type.toString())
    if (price) params.set("price", price.toString())

    window.location.href = `/properties?${params.toString()}`
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 w-full max-w-4xl rounded-lg bg-white/10 p-4 backdrop-blur-md border border-white/20">
      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <Label htmlFor="location" className="text-white">Location</Label>
          <Input
            id="location"
            name="location"
            placeholder="Enter location"
            className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
        </div>
        <div>
          <Label htmlFor="type" className="text-white">Type</Label>
          <Select name="type">
            <SelectTrigger className="mt-1.5 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="price" className="text-white">Price Range</Label>
          <Select name="price">
            <SelectTrigger className="mt-1.5 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-500k">$0 - $500,000</SelectItem>
              <SelectItem value="500k-1m">$500,000 - $1M</SelectItem>
              <SelectItem value="1m-plus">$1M+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button type="submit" className="w-full bg-black hover:bg-black/90 text-white">
            Search
          </Button>
        </div>
      </div>
    </form>
  )
} 