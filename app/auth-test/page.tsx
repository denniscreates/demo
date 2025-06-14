"use client"

import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSimpleAuth } from "@/components/simple-auth"
import { SimpleLoginModal } from "@/components/simple-login-modal"
import { useState } from "react"

export default function AuthTestPage() {
  const { user, logout, isLoading } = useSimpleAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Authentication Test</h1>
              <p className="text-muted-foreground">Test the email authentication system</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2">Loading...</p>
                  </div>
                ) : user ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">✅ Logged In Successfully!</h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Name:</strong> {user.name}
                        </p>
                        <p>
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                          <strong>Provider:</strong> {user.provider}
                        </p>
                        <p>
                          <strong>User ID:</strong> {user.id}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={logout} variant="outline">
                        Logout
                      </Button>
                      <Button asChild>
                        <a href="/simple-dashboard">Go to Dashboard</a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Not Logged In</h3>
                      <p className="text-sm text-yellow-700">Click the button below to test the login system.</p>
                    </div>

                    <Button onClick={() => setShowLoginModal(true)} className="w-full">
                      Test Login System
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>How to Test</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Click "Test Login System" or "Sign In" in the header</li>
                  <li>Fill in your name and email address</li>
                  <li>For sign up, you can also add a password (optional)</li>
                  <li>Click "Sign In" or "Create Account"</li>
                  <li>You should see your user info appear above</li>
                  <li>Test logout and login again</li>
                  <li>Refresh the page - you should stay logged in</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <SimpleLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  )
}
