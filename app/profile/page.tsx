"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserProfile } from "@/components/user-profile"
import { useLanguage } from "@/components/language-provider"

export default function ProfilePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
              <p className="text-muted-foreground">Manage your quotes and project information</p>
            </div>

            <UserProfile />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
