export interface Filters {
  location: string
  type: string
  price: string
}

export interface Property {
  id: string
  title: string
  price: number
  location: string
  image: string
  beds: number
  baths: number
  sqft: number
  type: string
} 