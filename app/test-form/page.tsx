"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SimpleTestForm } from "@/components/simple-test-form"

export default function TestFormPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Form Test</h1>
            <p className="text-muted-foreground">Test the Formspree integration</p>
          </div>

          <SimpleTestForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
