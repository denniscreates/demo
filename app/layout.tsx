import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { SimpleAuthProvider } from "@/components/simple-auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Termo Glob - HVAC & CAD Engineering Solutions",
  description:
    "Premier engineering and consulting company in Kosovo specializing in HVAC systems and CAD project design.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <SimpleAuthProvider>{children}</SimpleAuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
