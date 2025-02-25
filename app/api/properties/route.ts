import { NextResponse } from "next/server"
import { mockProperties } from "./mock-data"

// Store API credentials
const BRIDGE_CLIENT_ID = process.env.BRIDGE_CLIENT_ID || ""
const BRIDGE_CLIENT_SECRET = process.env.BRIDGE_CLIENT_SECRET || ""
const BRIDGE_API_URL = process.env.BRIDGE_API_URL || "https://api.bridgedataoutput.com/api/v2/OData/test/Property"

// Validate environment variables
if (!BRIDGE_CLIENT_ID || !BRIDGE_CLIENT_SECRET || !BRIDGE_API_URL) {
  throw new Error("Missing required environment variables for Bridge API")
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get("location")
    const type = searchParams.get("type")
    const priceRange = searchParams.get("price")

    if (!location) {
      return NextResponse.json({
        error: "Location is required",
        properties: [],
      })
    }

    try {
      const url = new URL(BRIDGE_API_URL)
      const filters = [`City eq '${location}'`]

      if (type) {
        const zillowType = mapPropertyType(type)
        filters.push(`PropertyType eq '${zillowType}'`)
      }

      if (priceRange) {
        const [minPrice, maxPrice] = getPriceRange(priceRange)
        filters.push(`ListPrice ge ${minPrice} and ListPrice le ${maxPrice}`)
      }

      url.searchParams.append("access_token", BRIDGE_CLIENT_ID)
      url.searchParams.append("$filter", filters.join(" and "))
      url.searchParams.append("$top", "20")
      url.searchParams.append(
        "$select",
        "ListPrice,BedroomsTotal,BathroomsTotalInteger,LivingArea,PropertyType,City,StateOrProvince,UnparsedAddress,Media"
      )

      console.log("Bridge API URL:", url.toString())

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Basic ${Buffer.from(`${BRIDGE_CLIENT_ID}:${BRIDGE_CLIENT_SECRET}`).toString('base64')}`,
          Accept: "application/json",
        },
      })

      const data = await response.json()
      console.log("Bridge API Response:", data)

      if (!response.ok) {
        throw new Error(`Bridge API error: ${response.status} - ${data.error || response.statusText}`)
      }

      if (!data.value || !Array.isArray(data.value)) {
        return fallbackToMockData(location, type, priceRange, "Invalid API response format")
      }

      const properties = data.value.map((item: any) => ({
        id: item.ListingId || String(Math.random()),
        title: item.UnparsedAddress || "Address not available",
        price: item.ListPrice || 0,
        location: `${item.City || ""}, ${item.StateOrProvince || ""}`.trim(),
        image: item.Media?.[0]?.MediaURL || "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        beds: item.BedroomsTotal || 0,
        baths: item.BathroomsTotalInteger || 0,
        sqft: item.LivingArea || 0,
        type: item.PropertyType || "Not specified",
      }))

      return NextResponse.json({
        properties,
        total: properties.length,
        source: "bridge"
      })

    } catch (apiError) {
      console.error("Bridge API Error:", apiError)
      return fallbackToMockData(
        location, 
        type, 
        priceRange,
        apiError instanceof Error ? apiError.message : "Bridge API error"
      )
    }
  } catch (error) {
    console.error("Properties API Error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to fetch properties",
        properties: [],
      },
      { status: 500 }
    )
  }
}

function getPriceRange(range: string): [number, number] {
  switch (range) {
    case "0-500k":
      return [0, 500000]
    case "500k-1m":
      return [500000, 1000000]
    case "1m-plus":
      return [1000000, Number.MAX_SAFE_INTEGER]
    default:
      return [0, Number.MAX_SAFE_INTEGER]
  }
}

function mapPropertyType(type: string): string {
  const typeMap: Record<string, string> = {
    house: "SingleFamilyResidence",
    apartment: "Apartment",
    condo: "Condominium",
  }
  return typeMap[type.toLowerCase()] || type
}

function fallbackToMockData(location: string, type: string | null, priceRange: string | null, errorMessage: string) {
  let properties = mockProperties.map((property) => ({
    ...property,
    location: `${location}, TX`,
    id: `${property.id}-${Math.random()}`,
  }))

  if (type) {
    properties = properties.filter((property) => 
      property.type.toLowerCase().includes(type.toLowerCase())
    )
  }

  if (priceRange) {
    const [min, max] = getPriceRange(priceRange)
    properties = properties.filter((property) => 
      property.price >= min && property.price <= max
    )
  }

  return NextResponse.json({
    properties,
    total: properties.length,
    source: "mock",
    error: errorMessage,
  })
}

