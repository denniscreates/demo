"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "./language-switcher"
import { SimpleLoginModal } from "./simple-login-modal"
import { useLanguage } from "./language-provider"
import { useSimpleAuth } from "./simple-auth"
import { Menu, X, User, LogOut } from "lucide-react"
import { useState } from "react"

export function SimpleHeader() {
  const { t, isLoaded } = useLanguage()
  const { user, logout, isLoading } = useSimpleAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  if (!isLoaded || isLoading) {
    return (
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/termo-glob-logo.png" alt="Logo" width={120} height={60} className="h-12 w-auto" />
          </Link>
          <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/termo-glob-logo.png" alt="Logo" width={120} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              {t.nav.home}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              {t.nav.about}
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              {t.nav.services}
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-primary">
              {t.nav.projects}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              {t.nav.contact}
            </Link>
            <Link href="/jobs" className="text-sm font-medium hover:text-primary">
              {t.nav.jobs}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/simple-dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => setShowLoginModal(true)}>Sign In</Button>
            )}

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                {t.nav.home}
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                {t.nav.about}
              </Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                {t.nav.services}
              </Link>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                {t.nav.projects}
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                {t.nav.contact}
              </Link>
              <Link href="/jobs" onClick={() => setIsMenuOpen(false)}>
                {t.nav.jobs}
              </Link>

              {user ? (
                <>
                  <Link href="/simple-dashboard" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <Button variant="outline" onClick={logout} className="w-fit">
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button onClick={() => setShowLoginModal(true)} className="w-fit">
                  Sign In
                </Button>
              )}
            </nav>
          </div>
        )}
      </header>

      <SimpleLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  )
}
