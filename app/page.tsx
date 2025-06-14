"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building2, Wrench, Users, Award, Phone, Mail, MapPin, Thermometer, Wind, Zap, PenTool } from "lucide-react"
import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { AnimatedStats } from "@/components/animated-stats"
import { useLanguage } from "@/components/language-provider"
import { ContactForm } from "@/components/contact-form"
import { FORMSPREE_FORM_ID } from "@/lib/formspree"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { LoadingWrapper } from "@/components/loading-wrapper"

function HomePageContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background relative">
      <SimpleHeader />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeInUp" delay={200}>
              <Badge variant="outline" className="mb-4 animate-pulse-glow">
                Premier Engineering Solutions
              </Badge>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400}>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">{t.home.heroTitle}</h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={800}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t.home.heroSubtitle}</p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="hover-lift animate-pulse-glow">
                  <Link href="/contact">{t.home.startProject}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-lift">
                  <Link href="/services">{t.home.ourServices}</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStats
        cadProjects={t.home.cadProjects}
        hvacWorks={t.home.hvacWorks}
        clientSatisfaction={t.home.clientSatisfaction}
      />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.home.aboutTitle}</h2>
              <p className="text-xl text-muted-foreground">{t.home.aboutSubtitle}</p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <p className="text-lg leading-relaxed mb-6">{t.home.aboutText1}</p>
                <p className="text-lg leading-relaxed mb-6">{t.home.aboutText2}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover-scale">
                    Professional
                  </Badge>
                  <Badge variant="secondary" className="hover-scale">
                    Reliable
                  </Badge>
                  <Badge variant="secondary" className="hover-scale">
                    Innovative
                  </Badge>
                  <Badge variant="secondary" className="hover-scale">
                    Sustainable
                  </Badge>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-2 gap-4">
                <AnimatedCard delay={300} className="hover-lift">
                  <CardHeader className="pb-3">
                    <Building2 className="h-8 w-8 text-primary mb-2 hover-rotate" />
                    <CardTitle className="text-lg">{t.home.residential}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Home comfort solutions</p>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={400} className="hover-lift">
                  <CardHeader className="pb-3">
                    <Users className="h-8 w-8 text-primary mb-2 hover-rotate" />
                    <CardTitle className="text-lg">{t.home.commercial}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Business HVAC systems</p>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={500} className="hover-lift">
                  <CardHeader className="pb-3">
                    <Wrench className="h-8 w-8 text-primary mb-2 hover-rotate" />
                    <CardTitle className="text-lg">{t.home.industrial}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Large-scale solutions</p>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={600} className="hover-lift">
                  <CardHeader className="pb-3">
                    <Award className="h-8 w-8 text-primary mb-2 hover-rotate" />
                    <CardTitle className="text-lg">{t.home.expertTeam}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Certified professionals</p>
                  </CardContent>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to your specific needs
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatedCard delay={200} className="p-6 hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg hover-glow">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">HVAC Systems</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Complete heating, ventilation, and air conditioning solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 hover-scale">
                    <Wind className="h-4 w-4 text-primary" />
                    <span className="text-sm">Ventilation Systems</span>
                  </div>
                  <div className="flex items-center gap-2 hover-scale">
                    <Thermometer className="h-4 w-4 text-primary" />
                    <span className="text-sm">Heating Solutions</span>
                  </div>
                  <div className="flex items-center gap-2 hover-scale">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">Air Conditioning</span>
                  </div>
                  <div className="flex items-center gap-2 hover-scale">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span className="text-sm">Maintenance</span>
                  </div>
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  From design to installation and maintenance, we provide end-to-end HVAC solutions that ensure optimal
                  comfort and energy efficiency.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={400} className="p-6 hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg hover-glow">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">CAD Project Design</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Precision engineering drawings and technical documentation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 hover-scale">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Architectural Plans</span>
                  </div>
                  <div className="flex items-center gap-2 hover-scale">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span className="text-sm">Technical Drawings</span>
                  </div>
                  <div className="flex items-center gap-2 hover-scale">
                    <PenTool className="h-4 w-4 text-primary" />
                    <span className="text-sm">3D Modeling</span>
                  </div>
                  <div className="flex items-center gap-2 hover-scale">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">Quality Assurance</span>
                  </div>
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  Professional CAD services including detailed technical drawings, 3D modeling, and comprehensive
                  project documentation for all engineering disciplines.
                </p>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">Proven excellence across thousands of successful projects</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedCard delay={200} className="text-center p-6 hover-lift">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4 hover-glow">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Residential Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comfortable and efficient home solutions for families across Kosovo
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={400} className="text-center p-6 hover-lift">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4 hover-glow">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Commercial Buildings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional HVAC systems for offices, retail spaces, and commercial facilities
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={600} className="text-center p-6 hover-lift">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4 hover-glow">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Industrial Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Large-scale engineering projects for manufacturing and industrial facilities
                </p>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Ready to start your next project? Contact our expert team today.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-scale">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Prishtina, Kosovo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 hover-scale">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+38344239177</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 hover-scale">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@termoglob.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Business Hours</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Saturday: 8:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedCard delay={400} className="p-6 hover-lift">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <ContactForm formId={FORMSPREE_FORM_ID} />
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default function HomePage() {
  return (
    <LoadingWrapper>
      <HomePageContent />
    </LoadingWrapper>
  )
}
