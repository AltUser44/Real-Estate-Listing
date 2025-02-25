import type React from "react"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"
import { Header } from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body 
        className={inter.className}
        suppressHydrationWarning
      >
        <div className="relative min-h-screen bg-background">
          <Providers>
            <div suppressHydrationWarning>
              <Header />
            </div>
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  )
}
