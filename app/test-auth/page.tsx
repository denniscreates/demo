"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/components/auth-provider"
import { AuthModal } from "@/components/auth-modal"
import { useState } from "react"

export default function TestAuthPage() {
  const { user, quotes, logout, addQuote, isLoading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleAddTestQuote = () => {
    addQuote({
      serviceType: "HVAC Installation",
      projectDetails: "Test quote for a 3-bedroom house HVAC system installation.",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Authentication Test</h1>
              <p className="text-muted-foreground">Test the login/signup functionality</p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <p>Loading...</p>
                ) : user ? (
                  <div className="space-y-4">
                    <div>
                      <strong>Logged in as:</strong> {user.name} ({user.email})
                    </div>
                    <div>
                      <strong>Provider:</strong> {user.provider}
                    </div>
                    <div>
                      <strong>User ID:</strong> {user.id}
                    </div>
                    <div>
                      <strong>Quotes:</strong> {quotes.length}
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleAddTestQuote}>Add Test Quote</Button>
                      <Button variant="outline" onClick={logout}>
                        Logout
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>Not logged in</p>
                    <Button onClick={() => setShowAuthModal(true)}>Login / Sign Up</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {quotes.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Quotes ({quotes.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quotes.map((quote) => (
                      <div key={quote.id} className="p-3 border rounded">
                        <div className="font-medium">{quote.serviceType}</div>
                        <div className="text-sm text-muted-foreground">{quote.projectDetails}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Status: {quote.status} | Submitted: {new Date(quote.submittedAt).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  )
}
