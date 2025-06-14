"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// In a real application, this would come from a database
// This is just for demonstration purposes
interface QuoteRequest {
  id: string
  firstName: string
  lastName: string
  email: string
  serviceType: string
  projectDetails: string
  submittedAt: string
}

export default function AdminPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // In a real application, you would fetch this data from your database
  useEffect(() => {
    // Simulate loading quotes from a database
    setTimeout(() => {
      // This is just demo data
      setQuotes([
        {
          id: "1",
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          serviceType: "HVAC Installation",
          projectDetails: "Need a new HVAC system for my 3-bedroom house.",
          submittedAt: new Date().toISOString(),
        },
        {
          id: "2",
          firstName: "Jane",
          lastName: "Smith",
          email: "jane@example.com",
          serviceType: "CAD Design",
          projectDetails: "Looking for detailed CAD designs for a commercial building project.",
          submittedAt: new Date(Date.now() - 86400000).toISOString(),
        },
      ])
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Website
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quote Requests</h1>
        <p className="text-muted-foreground mt-2">View and manage quote requests submitted through your website.</p>
      </div>

      {isLoading ? (
        <div className="text-center py-12">Loading quote requests...</div>
      ) : quotes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No quote requests yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {quotes.map((quote) => (
            <Card key={quote.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>
                      {quote.firstName} {quote.lastName}
                    </CardTitle>
                    <CardDescription>{quote.email}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(quote.submittedAt).toLocaleDateString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Service Type</div>
                    <div>{quote.serviceType}</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-medium">Project Details</div>
                    <div className="whitespace-pre-wrap">{quote.projectDetails}</div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Mark as Contacted</Button>
                    <Button>Send Response</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
