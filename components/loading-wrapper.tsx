"use client"

import type React from "react"

import { useLanguage } from "./language-provider"

interface LoadingWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function LoadingWrapper({ children, fallback }: LoadingWrapperProps) {
  const { isLoaded } = useLanguage()

  if (!isLoaded) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )
    )
  }

  return <>{children}</>
}
