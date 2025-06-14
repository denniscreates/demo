"use client"

import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSimpleAuth } from "@/components/simple-auth"
import { SimpleLoginModal } from "@/components/simple-login-modal"
import { User, FileText, Clock } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function SimpleDashboardPage() {
  const { user } = useSimpleAuth()
  const [showLoginModal, setShowLoginModal] = useState(!user)

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <SimpleHeader />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Please Sign In</h1>
            <p className="text-muted-foreground mb-8">You need to be logged in to access your dashboard.</p>
            <Button onClick={() => setShowLoginModal(true)}>Sign In</Button>
          </div>
        </section>
        <Footer />
        <SimpleLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
              <p className="text-muted-foreground">Manage your quotes and projects</p>
            </div>

            {/* User Info Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Your Account
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Request Quote
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Get a quote for your HVAC or CAD project.</p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    View Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Explore our HVAC and CAD design services.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/services">View Services</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Our Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">See examples of our completed projects.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Success Message */}
            <Card className="mt-8 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-green-600 text-4xl mb-2">✅</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Authentication Working!</h3>
                  <p className="text-green-700">
                    You are successfully logged in as <strong>{user.name}</strong> with email authentication.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
