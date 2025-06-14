"use client"

import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/termo-glob-logo.png"
              alt="Termo Glob Logo"
              width={120}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.services.hvacTitle}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.services.cadTitle}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.contact.consultation}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.services.maintenance}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.contact}</h4>
            <div className="space-y-2 text-sm">
              <p>Prishtina, Kosovo</p>
              <p>info@termoglob.com</p>
              <p>+38344239177</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="text-center text-sm">
          <p>&copy; 2025 Termo Glob. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
