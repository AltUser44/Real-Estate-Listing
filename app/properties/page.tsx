"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { mockProperties } from "@/app/api/properties/mock-data"
import type { Property } from "@/app/api/properties/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, Square, Search } from "lucide-react"
import Image from "next/image"
import { AuthCheck } from "@/components/auth-check"

interface Filters {
  location: string
  type: string
  price: string
  beds?: string
  baths?: string
}

interface SearchResponse {
  properties: Property[]
  message?: string
  error?: string
}

export default function PropertiesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [properties, setProperties] = useState<Property[]>(mockProperties)
  const [searchResponse, setSearchResponse] = useState<SearchResponse>({ properties: mockProperties })
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState<Filters>({
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    price: searchParams.get("price") || "",
    beds: searchParams.get("beds") || "",
    baths: searchParams.get("baths") || "",
  })

  const searchProperties = async (filters: Filters) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/properties/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filters),
      })

      const data: SearchResponse = await response.json()
      setSearchResponse(data)
      setProperties(data.properties)

      if (data.error) {
        toast({
          title: "Search Notice",
          description: data.error,
          variant: "default",
        })
      }
    } catch (error) {
      console.error('Search error:', error)
      toast({
        title: "Search Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!filters.location) {
      toast({
        title: "Location Required",
        description: "Please enter a location to search for properties.",
        variant: "destructive",
      })
      return
    }

    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    router.push(`/properties?${params.toString()}`)
    searchProperties(filters)
  }

  return (
    <AuthCheck>
      <div className="min-h-screen relative bg-[#EEF7FF]">
        {/* Hero Section with Search */}
        <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-400">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blueprint-d-house-plan-architecture-design-blue-technology-background-vector-illustration-53654464-Yu6Wo7JwWgdv1EfngxOMqgj6UJGgOp.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="container mx-auto px-4 py-20 relative">
            <h1 className="text-4xl font-bold text-white mb-4">Available Properties</h1>
            <p className="text-white/90 mb-8">Find your perfect home from our curated selection</p>
            
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5">
                  <Input
                    placeholder="Enter location (e.g., Austin, TX)"
                    value={filters.location}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full"
                    required
                  />
                </div>
                <div className="md:col-span-3">
                  <Select value={filters.type} onValueChange={(value: string) => setFilters(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-3">
                  <Select value={filters.price} onValueChange={(value: string) => setFilters(prev => ({ ...prev, price: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-500k">Under $500k</SelectItem>
                      <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                      <SelectItem value="1m-plus">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-1">
                  <Button 
                    type="submit" 
                    className="w-full bg-black hover:bg-black/90"
                    disabled={loading}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Results Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Error Message Display */}
          {searchResponse.error && (
            <div className="mb-8 p-6 bg-white/80 backdrop-blur rounded-lg shadow-lg text-center">
              <p className="text-gray-600">{searchResponse.error}</p>
            </div>
          )}

          {/* Success Message Display */}
          {searchResponse.message && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800">{searchResponse.message}</h2>
            </div>
          )}

          {/* Properties Grid */}
          {properties.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden transition-transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="aspect-video relative w-full h-[300px] relative">
                      <Image
                        src={property.image}
                        alt={property.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-t-lg"
                        priority={true}
                        unoptimized={true}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                      <p className="text-2xl font-bold mb-4">${property.price.toLocaleString()}</p>
                      <p className="text-muted-foreground mb-4">{property.location}</p>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-2" />
                          {property.beds} beds
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-2" />
                          {property.baths} baths
                        </div>
                        <div className="flex items-center">
                          <Square className="w-4 h-4 mr-2" />
                          {property.sqft.toLocaleString()} sqft
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </AuthCheck>
  )
}

