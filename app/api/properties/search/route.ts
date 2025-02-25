import { NextResponse } from "next/server"
import { mockProperties } from "../mock-data"
import type { Property } from "../mock-data"

interface SearchFilters {
  location: string
  type?: string
  price?: string
  beds?: string
  baths?: string
}

const API_KEY = process.env.ZILLOW_API_KEY || ''

export async function POST(request: Request) {
  let filters: SearchFilters;
  try {
    filters = await request.json()
    const city = filters.location.split(',')[0].trim()

    // Filter mock data based on search criteria
    const filteredMock = mockProperties.filter(p => {
      const matchesCity = p.location.toLowerCase().includes(city.toLowerCase())
      const matchesType = !filters.type || p.type.toLowerCase() === filters.type.toLowerCase()
      const price = p.price
      let matchesPrice = true
      
      if (filters.price === '0-500k') {
        matchesPrice = price <= 500000
      } else if (filters.price === '500k-1m') {
        matchesPrice = price > 500000 && price <= 1000000
      } else if (filters.price === '1m-plus') {
        matchesPrice = price > 1000000
      }

      return matchesCity && matchesType && matchesPrice
    })

    // No properties found for the specific search criteria
    if (filteredMock.length === 0) {
      // Check if the city exists in our mock data
      const cityExists = mockProperties.some(p => 
        p.location.toLowerCase().includes(city.toLowerCase())
      )

      if (!cityExists) {
        return NextResponse.json({
          properties: [],
          error: `We don't have any listings in ${city} yet. Available locations: Austin, Houston, San Diego, San Francisco, New York, Miami, Chicago, and Seattle.`
        })
      }

      // City exists but no matches for type/price
      return NextResponse.json({
        properties: [],
        error: `No ${filters.type || ''} properties found in ${city} ${
          filters.price ? `for price range ${filters.price.replace('k', ',000').replace('m', ' million')}` : ''
        }. Try adjusting your filters or viewing all properties in ${city}.`
      })
    }

    // Properties found matching criteria
    return NextResponse.json({
      properties: filteredMock.map(p => ({
        ...p,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" // Using the provided image
      })),
      message: `Found ${filteredMock.length} properties matching your criteria in ${city}`
    })

  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({
      error: "Something went wrong with your search. Please try again with a different location or filters.",
      properties: []
    })
  }
}

function getPriceRange(priceRange: string): [number, number | null] {
  switch (priceRange) {
    case '0-500k':
      return [0, 500000]
    case '500k-1m':
      return [500000, 1000000]
    case '1m-plus':
      return [1000000, null]
    default:
      return [0, null]
  }
} 