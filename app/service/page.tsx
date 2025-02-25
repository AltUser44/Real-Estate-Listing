import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Banknote, Calculator } from "lucide-react"
import Link from "next/link"

export default function ServicePage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abstact-hexagon-background-memphis-style_1017-31955.jpg-8G1uhfmTDPG1oHCZvypTC8qqI5UFBn.jpeg')`,
          opacity: 0.9,
        }}
      />

      <div className="relative container py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-lg text-white/80">Comprehensive real estate solutions tailored to your needs</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white/95 backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Buying Properties</h3>
              <p className="mt-2 text-muted-foreground">
                Find your dream home with our extensive property listings and expert guidance
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Selling Properties</h3>
              <p className="mt-2 text-muted-foreground">
                Get the best value for your property with our market analysis
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Banknote className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Property Management</h3>
              <p className="mt-2 text-muted-foreground">Professional management services for property owners</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Investment Planning</h3>
              <p className="mt-2 text-muted-foreground">Strategic investment advice and ROI calculations</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="mx-auto bg-black text-white hover:bg-black/90" asChild>
            <Link href="/consultation">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

