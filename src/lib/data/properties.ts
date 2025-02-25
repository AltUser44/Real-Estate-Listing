export interface Property {
  id: string
  title: string
  price: number
  location: string
  image: string
  beds: number
  baths: number
  sqft: number
  type: 'house' | 'apartment' | 'condo'
}

export const mockProperties: Property[] = [
  // ... your existing mock data
] 