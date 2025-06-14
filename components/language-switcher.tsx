"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage, type Language } from "./language-provider"

const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "sq" as Language, name: "Shqip", flag: "🇽🇰" },
  { code: "nl" as Language, name: "Nederlands", flag: "🇳🇱" },
  { code: "de" as Language, name: "Deutsch", flag: "🇩🇪" },
]

export function LanguageSwitcher() {
  const { language, setLanguage, isLoaded } = useLanguage()
  const currentLang = languages.find((lang) => lang.code === language)

  if (!isLoaded) {
    return (
      <Button variant="outline" size="sm" className="gap-2" disabled>
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">Loading...</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLang?.flag} {currentLang?.name}
          </span>
          <span className="sm:hidden">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
