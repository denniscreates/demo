"use client"

import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Thermometer, Wind, Zap, Wrench, Building2, PenTool, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t.services.title}</h1>
            <p className="text-xl text-muted-foreground">{t.services.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{t.services.hvacTitle}</CardTitle>
                </div>
                <CardDescription className="text-base">{t.services.hvacDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Wind className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.services.ventilation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.services.heating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.services.airConditioning}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.services.maintenance}</span>
                  </div>
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  From design to installation and maintenance, we provide end-to-end HVAC solutions that ensure optimal
                  comfort and energy efficiency.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Get HVAC Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{t.services.cadTitle}</CardTitle>
                </div>
                <CardDescription className="text-base">{t.services.cadDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.services.architecturalPlans}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.services.technicalDrawings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PenTool className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.services.modeling3d}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.services.qualityAssurance}</span>
                  </div>
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  Professional CAD services including detailed technical drawings, 3D modeling, and comprehensive
                  project documentation for all engineering disciplines.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Get CAD Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive support for all your engineering needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.contact.consultation}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert engineering consultation for project planning and optimization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional installation services by certified technicians</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Thermometer className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.services.maintenance}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ongoing maintenance and support to ensure optimal system performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
