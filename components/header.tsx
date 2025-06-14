"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "./language-switcher"
import { AuthModal } from "./auth-modal"
import { useLanguage } from "./language-provider"
import { useAuth } from "./auth-provider"
import { Menu, X, User, LogOut, FileText } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const { t, isLoaded } = useLanguage()
  const { user, logout, isLoading: authLoading } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")

  const handleAuthClick = (mode: "login" | "signup") => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  // Add debugging
  useEffect(() => {
    console.log("Header - Auth state:", { user: user?.email, authLoading })
  }, [user, authLoading])

  // Show loading state if translations aren't loaded yet
  if (!isLoaded) {
    return (
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/termo-glob-logo.png"
              alt="Termo Glob Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
        </div>
      </header>
    )
  }

  // Show loading state if auth is loading
  if (authLoading) {
    return (
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/termo-glob-logo.png"
              alt="Termo Glob Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 animate-slide-in-bottom">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover-scale">
            <Image
              src="/images/termo-glob-logo.png"
              alt="Termo Glob Logo"
              width={120}
              height={60}
              className="h-12 w-auto transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-all duration-300 hover-lift">
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover-lift"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover-lift"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover-lift"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover-lift"
            >
              {t.nav.contact}
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover-lift"
            >
              {t.nav.jobs}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {user && !authLoading ? (
              <div className="flex items-center gap-3">
                <Button asChild className="hidden lg:inline-flex hover-lift">
                  <Link href="/contact">{t.nav.getQuote}</Link>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                        <FileText className="h-4 w-4 mr-2" />
                        My Quotes
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={() => handleAuthClick("login")} className="hidden lg:inline-flex">
                  Sign In
                </Button>
                <Button onClick={() => handleAuthClick("signup")} className="hover-lift">
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden hover-scale"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white animate-slide-in-bottom">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover-scale"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover-scale"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover-scale"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover-scale"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.projects}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover-scale"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/jobs"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover-scale"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.jobs}
              </Link>

              {user && !authLoading ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium hover:text-primary transition-all duration-300 hover-scale"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Button variant="outline" onClick={logout} className="w-fit">
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={() => handleAuthClick("login")} className="w-fit">
                    Sign In
                  </Button>
                  <Button onClick={() => handleAuthClick("signup")} className="w-fit">
                    Get Started
                  </Button>
                </>
              )}
            </nav>
          </div>
        )}
      </header>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} defaultMode={authMode} />
    </>
  )
}
