import { Home as HomeIcon, Users, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SearchForm } from "./components/search-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh]">
        <div className="container relative z-10 flex min-h-[85vh] flex-col items-center justify-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Dream Home
          </h1>
          <p className="mt-4 max-w-[600px] text-[#FFDF00] font-bold md:text-xl">
            Explore our curated selection of exquisite properties
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-black hover:bg-black/90 text-white" asChild>
              <Link href="/properties">Buy Home</Link>
            </Button>
          </div>
          
          <SearchForm />
        </div>
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/106653283-1596759492822-MP_RealEstate-dollhouse.jpg-eBCQRMXKOr2ooNK5yPnGQ61WJxLe6H.jpeg"
              alt="Modern home exterior"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t bg-muted/50 py-6">
        <div className="container py-2">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="flex justify-center mb-2">
                <HomeIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold md:text-4xl">8K+</div>
              <div className="mt-2 text-muted-foreground">Homes Available</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold md:text-4xl">6K+</div>
              <div className="mt-2 text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <UserCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold md:text-4xl">2K+</div>
              <div className="mt-2 text-muted-foreground">Expert Agents</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

