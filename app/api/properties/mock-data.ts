export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "house" | "apartment" | "condo";
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern House",
    price: 450000,
    location: "Austin, TX",
    image: "/images/house1.png",
    beds: 3,
    baths: 2,
    sqft: 2000,
    type: "house",
  },
  {
    id: "2",
    title: "Luxury Condo",
    price: 750000,
    location: "Houston, TX",
    image: "/images/1d006e9124ccb40da0610b37e0609ac0-p_e.png",
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: "condo",
  },
  {
    id: "3",
    title: "Beach House",
    price: 1200000,
    location: "San Diego, CA",
    image: "/images/34d6cd66337a5f2376ccfcab4c199346-p_e.png",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
  },
  {
    id: "4",
    title: "Apartment",
    price: 850000,
    location: "Silicon Valley, CA",
    image: "/images/b56e2b8c0e90233a9e4be636cf9283fa-p_e.png",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "apartment",
  },
  {
    id: "5",
    title: "Downtown Apartment",
    price: 600000,
    location: "Chicago, IL",
    image: "/images/20984e412de78db5b8e03e0fd30b015f-p_e.png",
    beds: 2,
    baths: 2,
    sqft: 1400,
    type: "apartment",
  },
  {
    id: "6",
    title: "Beach House",
    price: 1500000,
    location: "Miami, FL",
    image: "/images/cef92e6cc76ec2007944c4dfcbbd7ed9-p_e.png",
    beds: 4,
    baths: 4,
    sqft: 3000,
    type: "house",
  },
  {
    id: "7",
    title: "Modern House",
    price: 950000,
    location: "Seattle, WA",
    image: "/images/c646f67d13bcf7c8f06e2d4ef451b11e-p_e.png",
    beds: 3,
    baths: 2,
    sqft: 2200,
    type: "house",
  },
];
