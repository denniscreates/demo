"use client"

import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ContactForm } from "@/components/contact-form"
import { FORMSPREE_FORM_ID } from "@/lib/formspree"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t.contact.title}</h1>
            <p className="text-xl text-muted-foreground">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-semibold mb-8">{t.contact.contactInfo}</h2>

                <div className="space-y-6 mb-8">
                  <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{t.contact.location}</h3>
                        <p className="text-muted-foreground">Prishtina, Kosovo</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{t.contact.phone}</h3>
                        <p className="text-muted-foreground">+38344239177</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{t.contact.email}</h3>
                        <p className="text-muted-foreground">info@termoglob.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{t.contact.businessHours}</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Saturday: 8:00 AM - 5:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">{t.contact.requestQuote}</CardTitle>
                  <CardDescription className="text-base">{t.contact.quoteDesc}</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <ContactForm formId={FORMSPREE_FORM_ID} />
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
