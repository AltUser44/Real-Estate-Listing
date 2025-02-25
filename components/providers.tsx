"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { AuthProvider } from "@/lib/auth"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  // Remove this check since it's causing hydration issues
  // if (typeof window === "undefined") return null

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem 
      suppressHydrationWarning
    >
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}

