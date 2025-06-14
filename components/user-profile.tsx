"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, FileText, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react"
import { useLanguage } from "./language-provider"
import Link from "next/link"

interface Quote {
  id: string
  serviceType: string
  projectDetails: string
  status: "pending" | "reviewed" | "approved" | "completed"
  submittedAt: string
  estimatedCost?: string
  notes?: string
}

interface UserProfile {
  firstName: string
  lastName: string
  email: string
  phone?: string
  quotes: Quote[]
}

export function UserProfile() {
  const { t } = useLanguage()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load user profile from localStorage (in a real app, this would be from an API)
    const savedProfile = localStorage.getItem("termo-glob-profile")
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile))
    }
    setIsLoading(false)
  }, [])

  const getStatusColor = (status: Quote["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewed":
        return "bg-blue-100 text-blue-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: Quote["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "reviewed":
        return <FileText className="h-4 w-4" />
      case "approved":
        return <CheckCircle className="h-4 w-4" />
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!profile) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <CardTitle>Welcome to Your Profile</CardTitle>
          <CardDescription>
            Create your profile to track quotes and manage your projects with Termo Glob.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button asChild className="w-full">
            <Link href="/contact">Get Your First Quote</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">
                {profile.firstName} {profile.lastName}
              </CardTitle>
              <CardDescription>{profile.email}</CardDescription>
              {profile.phone && <p className="text-sm text-muted-foreground">{profile.phone}</p>}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Quotes Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Quotes</CardTitle>
              <CardDescription>Track the status of your project quotes</CardDescription>
            </div>
            <Button asChild>
              <Link href="/contact">
                <Plus className="h-4 w-4 mr-2" />
                New Quote
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {profile.quotes.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No quotes yet</p>
              <Button asChild>
                <Link href="/contact">Request Your First Quote</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {profile.quotes.map((quote) => (
                <div key={quote.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{quote.serviceType}</h4>
                      <p className="text-sm text-muted-foreground">
                        Submitted: {new Date(quote.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={getStatusColor(quote.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(quote.status)}
                        <span className="capitalize">{quote.status}</span>
                      </div>
                    </Badge>
                  </div>

                  <p className="text-sm mb-3">{quote.projectDetails}</p>

                  {quote.estimatedCost && (
                    <>
                      <Separator className="my-3" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Estimated Cost:</span>
                        <span className="text-lg font-bold text-primary">{quote.estimatedCost}</span>
                      </div>
                    </>
                  )}

                  {quote.notes && (
                    <>
                      <Separator className="my-3" />
                      <div>
                        <span className="text-sm font-medium">Notes:</span>
                        <p className="text-sm text-muted-foreground mt-1">{quote.notes}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
