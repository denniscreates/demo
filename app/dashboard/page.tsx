"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserDashboard } from "@/components/user-dashboard"
import { AuthModal } from "@/components/auth-modal"
import { useAuth } from "@/components/auth-provider"
import { useLanguage } from "@/components/language-provider"
import { LoadingWrapper } from "@/components/loading-wrapper"
import { useState } from "react"

function DashboardContent() {
  const { user } = useAuth()
  const { t } = useLanguage()
  const [showAuthModal, setShowAuthModal] = useState(!user)

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Access Your Dashboard</h1>
              <p className="text-muted-foreground mb-8">Sign in to view your quotes and manage your projects.</p>
            </div>
          </div>
        </section>
        <Footer />
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} defaultMode="login" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
              <p className="text-muted-foreground">Manage your quotes and track your projects</p>
            </div>

            <UserDashboard />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <LoadingWrapper>
      <DashboardContent />
    </LoadingWrapper>
  )
}
