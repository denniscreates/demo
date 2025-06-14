"use client"

import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase, GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { JobApplicationFormHTML } from "@/components/job-application-form-html"
import { useState } from "react"

export default function JobsPage() {
  const { t } = useLanguage()
  const [selectedJob, setSelectedJob] = useState<string | null>(null)

  const jobs = [
    {
      title: "Senior HVAC Engineer",
      department: "Engineering",
      type: "Full Time",
      location: "Prishtina, Kosovo",
      experience: "5+ years",
      description: "Lead HVAC system design and implementation for commercial and industrial projects.",
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "5+ years of HVAC design experience",
        "Proficiency in AutoCAD and HVAC design software",
        "Strong project management skills",
      ],
    },
    {
      title: "CAD Designer",
      department: "Design",
      type: "Full Time",
      location: "Prishtina, Kosovo",
      experience: "3+ years",
      description: "Create detailed technical drawings and 3D models for engineering projects.",
      requirements: [
        "Diploma in Technical Drawing or related field",
        "3+ years of CAD experience",
        "Proficiency in AutoCAD, SolidWorks, or similar",
        "Attention to detail and accuracy",
      ],
    },
    {
      title: "HVAC Technician",
      department: "Installation",
      type: "Full Time",
      location: "Prishtina, Kosovo",
      experience: "2+ years",
      description: "Install, maintain, and repair HVAC systems for residential and commercial clients.",
      requirements: [
        "Technical certification in HVAC",
        "2+ years of hands-on experience",
        "Valid driver's license",
        "Physical ability to work in various conditions",
      ],
    },
  ]

  if (selectedJob) {
    return (
      <div className="min-h-screen bg-background">
        <SimpleHeader />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Button variant="outline" onClick={() => setSelectedJob(null)} className="mb-6">
                ← Back to Jobs
              </Button>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Apply for {selectedJob}</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below to apply for this position.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <JobApplicationFormHTML jobTitle={selectedJob} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t.jobs.title}</h1>
            <p className="text-xl text-muted-foreground">{t.jobs.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {jobs.length > 0 ? (
              <div className="space-y-8">
                {jobs.map((job, index) => (
                  <Card
                    key={index}
                    className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                          <CardDescription className="text-base">{job.description}</CardDescription>
                        </div>
                        <Badge variant="default" className="ml-4">
                          {job.type}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          {job.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2 text-sm">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button onClick={() => setSelectedJob(job.title)} className="w-full sm:w-auto">
                        {t.jobs.applyNow}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Open Positions</h3>
                  <p className="text-muted-foreground mb-6">{t.jobs.noPositions}</p>
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
