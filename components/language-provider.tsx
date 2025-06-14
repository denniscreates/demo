"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, getTranslation } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      try {
        const savedLanguage = localStorage.getItem("termo-glob-language") as Language
        if (savedLanguage && ["en", "sq", "nl", "de"].includes(savedLanguage)) {
          setLanguage(savedLanguage)
        }
      } catch (error) {
        console.warn("Failed to load language from localStorage:", error)
      }
      setIsLoaded(true)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("termo-glob-language", lang)
      } catch (error) {
        console.warn("Failed to save language to localStorage:", error)
      }
    }
  }

  const t = getTranslation(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Safe hook that provides fallback values
export function useLanguageSafe() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Return fallback values if not within provider
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: getTranslation("en"),
      isLoaded: true,
    }
  }
  return context
}
