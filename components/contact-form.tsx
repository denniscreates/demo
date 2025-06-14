"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { useSimpleAuth } from "./simple-auth"
import { CheckCircle, AlertCircle } from "lucide-react"

interface ContactFormProps {
  formId: string
}

export function ContactForm({ formId }: ContactFormProps) {
  const { t } = useLanguage()
  const { user } = useSimpleAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        const data = await response.json()
        if (data.errors) {
          setError(data.errors.map((error: any) => error.message).join(", "))
        } else {
          setError("There was a problem submitting your form. Please try again.")
        }
      }
    } catch (err) {
      setError("There was a problem submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Your message has been received. We'll get back to you as soon as possible.
          {user && " You can track this quote in your dashboard."}
        </p>
        <div className="flex gap-3 justify-center">
          <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
          {user && (
            <Button variant="outline" asChild>
              <a href="/simple-dashboard">View Dashboard</a>
            </Button>
          )}
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value="New Quote Request from Termo Glob Website" />
      {user && <input type="hidden" name="user_id" value={user.id} />}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium mb-2 block">
            {t.contact.firstName}
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="John"
            defaultValue={user?.name.split(" ")[0] || ""}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-medium mb-2 block">
            {t.contact.lastName}
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Doe"
            defaultValue={user?.name.split(" ").slice(1).join(" ") || ""}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium mb-2 block">
          {t.contact.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="john@example.com"
          defaultValue={user?.email || ""}
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium mb-2 block">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="+383 44 123 456"
        />
      </div>

      <div>
        <label htmlFor="serviceType" className="text-sm font-medium mb-2 block">
          {t.contact.serviceType}
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          required
        >
          <option value="">{t.contact.selectService}</option>
          <option value="HVAC Installation">{t.contact.hvacInstallation}</option>
          <option value="CAD Design">{t.contact.cadDesign}</option>
          <option value="Consultation">{t.contact.consultation}</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium mb-2 block">
          {t.contact.projectDetails}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          placeholder={t.contact.projectPlaceholder}
          required
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-red-800 font-medium">There was a problem submitting your form</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        </div>
      )}

      <Button type="submit" className="w-full py-3 text-lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : t.contact.sendMessage}
      </Button>
    </form>
  )
}
