import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

const agents = [
  {
    name: "Sarah Johnson",
    role: "Senior Real Estate Agent",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sarah_Johnson-n0Yz0LgeJp8AmdmvC84lnTnabkMj4t.png",
    email: "sarah.j@dwello.com",
    phone: "(555) 123-4567",
    specialization: "Luxury Homes",
    experience: "10+ years",
  },
  {
    name: "Michael Chen",
    role: "Property Investment Specialist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michael_Chen-YLPtNWmM6Kvz5jfmY8xnIrVtbTzECR.png",
    email: "michael.c@dwello.com",
    phone: "(555) 234-5678",
    specialization: "Commercial Properties",
    experience: "8+ years",
  },
  {
    name: "Emily Rodriguez",
    role: "Residential Property Expert",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emily_Rodriguez-z83LClxg7V75kRsMsDO35B8TW3lvbk.png",
    email: "emily.r@dwello.com",
    phone: "(555) 345-6789",
    specialization: "First-time Buyers",
    experience: "5+ years",
  },
  {
    name: "David Kim",
    role: "Market Analysis Specialist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/David_Kim-XY0rrrsV7nC6flGyySlVWa8kG2pzDc.png",
    email: "david.k@dwello.com",
    phone: "(555) 456-7890",
    specialization: "Property Valuation",
    experience: "7+ years",
  },
]

export default function AgentsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abstract-geometric-wireframe-background_52683-59421.jpg-bga2dClrUhgGUQUnZt0HONAfERemOs.jpeg')`,
        }}
      />
      <div className="absolute inset-0 bg-white/70" /> {/* Semi-transparent overlay */}
      <div className="relative container py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black">Our Expert Agents</h1>
          <p className="mt-4 text-lg text-gray-800">Meet our team of experienced real estate professionals</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <Card
              key={agent.name}
              className="bg-white/95 backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-black">{agent.name}</h3>
                  <p className="text-sm text-gray-600">{agent.role}</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">Specialization: {agent.specialization}</p>
                    <p className="text-sm text-gray-600">Experience: {agent.experience}</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

