"use client"

import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Award, Target, Eye, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t.home.aboutTitle}</h1>
            <p className="text-xl text-muted-foreground">{t.home.aboutSubtitle}</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg leading-relaxed mb-6">{t.home.aboutText1}</p>
                <p className="text-lg leading-relaxed mb-6">{t.home.aboutText2}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Professional</Badge>
                  <Badge variant="secondary">Reliable</Badge>
                  <Badge variant="secondary">Innovative</Badge>
                  <Badge variant="secondary">Sustainable</Badge>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <Target className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To provide innovative, sustainable, and reliable HVAC and engineering solutions that exceed our
                      clients' expectations while contributing to a more comfortable and efficient built environment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Eye className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To be the leading HVAC and engineering company in the Balkans, recognized for our technical
                      excellence, innovation, and commitment to sustainability.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Heart className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Our Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Excellence, integrity, innovation, sustainability, and customer satisfaction guide everything we
                      do.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Team Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <p className="text-xl text-muted-foreground">Specialized knowledge across multiple sectors</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t.home.residential}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comfortable and efficient home solutions for families across Kosovo
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t.home.commercial}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional HVAC systems for offices, retail spaces, and commercial facilities
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t.home.industrial}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Large-scale engineering projects for manufacturing and industrial facilities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
