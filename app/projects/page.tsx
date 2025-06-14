"use client"

import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Wrench, MapPin, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedStats } from "@/components/animated-stats"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Residential Complex HVAC System",
      location: "Prishtina, Kosovo",
      year: "2024",
      type: "Residential",
      description: "Complete HVAC system design and installation for a 50-unit residential complex.",
      category: "HVAC",
    },
    {
      title: "Commercial Office Building CAD Design",
      location: "Prizren, Kosovo",
      year: "2024",
      type: "Commercial",
      description: "Comprehensive CAD design for a 5-story commercial office building.",
      category: "CAD",
    },
    {
      title: "Industrial Facility Ventilation",
      location: "Mitrovica, Kosovo",
      year: "2023",
      type: "Industrial",
      description: "Industrial ventilation system for a manufacturing facility.",
      category: "HVAC",
    },
    {
      title: "Shopping Mall Climate Control",
      location: "Gjilan, Kosovo",
      year: "2023",
      type: "Commercial",
      description: "Advanced climate control system for a large shopping mall.",
      category: "HVAC",
    },
    {
      title: "Hospital HVAC Infrastructure",
      location: "Peja, Kosovo",
      year: "2023",
      type: "Healthcare",
      description: "Critical HVAC infrastructure for a regional hospital.",
      category: "HVAC",
    },
    {
      title: "Educational Campus Design",
      location: "Gjakova, Kosovo",
      year: "2022",
      type: "Educational",
      description: "Complete CAD design for a university campus expansion.",
      category: "CAD",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t.projects.title}</h1>
            <p className="text-xl text-muted-foreground">{t.projects.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedStats
        cadProjects={t.home.cadProjects}
        hvacWorks={t.home.hvacWorks}
        clientSatisfaction={t.home.clientSatisfaction}
      />

      {/* Project Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.projects.residentialTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.projects.residentialDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.projects.commercialTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.projects.commercialDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.projects.industrialTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.projects.industrialDesc}</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Projects */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground">Showcasing our latest engineering achievements</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.category === "HVAC" ? "default" : "secondary"}>{project.category}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
