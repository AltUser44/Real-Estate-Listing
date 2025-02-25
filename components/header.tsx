"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth"

export function Header() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Dwello</span>
        </Link>
        <nav className="flex flex-1 items-center justify-between space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-6">
            <Link href="/" className={pathname === "/" ? "text-foreground" : "text-muted-foreground"}>
              Home
            </Link>
            <Link href="/service" className={pathname === "/service" ? "text-foreground" : "text-muted-foreground"}>
              Service
            </Link>
            <Link href="/agents" className={pathname === "/agents" ? "text-foreground" : "text-muted-foreground"}>
              Agents
            </Link>
            <Link href="/properties" className={pathname === "/properties" ? "text-foreground" : "text-muted-foreground"}>
              Properties
            </Link>
            <Link href="/contact" className={pathname === "/contact" ? "text-foreground" : "text-muted-foreground"}>
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Button variant="ghost" onClick={() => signOut()}>
                  Sign Out
                </Button>
                <Button>Dashboard</Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

